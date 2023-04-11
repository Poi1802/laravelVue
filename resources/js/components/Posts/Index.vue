<template>
  <div class="content">
    <div class="create">
      <router-link :to="{ name: 'posts.create' }" class="btn btn-primary my-2">Create person</router-link>
    </div>
    <hr>
    <div v-if="loading" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <table v-else class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Job</th>
          <th scope="col">Manage</th>
        </tr>
      </thead>
      <tbody>
        <TableRow v-for="person in people" :key="person.id" :person="person" />
      </tbody>
    </table>
  </div>
</template>

<script>
import TableRow from './TableRow.vue'

export default {
  components: {
    TableRow
  },
  data: () => ({
    people: [],
    editId: null,
    loading: false
  }),
  mounted() {
    this.getPeople()
  },
  methods: {
    getPeople() {
      this.loading = true
      axios.get('/api/people').then(res => this.people = res.data).catch(err => console.log(err)).finally(() => this.loading = false)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>