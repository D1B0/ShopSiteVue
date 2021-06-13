<template>
  <header class="header center">
    <div class="header__left">
      <router-link to="/"><img src="./../assets/logo.svg" alt="logo">
      </router-link>
      <img class="header__search" src="./../assets/search.svg" alt="search"
           @click="sendSearch(search)">
      <input type="text"
             v-on:input="sendSearch(search)"
             v-model="search"
             class="header__search_input">
    </div>
    <ul class="header__right">
      <li>
        <details id="drops" class="header__menu">
          <summary class="header__detail__button">
            <img for class="header__menu__img" src="./../assets/menu.svg" alt="menu" @click="dropBehind">
          </summary>

          <div class="header__detail">
            <div class="header__menu__right">
              <ul>
                <li class="header__menu__link header__text">
                  <h2>MENU</h2>
                </li>
                <li class="header__menu__link header__p">
                  <router-link to="/catalog" class="header__link__p"
                               href="catalog.html">MAN
                  </router-link>
                </li>
                <li class="header__menu__link header__wear">
                  <router-link to="/catalog" class="header__link__style"
                               href="catalog.html">Accessories
                  </router-link>
                </li>
                <li class="header__menu__link header__wear">
                  <router-link to="/catalog" class="header__link__style"
                               href="catalog.html">Bags
                  </router-link>
                </li>
                <li class="header__menu__link header__wear">
                  <router-link to="/catalog" class="header__link__style"
                               href="catalog.html">Denim
                  </router-link>
                </li>
                <li class="header__menu__link header__wear">
                  <router-link to="/catalog" class="header__link__style"
                               href="catalog.html">T-Shirts
                  </router-link>
                </li>
                <li class="header__menu__link header__p">
                  <router-link to="/catalog" class="header__link__p"
                               href="catalog.html">WOMAN
                  </router-link>
                </li>
                <li class="header__menu__link header__wear">
                  <router-link to="/catalog" class="header__link__style"
                               href="catalog.html">Accessories
                  </router-link>
                </li>
                <li class="header__menu__link header__wear">
                  <router-link to="/catalog" class="header__link__style"
                               href="catalog.html">Jackets &
                    Coats
                  </router-link>
                </li>
                <li class="header__menu__link header__wear">
                  <router-link to="/catalog" class="header__link__style"
                               href="catalog.html">Polos
                  </router-link>
                </li>
                <li class="header__menu__link header__wear">
                  <router-link to="/catalog" class="header__link__style"
                               href="catalog.html">T-Shirts
                  </router-link>
                </li>
                <li class="header__menu__link header__wear">
                  <router-link to="/catalog" class="header__link__style"
                               href="catalog.html">Shirts
                  </router-link>
                </li>
                <li class="header__menu__link header__p">
                  <router-link to="/catalog" class="header__link__p"
                               href="catalog.html">KIDS
                  </router-link>
                </li>
                <li class=" header__menu__link header__wear">
                  <router-link to="/catalog" class="header__link__style"
                               href="catalog.html">Accessories
                  </router-link>
                </li>
                <li class="header__menu__link header__wear">
                  <router-link to="/catalog" class="header__link__style"
                               href="catalog.html">Jackets &
                    Coats
                  </router-link>
                </li>
                <li class="header__menu__link header__wear">
                  <router-link to="/catalog" class="header__link__style"
                               href="catalog.html">Polos
                  </router-link>
                </li>
                <li class="header__menu__link header__wear">
                  <router-link to="/catalog" class="header__link__style"
                               href="catalog.html">T-Shirts
                  </router-link>
                </li>
                <li class="header__menu__link header__wear">
                  <router-link to="/catalog" class="header__link__style"
                               href="catalog.html">Shirts
                  </router-link>
                </li>
                <li class="header__menu__link header__wear">
                  <router-link to="/catalog" class="header__link__style"
                               href="catalog.html">Bags
                  </router-link>
                </li>

                <li class="menu__new">
                  <router-link to="/registration" class="menu__new_decor"
                               href="registration.html">Registration
                  </router-link>
                </li>
                <li class="menu__new">
                  <router-link to="/cart" class="menu__new_decor" href="cart.html">Cart</router-link>
                </li>

              </ul>
            </div>

            <div class="header__menu__left">
              <svg class="header__menu__close" width="13" height="13" viewBox="0 0 13 13"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.4158 6.00409L11.7158 1.71409C11.9041 1.52579 12.0099
                    1.27039 12.0099 1.00409C12.0099 0.73779 11.9041 0.482395
                    11.7158 0.294092C11.5275 0.105788 11.2721 0 11.0058
                    0C10.7395 0 10.4841 0.105788 10.2958 0.294092L6.0058
                    4.59409L1.7158 0.294092C1.52749 0.105788 1.2721 -1.9841e-09 1.0058
                    0C0.739497 1.9841e-09 0.484102 0.105788 0.295798 0.294092C0.107495
                    0.482395 0.0017066 0.73779 0.0017066 1.00409C0.0017066 1.27039
                    0.107495 1.52579 0.295798 1.71409L4.5958 6.00409L0.295798
                    10.2941C0.20207 10.3871 0.127676 10.4977 0.0769072 10.6195C0.0261385
                    10.7414 0 10.8721 0 11.0041C0 11.1361 0.0261385 11.2668 0.0769072
                    11.3887C0.127676 11.5105 0.20207 11.6211 0.295798 11.7141C0.388761
                    11.8078 0.499362 11.8822 0.621222 11.933C0.743081 11.9838 0.873786
                    12.0099 1.0058 12.0099C1.13781 12.0099 1.26852 11.9838 1.39038
                    11.933C1.51223 11.8822 1.62284 11.8078 1.7158 11.7141L6.0058 7.41409L10.2958
                    11.7141C10.3888 11.8078 10.4994 11.8822 10.6212 11.933C10.7431 11.9838
                    10.8738 12.0099 11.0058 12.0099C11.1378 12.0099 11.2685 11.9838 11.3904
                    11.933C11.5122 11.8822 11.6228 11.8078 11.7158 11.7141C11.8095 11.6211
                    11.8839 11.5105 11.9347 11.3887C11.9855 11.2668 12.0116 11.1361 12.0116
                    11.0041C12.0116 10.8721 11.9855 10.7414 11.9347 10.6195C11.8839 10.4977
                    11.8095 10.3871 11.7158 10.2941L7.4158 6.00409Z" @click="dropBehind"/>
              </svg>

            </div>
          </div>

        </details>
      </li>
      <li class="left__icon">
        <router-link to="/registration"><img src="./../assets/account.svg" alt="account"></router-link>
      </li>
      <li class="left__icon">
        <div class="cart__img" ><img src="./../assets/cart.svg" alt="cart" @click="modalVisible">
          <div v-if="$store.getters.getLengthCart>0" class="cart__count">{{ $store.getters.getLengthCart }}</div>


          <CartModal v-if="CartVisible"/>
        </div>
      </li>
    </ul>
  </header>
</template>

<script>


import CartModal from "@/components/CartModal";


export default {
  components: {CartModal},

  data() {
    return {
      CartVisible: false,
      search: '',
      showShade: true
    }
  },
  mounted() {
    this.fetchCart()

  },
  methods: {
    dropBehind() {
      if (this.showShade === false) {
        this.showShade = !this.showShade
      } else {
        document.getElementById('drops').removeAttribute('open')
        this.showShade = !this.showShade
      }
      this.$root.$emit('dropBehind')
    },


    modalVisible() {
      this.CartVisible = !this.CartVisible
    },
    fetchCart() {
      this.$store.dispatch('fetchCarts')
    },
    sendSearch(search) {
      this.search = search
      this.$store.dispatch('takeSearch', this.search)
    }
  },

}
</script>

<style scoped>

</style>