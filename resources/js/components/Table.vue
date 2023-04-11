<template>
  <table class="table table-hover">
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
      <TableRow v-for="person in people" :key="person.id" @deletedPerson="filterPeople" @toggle-id="toggleEditId"
        :editId="editId" :person="person" />
    </tbody>
  </table>
</template>

<script>
import TableRow from "./TableRow.vue";

export default {
  components: {
    TableRow,
  },
  data: () => ({
    people: [],
    editId: null
  }),
  mounted() {
    this.getPeople();
  },
  methods: {
    getPeople() {
      axios.get("/api/people").then((res) => (this.people = res.data));
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
