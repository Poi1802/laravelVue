<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
            </tr>
        </thead>
        <tbody>
            <TableRow :people="people" />
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
    }),
    mounted() {
        this.getPeople();
    },
    methods: {
        getPeople() {
            axios.get("/api/people").then((res) => (this.people = res.data));
        },
    },
};
</script>

<style lang="sass" scoped></style>
