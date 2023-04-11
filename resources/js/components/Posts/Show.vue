<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else>
    <div class="name">
      {{ person.name }}
    </div>
    <div class="age">
      {{ person.age }}
    </div>
    <div class="job">
      {{ person.job }}
    </div>
    <router-link class="btn btn-warning" :to="{ name: 'posts.index' }">Back</router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    person: {},
    loading: false
  }),
  mounted() {
    this.getPerson()
  },
  methods: {
    getPerson() {
      this.loading = true;
      axios.get(`/api/people/${this.$route.params.id}`)
        .then(res => {
          console.log(res);
          this.person = res.data
        })
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>