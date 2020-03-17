<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} - {{ product.price | RMB }} - {{ '库存数量: ' + product.inventory }}
      <br>
      <div v-show="product.inventory">
        <span>数量</span>
        <select v-model="numbers[product.id]">
          <option v-for="n in product.inventory" :key="n">
            {{ n }}
          </option>
        </select>
      </div>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart({product, number: numbers[product.id]})">
        加入购物车
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    products: state => state.products.all
  }),
  // computed: {
  //   products(){
  //     return this.$store.state.products.all
  //   }
  // },
  // methods: mapActions('cart', [
  //   'addProductToCart'
  // ]),
  methods: {
    addProductToCart (productObj) {
      this.$store.dispatch('cart/addProductToCart', productObj)
      this.numbers[productObj.product.id] = 1
    }
  },
  created () {
    this.$store.dispatch('products/getAllProducts')
  },
  data () {
    return {
      numbers: {}
    }
  },
  watch: {
    products: {
      handler (val) {
        val.forEach(product => {
          if (this.numbers[product.id] === undefined) {
            this.$set(this.numbers, product.id, 1)
          }
        })
      },
      immediate: true
    }
  }
}
</script>
