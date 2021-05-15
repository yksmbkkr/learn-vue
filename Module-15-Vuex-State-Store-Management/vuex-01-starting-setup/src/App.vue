<template>
  <base-container title="Vuex" v-if='isLoggedIn'>
    <TheCounter></TheCounter>
    <favourite-value></favourite-value>
    <button @click='addOne'>Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title='User Auth'>
    <user-auth></user-auth>
  </base-container>

</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from '@/components/TheCounter';
import ChangeCounter from '@/components/ChangeCounter';
import FavouriteValue from '@/components/FavouriteValue';
import UserAuth from '@/components/UserAuth';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserAuth,
    FavouriteValue,
    ChangeCounter,
    TheCounter,
    BaseContainer,
  },

  methods: {
    addOne() {
      this.$store.dispatch('numbers/increase', {value: 10})
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'getAuthStatus'
    })
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
