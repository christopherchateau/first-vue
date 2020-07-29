<template>
    <div id="idea">
        <h2>{{ idea.title }}</h2>
        <h3>{{ idea.text }}</h3>
    </div>
</template>

<script>
export default {
    name: "Idea",
    props: ["idea"],
};
</script>

<style scoped>
#idea {
    border: 2px solid red;
}
</style>