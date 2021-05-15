import { createStore } from 'vuex';
import authMutations from '@/store/mutations';
import authActions from '@/store/actions';
import authGetters from '@/store/getters';
import productStore from '@/store/modules/products/index'
import cartStore from '@/store/modules/cart/index'


const store = createStore({
  modules: {
    productsStore: productStore,
    cartStore: cartStore
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters
});

export default store;
