<template>
   <div :key="thread.id" class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <div class="post-list">
      <div class="post"
           v-for="postId in thread.posts"
           :key="postId"
      >

        <div class="user-info">
          <a href="#" class="user-name">{{userById(postById(postId).userId).name}}</a>

          <a href="#">
            <img class="avatar-large" :src="userById(postById(postId).userId).avatar" alt="">
          </a>

          <p class="desktop-only text-small">107 posts</p>

        </div>

        <div class="post-content">
          <div>
            <p>
              {{postById(postId).text}}
            </p>
          </div>
        </div>

        <div class="post-date text-faded">
          {{postById(postId).publishedAt}}
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import data from "@/data/data.json"
export default {
    props: {
        id: {
            required: true, 
            type: String
        }
    },
data () {
    return {
    threads: data.threads,
    posts: data.posts,
    users: data.users
    }
}, 
computed: {
thread () {
    return this.threads.find(thread => thread.id === this.id)
}
},
methods: {
     postById(postId) {
         return this.posts.find(p => p.id === postId)
     },
      userById(userId) {
         return this.users.find(u => u.id === userId)
     }
}
}
console.log(data)
</script>

<style>

</style>