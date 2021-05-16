import { createStore } from 'vuex';
import coachesStore from '@/store/modules/coaches';

const store = createStore({
  modules: {
    coaches: coachesStore
  }
})

export default store;
