<template>
	<div class="idea" v-bind:class="{ 'is-bad': idea.isBad }">
		<button class="delete" v-on:click="$emit('delete-idea', idea.id)">x</button>
		<h2>{{ idea.title }}</h2>
		<h3 class="text">{{ idea.text }}</h3>
		<h4>bad idea</h4>
		<input type="checkbox" v-on:change="markBad" />
	</div>
</template>

<script>
export default {
	name: 'Idea',
	props: ['idea'],
	methods: {
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
	margin-left: 0.4rem;
}

.idea {
	background: grey;
	color: white;
	margin: 2rem;
	width: 50rem;
	padding: 2rem;
	position: relative;
}

.text {
	margin: 1rem 0;
}

.delete {
	position: absolute;
	right: 0;
	top: 0;
}

.is-bad {
	background: darkred;
}
</style>
