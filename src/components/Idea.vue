<template>
    <div class="idea" v-bind:class="{'is-bad':idea.isBad}">
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
h2 {
    border-bottom: 1px solid white;
}

.idea {
    background: grey;
    color: white;
    margin: 2rem;
    padding: 2rem;
}

.is-bad {
    background: darkred;
}
</style>