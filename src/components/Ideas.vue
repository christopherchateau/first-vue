<template>
    <div class="ideas" v-if="displayIdeas.length">
        <div :key="idea.id" v-for="idea in displayIdeas">
            <Idea :idea="idea" />
        </div>
    </div>
    <h3 class="no-ideas" v-else>
        you must have SOME ideas
        <h1>😘</h1>
    </h3>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Idea from "./Idea.vue"

export default {
    name: "Ideas",

    components: {
        Idea,
    },

    computed: mapGetters(["displayIdeas"]),

    created() {
        this.loadIdeas()
    },

    methods: mapActions(["loadIdeas"]),
}
</script>

<style scoped>
.ideas {
    align-items: center;
    display: flex;
    flex-direction: column;
}

.no-ideas {
    margin-top: 2rem;
}
</style>
