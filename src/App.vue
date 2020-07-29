<template>
    <div id="app">
        <Title title="ideabox" />
        <Ideas v-bind:ideas="ideas" />
    </div>
</template>

<script>
import Title from "./components/Title.vue";
import Ideas from "./components/Ideas.vue";

export default {
    name: "App",
    components: {
        Title,
        Ideas,
    },
    data() {
        return {
            ideas: [
                {
                    title: "great idea",
                    text: "wait nevermind",
                },
                {
                    title: "good idea",
                    text: "eat pizza",
                },
                {
                    title: "crappy idea",
                    text: "refuse pizza",
                },
            ],
        };
    },
};
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

#app {
    border: 2px solid grey;
    margin: 2rem;
    padding: 2rem;
}
</style>
