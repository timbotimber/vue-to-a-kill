let githubUserCard = {
	template: "#github-card-template",
	props: {
		username: {
			type: String,
			default: "Cod Captain",
			required: true,
		},
	},
	data() {
		return {
			userData: {},
		};
	},
	async created() {
		let dataGrab = await fetch(`https://api.github.com/users/${this.username}`);

		let rawData = await dataGrab.json();

		this.userData = rawData;

		console.log("does this work?", this.userData);
	},
};

new Vue({
	el: "#app",
	components: {
		githubUserCard: githubUserCard,
	},
});
