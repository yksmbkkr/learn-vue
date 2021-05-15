<template>
  <button @click='increment'>Add 2</button>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ChangeCounter',
  methods: {
    // addOne() {
    //   // this.$store.commit('increase', {value: 10})
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10
    //   })
    // }
    ...mapActions('numbers', ['increment'])
  }
};
</script>

<style scoped>

</style>
