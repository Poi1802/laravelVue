<template>
    <div>
        <div class="form w-25">
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label"
                    >Имя</label
                >
                <input
                    type="text"
                    v-model="form.name"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Имя"
                />
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"
                    >Возраст</label
                >
                <input
                    type="number"
                    v-model="form.age"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Возраст"
                />
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"
                    >Работа</label
                >
                <input
                    type="number"
                    v-model="form.job"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Работа"
                />
            </div>
            <div class="mb-3">
                <button class="btn btn-primary">Добавить</button>
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
    }),
};
</script>

<style lang="sass" scoped></style>
