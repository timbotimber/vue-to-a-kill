module.exports = {
	siteName: "Cool Gridsome Site",
	templates: {
		ContentfulBlogPost: "/blog/:slug",
	},
	plugins: [
		{
			use: "@gridsome/source-contentful",
			options: {
				space: process.env.CTF_SPACE_ID, // required
				accessToken: process.env.CTF_ACCESS_TOKEN, // required
				typeName: "Contentful",
			},
		},
	],
};
