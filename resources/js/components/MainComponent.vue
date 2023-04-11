<template>
  <div class="container">
    <Header />
    <hr />
    <div class="content mt-4">
      <CreateComponent />
      <hr />
      <Table />
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
  mounted() { },
};
</script>
