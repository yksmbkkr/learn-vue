export default {
  login(context) {
    context.commit('setAuth', { authStatus: true });
  },
  logout(context) {
    context.commit('setAuth', { authStatus: false });
  }
}
