# 21-Vuex最佳实践

## 知识大纲

### mapXxx

* State - this.$store.state.xxx mapState取值
* Getter - this.$store.getters.xxx mapGetters取值
* Mutation - this.$store.commit('xxx') mapMutations赋值
* Action - this.$store.dispatch('xxx') mapActions赋值
* Moudle

### 使用常量替代Mutation事件类型

* 代码如下
    ```js
    // mutations-types.js
    export const SOME_MUTATION = 'SOME_MUTATION'
    ```
    ```js
    // store.js
    import Vuex from 'vuex'
    import { SOME_MUTATION } from './mutations-types'
    const store = new Vuex.Store({
        state: {...},
        mutations: {
            // 我们可以使用ES2015风格的计算属性命名功能来使用一个常量作为函数名
            [SOME_MUTATION] (state) {
                // mutate state
            }
        }
    })
    ```

### Module

* 开启命名空间 namespaced: true
* 嵌套模块不要太深，尽量扁平化
* 灵活应用 createNamespacedHelpers

## 练习

* 做个购物车的功能
* 新建mutation-types.js
    ```js
    export const CART = {
    PUSH_PRODUCT_TO_CART: 'pushProductToCart',
    INCREMENT_ITEM_QUANTITY: 'incrementItemQuantity',
    SET_CART_ITEMS: 'setCartItems',
    SET_CHECKOUT_STATUS: 'setCheckoutStatus',
    }

    export const PRODUCTS = {
    SET_PRODUCTS:'setProducts',
    DECREMENT_PRODUCT_INVENTORY: 'decrementProductInventory'
    }    
    ```
* 在src下新建api文件夹，新建shop.js，模拟请求 
    ```js
    /**
    * Mocking client-server processing
    */
    const _products = [
        { "id": 1, "title": "华为 Mate 20", "price": 3999, "inventory": 2 },
        { "id": 2, "title": "小米 9", "price": 2999, "inventory": 0 },
        { "id": 3, "title": "OPPO R17", "price": 2999, "inventory": 5 }
    ]

    export default {
        getProducts(cb) {
            setTimeout(() => cb(_products), 100)
        },

        buyProducts(products, cb, errorCb) {
            setTimeout(() => {
                // simulate random checkout failure.
                Math.random() > 0.5
                    ? cb()
                    : errorCb()
            }, 100)
        }
    }    
    ```
* 在store下新建modules文件夹，分别创建cart.js和products.js
    ```js
    // cart
    import shop from '../../api/shop'
    import { CART, PRODUCTS } from '../mutation-types'

    // initial state
    // shape: [{ id, quantity }]
    const state = {
        items: [],
        checkoutStatus: null
    }

    // getters
    const getters = {
        cartProducts: (state, getters, rootState) => {
            return state.items.map(({ id, quantity }) => {
                const product = rootState.products.all.find(product => product.id === id)
                return {
                    title: product.title,
                    price: product.price,
                    quantity
                }
            })
        },

        cartTotalPrice: (state, getters) => {
            return getters.cartProducts.reduce((total, product) => {
                return total + product.price * product.quantity
            }, 0)
        }
    }

    // actions
    const actions = {
        checkout({ commit, state }, products) {
            const savedCartItems = [...state.items]
            commit(CART.SET_CHECKOUT_STATUS, null)
            // empty cart
            commit(CART.SET_CART_ITEMS, { items: [] })
            shop.buyProducts(
                products,
                () => commit(CART.SET_CHECKOUT_STATUS, 'successful'),
                () => {
                    commit(CART.SET_CHECKOUT_STATUS, 'failed')
                    // rollback to the cart saved before sending the request
                    commit(CART.SET_CART_ITEMS, { items: savedCartItems })
                }
            )
        },

        addProductToCart({ state, commit }, product) {
            commit(CART.SET_CHECKOUT_STATUS, null)
            if (product.inventory > 0) {
                const cartItem = state.items.find(item => item.id === product.id)
                if (!cartItem) {
                    commit(CART.PUSH_PRODUCT_TO_CART, { id: product.id })
                } else {
                    commit(CART.INCREMENT_ITEM_QUANTITY, cartItem)
                }
                // remove 1 item from stock
                commit(`products/${PRODUCTS.DECREMENT_PRODUCT_INVENTORY}`, { id: product.id }, { root: true })
            }
        }
    }

    // mutations
    const mutations = {
        [CART.PUSH_PRODUCT_TO_CART](state, { id }) {
            state.items.push({
                id,
                quantity: 1
            })
        },

        [CART.INCREMENT_ITEM_QUANTITY](state, { id }) {
            const cartItem = state.items.find(item => item.id === id)
            cartItem.quantity++
        },

        [CART.SET_CART_ITEMS](state, { items }) {
            state.items = items
        },

        [CART.SET_CHECKOUT_STATUS](state, status) {
            state.checkoutStatus = status
        }
    }

    export default {
        namespaced: true,
        state,
        getters,
        actions,
        mutations
    }    
    ```    
    ```js
    // products
    import shop from '../../api/shop'
    import { PRODUCTS } from '../mutation-types'

    // initial state
    const state = {
        all: []
    }

    // getters
    const getters = {}

    // actions
    const actions = {
        getAllProducts({ commit }) {
            shop.getProducts(products => {
                commit(PRODUCTS.SET_PRODUCTS, products)
            })
        }
    }

    // mutations
    const mutations = {
        [PRODUCTS.SET_PRODUCTS](state, products) {
            state.all = products
        },

        [PRODUCTS.DECREMENT_PRODUCT_INVENTORY](state, { id }) {
            const product = state.all.find(product => product.id === id)
            product.inventory--
        }
    }

    export default {
        namespaced: true,
        state,
        getters,
        actions,
        mutations
    }
    ```

* 新建2个组件ProductList.vue与ShoppingCart.vue
    ```vue
    <template>
    <ul>
        <li
        v-for="product in products"
        :key="product.id">
        {{ product.title }} - {{ product.price }}
        <br>
        <button
            :disabled="!product.inventory"
            @click="addProductToCart(product)">
            加入购物车
        </button>
        </li>
    </ul>
    </template>

    <script>
    import { mapState, mapActions } from 'vuex'
    export default {
    computed: mapState({
        products: state => state.products.all
    }),
    // computed: {
    //   products(){
    //     return this.$store.state.products.all
    //   }
    // },
    methods: mapActions('cart', [
        'addProductToCart'
    ]),
    // methods: {
    //   addProductToCart(product){
    //     this.$store.dispatch('cart/addProductToCart', product)
    //   }
    // },
    created () {
        this.$store.dispatch('products/getAllProducts')
    }
    }
    </script>

    ```
    ```vue
    <template>
    <div class="cart">
        <h2>清单</h2>
        <p v-show="!products.length"><i>请添加产品到购物车</i></p>
        <ul>
        <li
            v-for="product in products"
            :key="product.id">
            {{ product.title }} - {{ product.price }} x {{ product.quantity }}
        </li>
        </ul>
        <p>合计: {{ total }}</p>
        <p><button :disabled="!products.length" @click="checkout(products)">提交</button></p>
        <p v-show="checkoutStatus">提交 {{ checkoutStatus }}.</p>
    </div>
    </template>

    <script>
    import { mapGetters, mapState } from 'vuex'
    export default {
    computed: {
        ...mapState({
        checkoutStatus: state => state.cart.checkoutStatus
        }),
        ...mapGetters('cart', {
        products: 'cartProducts',
        total: 'cartTotalPrice'
        })
        // ...mapGetters({
        //   products: 'cart/cartProducts',
        //   total: 'cart/cartTotalPrice'
        // })
    },
    // computed: {
    //   checkoutStatus(){
    //     return this.$store.state.cart.checkoutStatus
    //   },
    //   products() {
    //     return this.$store.getters['cart/cartProducts']
    //   },
    //   total() {
    //     return this.$store.getters['cart/cartTotalPrice']
    //   }
    // },
    methods: {
        checkout (products) {
        this.$store.dispatch('cart/checkout', products)
        }
    }
    }
    </script>

    ```

* 最后App.vue中这么处理
    ```vue
    <template>
    <div id="app">
        <h1>购物车示例</h1>
        <p>账号: {{email}}</p>
        <hr>
        <h2>产品</h2>
        <ProductList/>
        <hr>
        <ShoppingCart/>
    </div>
    </template>

    <script>
    import { mapState } from 'vuex'
    import ProductList from './components/ProductList.vue'
    import ShoppingCart from './components/ShoppingCart.vue'
    export default {
    computed: mapState({
        email: state => state.userInfo.email
    }),
    components: { ProductList, ShoppingCart }
    }
    </script>

    ```    

## 知道你还不过瘾继续吧       

* [返回目录](../../README.md)
* [上一节-20-Vuex核心概念及底层原理](../02-生态篇/20-Vuex核心概念及底层原理.md)
* [下一节-22-VueRouter的使用场景](../02-生态篇/22-VueRouter的使用场景.md)