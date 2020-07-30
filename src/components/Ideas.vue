<template>
	<div class="ideas">
		<div :key="idea.id" v-for="idea in displayIdeas">
			<Idea v-bind:idea="idea" />
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

	computed: mapGetters(['displayIdeas']),
	
	props: ['ideas'],

	created() {
		this.loadIdeas()
	},

	methods: mapActions(['loadIdeas']),
}
</script>

<style scoped>
.ideas {
	align-items: center;
	display: flex;
	flex-direction: column;
}
</style>
