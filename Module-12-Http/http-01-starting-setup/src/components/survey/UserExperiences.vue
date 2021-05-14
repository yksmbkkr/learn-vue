<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click='loadExperiences'>Load Submitted Experiences</base-button>
      </div>
      <p v-if='isLoading'>Loading...</p>
      <ul v-else-if='!isLoading && results?.length > 0'>
        <survey-result
          v-for='result in results'
          :key='result.id'
          :name='result.name'
          :rating='result.rating'
        ></survey-result>
      </ul>
      <p v-else-if='!isLoading && error'>{{error}}</p>
      <p v-else>No stored experiences !</p>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true
      this.error = null
      fetch('https://learn-vue-9274-default-rtdb.firebaseio.com/module-12-vue.json')
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
        }).then((data) => {
        const results = [];
        for(const id in data){
          results.push({
            id: id,
            name: data[id].name,
            rating: data[id].rating
          })
        }
        this.results = results;
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
        this.error = 'Something went wrong - please try again later'
        console.log(error);
      });
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
