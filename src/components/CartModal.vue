<template>
  <div class="modal__cart">
    <CartItemModal v-for="product in $store.getters.getCart"
              :key="product.id_product"
              :product="product"

    />
    <router-link to="/cart" class="modal__go">Go To Cart</router-link>
  </div>

</template>

<script>
import CartItemModal from "@/components/CartItemModal";

export default {
  components: {CartItemModal},
  mounted() {
    this.$store.dispatch('fetchCarts')
  }
}
</script>

<style scoped>

</style>