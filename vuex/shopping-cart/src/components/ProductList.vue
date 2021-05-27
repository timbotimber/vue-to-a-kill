<template>
  <div>
      <h1>Product List</h1>
      <img v-if="loading" src="https://i.stack.imgur.com/h6viz.gif">
      <ul v-else>
          <li v-for="product in products" :key="product.id">
             <h2>{{product.title}}-{{product.price}}</h2>
              <button @click="addProductToCart(product)"> Add to cart</button>
              </li>
          
      </ul>
  </div>
</template>

<script>
import shop from "@/api/shop"
export default {

data () {
    return {
        loading: false
    }
}, 
computed: {
    products () {
        return this.$store.getters.availableProducts
    }
},

methods: {
    addProductToCart (product) {
        this.$store.dispatch('addProductToCart', product)
    }
},

created () {
    this.loading = true
    this.$store.dispatch("fetchProducts").then(()=> this.loading = false)
}
}
</script>

<style>

</style>