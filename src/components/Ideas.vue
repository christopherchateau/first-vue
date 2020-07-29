<template>
    <div id="ideas">
        <div v-bind:key="idea.title" v-for="idea in ideas">
            <h2>{{ idea.title }}</h2>
            <h3>{{ idea.text }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "Ideas",
    props: ["ideas"],
};
</script>

<style scoped>
#ideas {
    border: 2px solid grey;
}
</style>
