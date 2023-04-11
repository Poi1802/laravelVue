<template>
  <div class="">
    <div v-if="loading" class="d-flex justify-content-center">
      <div class="spinner-border " role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <table v-else class="table table-hover">
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
        <TableRow v-for="person in people" :key="person.id" @deletedPerson="filterPeople" @toggleId="toggleEditId"
          :editId="editId" :person="person" />
      </tbody>
    </table>
  </div>
</template>

<script>
import TableRow from "./TableRow.vue";

export default {
  components: {
    TableRow,
  },
  data: () => ({
    people: [],
    editId: null,
    loading: false
  }),
  mounted() {
    this.getPeople();
  },
  methods: {
    getPeople() {
      this.loading = true
      axios.get("/api/people")
        .then((res) => (this.people = res.data))
        .catch(err => console.log(err))
        .finally(() => this.loading = false);
    },
    toggleEditId(id) {
      this.editId = id
    },
    filterPeople(id) {
      this.people = this.people.filter(person => person.id != id)
    }
  },
};
</script>

<style lang="sass" scoped></style>
