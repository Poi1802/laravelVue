<template>
  <tr v-if="$parent.editId !== person.id">
    <th scope="row">{{ person.id }}</th>
    <td>{{ person.name }}</td>
    <td>{{ person.age }}</td>
    <td>{{ person.job }}</td>
    <td>
      <button @click="$parent.editId = person.id" class="btn btn-outline-primary">Change</button>
      <button @click="deletePerson" class="btn btn-outline-danger mx-2">
        <div v-if="loading" class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        Delete
      </button>
      <router-link :to="{ name: 'posts.show', params: { id: person.id } }"
        class="btn btn-outline-warning">Goto</router-link>
    </td>
  </tr>
  <tr v-else>
    <th scope="row">{{ person.id }}</th>
    <td>
      <input v-model="person.name" type="text">
    </td>
    <td>
      <input v-model="person.age" type="text">
    </td>
    <td>
      <input v-model="person.job" type="text">
    </td>
    <td>
      <button :disabled="isDisabled" @click.prevent="updatePerson" class="btn btn-success">
        <div v-if="loading" class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        Подтвердить
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      default: {}
    }
  },
  data: () => ({
    loading: false
  }),
  mounted() {
  },
  computed: {
    isDisabled() {
      return !(this.person.name && this.person.age && this.person.job)
    }
  },
  methods: {
    updatePerson() {
      this.loading = true;
      axios.patch(`/api/people/${this.person.id}`, this.person)
        .then(res => this.$parent.editId = null)
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    },
    deletePerson() {
      this.loading = true;
      axios.delete(`/api/people/${this.person.id}`)
        .then(res => {
          this.$parent.people = this.$parent.people.filter(person => person.id !== this.person.id)
          console.log(res)
        })
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>