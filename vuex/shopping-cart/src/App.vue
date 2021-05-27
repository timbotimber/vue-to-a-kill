<template>
  <div id="app">
    <HelloWorld/>
    <ProductList />
    <hr>
    <ShoppingCart />
     
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ProductList from "@/components/ProductList"
import ShoppingCart from "@/components/ShoppingCart"

export default {
  name: 'app',
  components: {
    HelloWorld, 
    ProductList,
    ShoppingCart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
