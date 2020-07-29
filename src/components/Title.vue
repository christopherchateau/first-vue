<template>
    <h1>{{ title }}</h1>
</template>

<script>
export default {
    name: "Title",
    props: {
        title: String,
    },
};
</script>

<style scoped>
h1 {
    text-align: center;
}
</style>
