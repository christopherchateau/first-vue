<template>
    <div class="idea" :class="{ bad: idea.isBad }">
        <button class="delete" @click="deleteIdea(idea.id)">x</button>

        <h2>{{ idea.title }}</h2>
        <h3>{{ idea.text }}</h3>

        <h4>
            bad idea
            <input type="checkbox" @change="toggleBadIdea(idea.id)" :checked="idea.isBad" />
        </h4>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "Idea",

    props: ["idea"],

    methods: mapActions(["deleteIdea", "toggleBadIdea"]),
};
</script>

<style scoped>
h2 {
    border-bottom: 1px solid white;
}

h3 {
    margin: 1rem 0;
}

input {
    cursor: pointer;
    margin: 0;
    width: 1rem;
}

.idea {
    background: grey;
    color: white;
    margin: 2rem;
    padding: 2rem;
    position: relative;
    transition: all 0.5s ease-out;
    width: 30rem;
}

.delete {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
}

.bad {
    background: darkred;
}

.hide {
    display: none;
}
</style>
