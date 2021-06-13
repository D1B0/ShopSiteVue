<template>
  <div>
    <section id="promo" class="promo">
      <div class="promo__img">
        <img class="promo__photo" src="./../assets/promo.png" alt="photo">
      </div>
      <div class="promo__text">
        <div class="promo__content">
          <h1 class="promo__heading">THE BRAND</h1>
          <p class="promo__info">OF LUXERIOUS <span class="select">FASHION</span></p>
        </div>
      </div>
    </section>
    <section class="sale center">
      <div class="sale__top">
        <div class="sale__item">
          <a href="#">
            <img class="sale__img" src="./../assets/item-1.png" alt="item">
            <div class="sale__text">
              <p class="sale__p">30% OFF</p>
              <h3 class="sale__heading">FOR WOMEN</h3>
            </div>
          </a>
        </div>
        <div class="sale__item">
          <a href="#">
            <img class="sale__img" src="./../assets/item-2.png" alt="item">
            <div class=" sale__text">
              <p class="sale__p">HOT DEAL</p>
              <h3 class="sale__heading">FOR MEN</h3>
            </div>
          </a>
        </div>
        <div class="sale__item">
          <a href="#">
            <img class="sale__img" src="./../assets/item-3.png" alt="item">
            <div class="sale__text">
              <p class="sale__p">NEW ARRIVALS</p>
              <h3 class="sale__heading">FOR KIDS</h3>
            </div>
          </a>
        </div>
      </div>
      <div class="sale__bottom">
        <div class="sale__item bottom__item">
          <a href="#">
            <img class="sale__img img__bottom" src="./../assets/item-big.png" alt="item">
            <div class="sale__text">
              <p class="sale__p">LUXIROUS & TRENDY</p>
              <h3 class="sale__heading">ACCESORIES</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section class="product center">
      <div class="product__header">
        <h3 class="product__maintext">Fetured Items</h3>
        <p class="product__p">Shop for items based on what we featured in this week</p>
      </div>
      <div v-if="$store.state.productModule.search === ''" class="product__block">
        <ProductItem v-for="product in $store.getters.getAllProducts.slice(0,9)" :key="product.id_product"
                     :product="product"/>
      </div>
      <div v-else class="product__block">
        <ProductItem v-for="product in $store.getters.getFilterProduct" :key="product.id_product" :product="product"/>
      </div>
      <div class="product__footer">
        <router-link to="/catalog" class="product__button">Browse All Product</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem";


export default {

  components: {ProductItem},
  data() {
    return {}
  },
  mounted() {

    this.$store.dispatch('fetchProducts')
    this.$root.$on('dropBehind', () => {
      if (this.showShade === false) {
        document.getElementById('promo').classList.toggle('shade')
      } else {
        document.getElementById('promo').classList.toggle('shade')
      }
    })
  },


}
</script>

<style scoped>

</style>