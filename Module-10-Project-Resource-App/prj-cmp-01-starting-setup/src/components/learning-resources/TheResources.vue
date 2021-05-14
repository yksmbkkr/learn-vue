<template>
  <base-card>
    <base-button @click='setSelectedTab("stored-resources")' :mode='storedButtonMode'>Stored Resources</base-button>
    <base-button @click='setSelectedTab("add-resource")' :mode='addButtonMode'>Add Resources</base-button>
  </base-card>
  <keep-alive>
    <component :is='selectedTab'></component>
  </keep-alive>

</template>

<script>
import StoredResources from '@/components/learning-resources/StoredResources';
import AddResource from '@/components/learning-resources/AddResource';

export default {
  components: {
    StoredResources,
    AddResource
  },
  name: 'TheResources',
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'Lorem Ipsum',
          link: 'https://vuejs.org'
        }, {
          id: 'google',
          title: 'Google',
          description: 'Google',
          link: 'https://google.com'
        }
      ]
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, desc, url) {
      const newRes = {
        id: new Date().toISOString(),
        title: title,
        description: desc,
        link: url
      };
      this.storedResources.unshift(newRes);
      this.selectedTab = 'stored-resources';
    },
    removeRes(resId) {
      const idx = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(idx, 1)

      console.log(this.storedResources.length);
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeRes
    };
  },
  computed: {
    storedButtonMode() {
      return this.selectedTab === 'stored-resources' ? 'flat' : null;
    },
    addButtonMode() {
      return this.selectedTab !== 'stored-resources' ? 'flat' : null;
    }
  }
};
</script>

<style scoped>

</style>
