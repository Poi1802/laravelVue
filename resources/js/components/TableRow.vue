<template>
    <tr v-for="person in people">
        <th scope="row">{{ person.id }}</th>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.job }}</td>
    </tr>
</template>

<script>
export default {
    props: {
        people: {
            type: Array,
            default: [],
        },
    },
};
</script>

<style lang="sass" scoped></style>
