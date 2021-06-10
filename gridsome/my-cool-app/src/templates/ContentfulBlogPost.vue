<template>
	<Layout>
		<div>
			<h1>{{ $page.post.title }}</h1>
			<div v-html="body" />
		</div>
	</Layout>
</template>

<page-query>
    query Post ($path: String!) {
      post: contentfulBlogPost (path: $path) {
        id,
        title,
        body,
        date (format: "MMMM DD, YYYY"),
        path
      }
    }
    </page-query>

<script>
import MarkdownIt from "markdown-it";
import Blog from "~/components/Blog.vue";

export default {
	components: {
		Blog,
	},
	computed: {
		body() {
			const md = new MarkdownIt();
			return md.render(this.$page.post.body);
		},
	},
};
</script>
