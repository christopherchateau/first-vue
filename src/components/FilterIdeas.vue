<template>
    <div>
        <select @change="filterIdeas($event)">
            <option value="all">show all</option>
            <option value="good">good ideas</option>
            <option value="bad">bad ideas</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "FilterIdeas",

    methods: mapActions(["filterIdeas"]),
};
</script>

<style scoped>
select {
    margin-top: 2rem;
    padding: 0.5rem;
}
</style>
