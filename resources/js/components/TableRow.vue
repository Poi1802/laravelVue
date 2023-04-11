<template>
  <tr v-if="editId !== person.id">
    <th scope="row">{{ person.id }}</th>
    <td>{{ person.name }}</td>
    <td>{{ person.age }}</td>
    <td>{{ person.job }}</td>
    <td>
      <button @click.prevent="$emit('toggleId', person.id)" class="btn btn-success">Изменить</button>
      <button @click.prevent="deletePerson" class="mx-2 btn btn-danger">
        <div v-if="loading" class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        Удалить
      </button>
    </td>
  </tr>
  <tr v-if="editId === person.id">
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
      <button @click.prevent="updatePerson" class="btn btn-success">
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
      default: [],
    },
    editId: {
      type: Number,
      default: null
    }
  },
  emits: ['toggleId', 'deletedPerson'],
  data: () => ({
    loading: false,
  }),
  methods: {
    updatePerson() {
      this.loading = true;
      axios.patch(`/api/people/${this.person.id}`, this.person)
        .then(res => this.$emit('toggleId', null))
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    },
    deletePerson() {
      this.loading = true;
      axios.delete(`/api/people/${this.person.id}`)
        .then(res => {
          this.$emit('deletedPerson', this.person.id)
          console.log(res)
        })
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    }
  }
};
</script>

<style lang="sass" scoped></style>
