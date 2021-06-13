<template>
  <div class="product__item">
    <router-link :to="{ name: 'product', params: { id: product.id_product } }" :product="product"
                 class="product__item_styletext">
      <a class="product__link"><img class="item__img" :src="require(`./../assets/${product.image.toLowerCase()}.png`)"
                                    alt="item"></a>
      <div class="product__text">
        <a class="product__head">{{ product.product_name }}</a>
        <p class="product__description">{{ product.description }}</p>
        <p class="product__price">{{ product.price }}.00$</p>
      </div>
    </router-link>
    <a v-on:click="addToCart(product)" class="product__add">Add to Cart</a>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true

    }
  },
  methods: {
    addToCart(product) {

      let find = this.$store.state.productModule.carts.find(item => item.id_product === product.id_product)
      if (find) {
        this.$store.dispatch('putJson', product)
      } else {
        this.$store.dispatch('postJson', product)
      }
    }
  },

}
</script>

<style scoped>

</style>