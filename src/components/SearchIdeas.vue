<template>
	<div>
		<input
			type="text"
			placeholder="search"
			@keyup="updateSearch($event)"
		/>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'SearchIdeas',

	methods: {
		...mapActions(['updateSearch']),
	},
}
</script>

<style scoped></style>
