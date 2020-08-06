<template>
	<div class="app">
		<Title title="ideabox" />
		<AddIdea />
		<SearchIdeas />
		<FilterIdeas />
		<Ideas />
	</div>
</template>

<script>
import Title from './components/Title'
import Ideas from './components/Ideas'
import AddIdea from './components/AddIdea'
import SearchIdeas from './components/SearchIdeas'
import FilterIdeas from './components/FilterIdeas'

export default {
	name: 'App',
	components: {
		Title,
		Ideas,
		AddIdea,
		SearchIdeas,
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

input,
textarea {
	margin: 0.5rem;
	padding: 0.2rem;
	text-align: left;
	width: 25rem;
}
</style>
