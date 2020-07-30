<template>
	<div class="ideas">
		<div :key="idea.id" v-for="idea in allIdeas">
			<Idea
				v-bind:idea="idea"
				v-on:delete-idea="$emit('delete-idea', idea.id)"
			/>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Idea from './Idea.vue'

export default {
	name: 'Ideas',

	components: {
		Idea,
	},

	computed: mapGetters(['allIdeas']),

	methods: {
		...mapActions(['loadIdeas']),
	},

	props: ['ideas'],

	created() {
		this.loadIdeas()
	},
}
</script>

<style scoped>
.ideas {
	align-items: center;
	display: flex;
	flex-direction: column;
}
</style>
