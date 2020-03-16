export const CART = {
  PUSH_PRODUCT_TO_CART: 'pushProductToCart', //  把商品加到购物车 - 购物车没同样商品的时候，添加，数量为1
  INCREMENT_ITEM_QUANTITY: 'incrementItemQuantity', //  把商品加到购物车 - 购物车有同样商品的时候数量加1
  SET_CART_ITEMS: 'setCartItems', //  设置购物车商品列表
  SET_CHECKOUT_STATUS: 'setCheckoutStatus' //  设置购买提交后状态 - 是否购买成功
}

export const PRODUCTS = {
  SET_PRODUCTS: 'setProducts', //  设置商品列表
  DECREMENT_PRODUCT_INVENTORY: 'decrementProductInventory' // 点击添加购物车后减库存
}
