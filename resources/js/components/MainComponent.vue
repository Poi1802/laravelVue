<template>
  <div class="container">
    <Header />
    <hr />
    <div class="content mt-4">
      <CreateComponent @created-person="addPerson" />
      <hr />
      <Table ref="table" />
    </div>
  </div>
</template>

<script>
import CreateComponent from "./CreateComponent.vue";
import Header from "./Header.vue";
import Table from "./Table.vue";

export default {
  components: {
    CreateComponent,
    Header,
    Table,
  },
  mounted() {

  },
  methods: {
    addPerson(person) {
      this.$refs.table.people.push(person)
    }
  }
};
</script>
