import cartMutations from '@/store/modules/cart/mutations';
import cartActions from '@/store/modules/cart/actions';
import cartGetters from '@/store/modules/cart/getters';

export default {
  namespaced: true,
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    }
  },
  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters
}
