<template>
	<form @submit="onSubmit">
		<input type="text" name="title" placeholder="title" v-model="title" />
		<textarea type="text" name="text" placeholder="text" v-model="text" />
		<input class="submit-btn" type="submit" value="add idea" />
	</form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'AddIdea',

	methods: {
		...mapActions(['addIdea']),

		onSubmit(e) {
			e.preventDefault()
			this.addIdea({ title: this.title, text: this.text })
			this.clearFields()
		},

		clearFields() {
			this.title = ''
			this.text = ''
		},
	},

	data() {
		return {
			title: '',
			text: '',
		}
	},
}
</script>

<style scoped>
form {
	align-items: center;
	display: flex;
	flex-direction: column;
}

input,
textarea {
	margin: 0.5rem;
	padding: 0.2rem;
	text-align: left;
	width: 25rem;
}

.submit-btn {
	text-align: center;
}
</style>
