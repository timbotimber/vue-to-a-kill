<template>
  <Layout>
    <section v-if="$page">
      <ul>
        <li v-for="{ node } in $page.posts.edges" :key="node.id">
            <g-link :to="node.path">
                 <h1>{{node.title}}</h1>
            </g-link>
        </li>
      </ul>
    </section>
  </Layout>
</template>

<page-query>
  query posts {
 posts: allContentfulBlogPost {
  edges {
    node {
      id
      title
      path
    }
  }
} 
  }
</page-query>

<script>
  export default {
    metaInfo: {
      title: 'Blog',
    },
  }