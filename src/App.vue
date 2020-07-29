<template>
	<div class="app">
		<Title title="ideabox" />
		<AddIdea />
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
			ideas: [
				{
					id: 1,
					title: 'pizza idea #1',
					text: 'accept pizza',
					isBad: false,
				},
				{
					id: 2,
					title: 'pizza idea #2',
					text: 'eat pizza',
					isBad: false,
				},
				{
					id: 3,
					title: 'pizza idea #3',
					text: 'refuse pizza',
					isBad: false,
				},
				{
					id: 4,
					title: 'ipsum',
					text:
						'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
					isBad: false,
				},
			],
		}
	},
	methods: {
		deleteIdea(id) {
			this.ideas = this.ideas.filter(idea => idea.id !== id)
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
