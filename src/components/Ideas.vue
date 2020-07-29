<template>
    <div id="ideas">
        <div v-bind:key="idea.title" v-for="idea in ideas">
            <Idea v-bind:idea="idea" />
        </div>
    </div>
</template>

<script>
import Idea from "./Idea.vue";

export default {
    name: "Ideas",
    components: {
        Idea,
    },
    props: ["ideas"],
};
</script>

<style scoped>
#ideas {
    border: 2px solid grey;
}
</style>
