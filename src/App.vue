<template>
	<div class="app">
		<Title title="ideabox" />
		<AddIdea />
		<FilterIdeas />
		<Ideas />
	</div>
</template>

<script>
import Title from './components/Title'
import Ideas from './components/Ideas'
import AddIdea from './components/AddIdea'
import FilterIdeas from './components/FilterIdeas'

export default {
	name: 'App',
	components: {
		Title,
		Ideas,
		AddIdea,
		FilterIdeas,
	},
}
</script>

<style>
* {
	box-sizing: border-box;
	font-family: 'Courier New', Courier, monospace;
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
