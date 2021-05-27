import Vuex from "vuex";
import Vue from "vue";
import shop from "@/api/shop";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // state is like the data object in a regular component
    products: [],
    cart: []
  },

  getters: {
    // getters are like the computed properties of a regular component. fires at runtime
    availableProducts(state, getters) {
      let filtered = state.products.filter(product => product.inventory > 0);
      // we're not mutating the state here
      return filtered;
    },

    cartProducts(state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(
          product => product.id === cartItem.id
        );
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        };
      });

      console.log("something here ");
    },

    cartTotal(state, getters) {
      let total = 0;
      getters.cartProducts.forEach(product => {
        total += product.price * product.quantity;
      });
      return total;
    }
  },

  actions: {
    // these are like methods
    fetchProducts({ commit }) {
      // context allows us to use all the built in functions of the vuex store within an action method

      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit("setProducts", products);
          resolve();
        });
      });
    },

    addProductToCart(context, product) {
      if (product.inventory > 0) {
        const cartItem = context.state.cart.find(
          item => item.id === product.id
        );

        if (!cartItem) {
          context.commit("pushProductToCart", product.id);
        } else {
          context.commit("incrementItemQuantity", cartItem);
        }
        context.commit("decrementProductInventory", product);
      }
    }
  },

  mutations: {
    // set and update the state
    // only setting the state here will reduce bugs
    setProducts(state, products) {
      state.products = products;
    },

    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      });
    },
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },

    decrementProductInventory(state, product) {
      product.inventory--;
    }
  }
});
