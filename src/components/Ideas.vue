<template>
    <div class="ideas">
        <div v-bind:key="idea.title" v-for="idea in ideas">
            <Idea v-bind:idea="idea" v-on:delete-idea="$emit('delete-idea', idea.id)" />
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
.ideas {
    align-items: center;
    border: 2px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
