<template>
  <div>
      <h1>
          Shopping Cart
      </h1>
      <ul>
          <li v-for="product in products" :key="product.id">

                {{product.title}}- {{product.price}} - {{product.quantity}}

          </li>
          <h2>total: ${{totalPrice}}</h2>
      </ul>
  </div>
</template>

<script>
export default {
computed: {
    products(){
        return this.$store.getters.cartProducts
    },

    totalPrice() {
        return this.$store.getters.cartTotal
    }
}
}
</script>

<style>

</style>