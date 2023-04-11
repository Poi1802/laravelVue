<template>
  <div>
    <div class="form w-25">
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Имя</label>
        <input type="text" v-model="form.name" class="form-control" id="formGroupExampleInput" placeholder="Имя" />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">Возраст</label>
        <input type="number" v-model="form.age" class="form-control" id="formGroupExampleInput2" placeholder="Возраст" />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">Работа</label>
        <input type="text" v-model="form.job" class="form-control" id="formGroupExampleInput2" placeholder="Работа" />
      </div>
      <div class="mb-3">
        <button @click="createPerson" class="btn btn-primary">
          <div v-if="loading" class="spinner-border spinner-border-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          Добавить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      name: "",
      age: null,
      job: "",
    },
    loading: false,
  }),
  emits: ['createdPerson'],
  methods: {
    createPerson() {
      this.loading = true;
      axios
        .post("/api/people", this.form)
        .then((res) => {
          this.$emit('createdPerson', res.data)
          this.form = {}
        })
        .catch((err) => console.log(err))
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style lang="sass" scoped></style>
