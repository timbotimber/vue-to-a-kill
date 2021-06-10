<template>
	<Layout>
		<h1>Team</h1>
		<ul>
			<li v-for="{ node } in $page.posts.edges" :key="node.id">
				<h2>{{ node.name }}</h2>
			</li>
		</ul>
	</Layout>
</template>

<page-query>
  query swCharacters{
  posts: allPost {
   edges {
    node {
      id
      name
    }
  }
  }
}
</page-query>

<script>
export default {
	metaInfo: {
		title: "Team",
	},
};
</script>
