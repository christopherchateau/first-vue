<template>
    <div class="app">
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
                    title: "pizza idea #1",
                    text: "accept pizza",
                    isBad: false,
                },
                {
                    title: "pizza idea #2",
                    text: "eat pizza",
                    isBad: false,
                },
                {
                    title: "pizza idea #3",
                    text: "refuse pizza",
                    isBad: true,
                },
            ],
        };
    },
};
</script>

<style>
* {
    box-sizing: border-box;
    font-family: "Courier New", Courier, monospace;
    margin: 0;
    padding: 0;
    text-align: center;
}

.app {
    border: 2px solid grey;
    margin: 2rem;
    padding: 2rem;
}
</style>
