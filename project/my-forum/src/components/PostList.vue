<template>
 <div class="post-list">
      <div class="post"
           v-for="post in posts"
           :key="post.id"
      >

        <div class="user-info">
          <a href="#" class="user-name">{{userById(post.userId).name}}</a>

          <a href="#">
            <img class="avatar-large" :src="userById(post.userId).avatar" alt="">
          </a>

          <p class="desktop-only text-small">107 posts</p>

        </div>

        <div class="post-content">
          <div>
            <p>
              {{post.text}}
        
            </p>
          </div>
        </div>

        <div class="post-date text-faded">
          <AppDate :timeStamp = "post.publishedAt" />
        </div>

      </div>

    </div>
</template>

<script>
import data from "@/data/data.json"
export default {
props: {
    posts: {
        required: true,
        type: Array
    }
},
data () {
    return {
    users: data.users
    }
},
methods: {
  userById(userId) {
         return this.users.find(user => user.id === userId)
     },
}
}
</script>

<style>

</style>