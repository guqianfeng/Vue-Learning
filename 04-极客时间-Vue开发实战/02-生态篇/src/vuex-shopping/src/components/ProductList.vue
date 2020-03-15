<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} - {{ product.price | RMB }} - {{ '库存数量: ' + product.inventory }}
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
