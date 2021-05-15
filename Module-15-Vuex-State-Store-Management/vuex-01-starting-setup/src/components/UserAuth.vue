<template>
<button @click='login' v-if='!getAuthStatus'>Login</button>
<button @click='logout' v-else>Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UserAuth',
  methods: {
    ...mapActions(['login', 'logout'])
  },
  computed:{
    ...mapGetters(['getAuthStatus'])
  }
};
</script>

<style scoped>

</style>
