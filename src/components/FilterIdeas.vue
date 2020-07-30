<template>
    <div>
    <select>
        <option value="all">show all</option>
        <option value="good">good ideas</option>
        <option value="bad">bad ideas</option>
    </select>
    </div>
</template>

<script>
export default {
    name: 'FilterIdeas',
}
</script>

<style scoped>
select {
    margin-top: 2rem;
    padding: .5rem;
}
</style>