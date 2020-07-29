<template>
    <div id="app">
        <HelloWorld title="ideabox" />
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
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
