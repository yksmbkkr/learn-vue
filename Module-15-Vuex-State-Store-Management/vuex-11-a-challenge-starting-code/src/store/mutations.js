export default {
  setAuth: (state, payload) => {
    state.isLoggedIn = payload.authStatus;
  }
}
