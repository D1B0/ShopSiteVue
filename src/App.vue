<template>
  <div>
  <Navbar/>
  <router-view/>
  <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,

  },
  methods:{
    addToCart(product){
      console.log(product)
    }
  }
}

</script>

<style >
@import './assets/Style.css'
</style>