const axios = require("axios");

module.exports = function(api) {
	api.loadSource(async (actions) => {
		const collection = actions.addCollection("Post");

		const { data } = await axios.get("https://swapi.dev/api/people/");
		for (const item of data.results) {
			collection.addNode({
				name: item.name,
			});
		}
	});
	api.createPages(({ createPage }) => {
		createPage({
			path: "/my-page",
			component: "./src/templates/MyPage.vue",
		});
	});
};
