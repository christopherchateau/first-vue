<template>
	<form @submit="addIdea">
		<input type="text" name="title" placeholder="title" v-model="title" />
		<textarea type="text" name="text" placeholder="text" v-model="text" />
		<input class="submit-btn" type="submit" value="add idea" />
	</form>
</template>

<script>
export default {
	name: 'AddIdea',
	data() {
		return {
			title: '',
			text: '',
		}
	},
	methods: {
		addIdea(e) {
			e.preventDefault()

			const newIdea = {
				id: Date.now(),
				title: this.title,
				text: this.text,
				isBad: false,
			}

			this.$emit('add-idea', newIdea)
			this.clearFields()
		},
		clearFields() {
			this.title = ''
			this.text = ''
		},
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
