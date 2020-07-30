<template>
	<div class="idea" :class="{ 'is-bad': idea.isBad }">
		<button class="delete" @click="handleDelete">x</button>
		<h2>{{ idea.title }}</h2>
		<h3 class="text">{{ idea.text }}</h3>
		<h4>bad idea</h4>
		<input type="checkbox" v-on:change="markBad" />
	</div>
</template>

<script>
import  { mapActions } from 'vuex'

export default {
	name: 'Idea',

	props: ['idea'],

	methods: {
		...mapActions(['deleteIdea']),

		handleDelete() {
			this.deleteIdea(this.idea.id)
		},

		markBad() {
			this.idea.isBad = !this.idea.isBad
		},
	},
}
</script>

<style scoped>
h2 {
	border-bottom: 1px solid white;
}

h4 {
	display: inline-block;
}

input {
	cursor: pointer;
	margin-left: 0.5rem;
}

.idea {
	background: grey;
	color: white;
	margin: 2rem;
	width: 30rem;
	padding: 2rem;
	position: relative;
}

.text {
	margin: 1rem 0;
}

.delete {
	cursor: pointer;
	position: absolute;
	right: 0;
	top: 0;
}

.is-bad {
	background: darkred;
}
</style>
