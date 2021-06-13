<template>
  <div>
    <section class="header__navigation header__navigation_reg center">
      <h1 class="header__title header__title_reg">SHOPPING CART</h1>
    </section>
    <section class="cart center">
      <div class="cart__left">

        <CartItem v-for="product in $store.getters.getCart" :key="product.id_product"  :product="product"/>

          <div class="cart__button">
            <form>
              <button @click="deleteAllCart" class="cart__clear" type="reset"><span class="old__machine">CLEAR SHOPPING
                            CART</span></button>
              <button @click="deleteAllCart" class="cart__clear_mobile" type="reset"><span class="old__machine">Clear shopping
                            cart</span></button>
            </form>
            <router-link to="/" class="cart__redirect">
            <form action="">
              <button class="cart__continue"><span class="old__machine">CONTINUE SHOPPING</span></button>
              <button class="cart__continue_mobile"><span class="old__machine">Continue shoping</span></button>
            </form>
            </router-link>
          </div>
        </div>
        <div class="cart__right">
          <div class="cart__block">
            <h3 class="cart__post">SHIPPING ADDRESS</h3>
            <form class="cart__place">
              <input class="cart__address" type="text" placeholder="Country">
              <input class="cart__address" type="text" placeholder="State">
              <input class="cart__address" type="text" placeholder="Postcode / Zip">
              <button class="cart__input" type="submit"> GET A QUOTE</button>
              <button class="cart__input_mobile" type="submit"> Get a quote</button>
            </form>
          </div>
          <div class="cart__buy">
            <h3 class="cart__subtotal">SUB TOTAL <span class="cart__sub">{{ $store.getters.getCartCost }}$</span></h3>
            <h2 class="cart__grandtotal">GRAND TOTAL <span class="cart__grand">{{ $store.getters.getCartCost }}$</span></h2>
            <hr class="cart__line">
            <form>
              <button class="cart__checkout"><span class="old__machine">PROCEED TO CHECKOUT</span></button>
            </form>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem";
export default {
  components: {CartItem},
  created() {
    this.$store.dispatch('fetchCarts')
  },
  methods:{
    deleteAllCart(data){
      this.$store.dispatch('deleteJson', data)
    }
  }
}

</script>

<style scoped>

</style>