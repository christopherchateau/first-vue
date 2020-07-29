<template>
	<div class="app">
		<Title title="ideabox" />
		<AddIdea v-on:add-idea="addIdea" />
		<Ideas v-bind:ideas="ideas" v-on:delete-idea="deleteIdea" />
	</div>
</template>

<script>
import Title from './components/Title.vue'
import AddIdea from './components/AddIdea.vue'
import Ideas from './components/Ideas.vue'

export default {
	name: 'App',
	components: {
		Title,
		AddIdea,
		Ideas,
	},
	data() {
		return {
			ideas: [],
		}
	},
	methods: {
		deleteIdea(id) {
			this.ideas = this.ideas.filter(idea => idea.id !== id)
		},
		addIdea(newIdea) {
			this.ideas = [newIdea, ...this.ideas]
		},
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
