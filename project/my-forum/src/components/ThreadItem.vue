<template>

       <div >
          <p>
            <a href="#">{{ thread.title }}</a>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a>, {{thread.publishedAt}}.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">
           {{ thread.posts.length === 1 ? "1 reply" : `${thread.posts.length} replies`  }} 
          </p>

          <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="">
  
          <div>
            <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId).name }}, {{thread.publishedAt}}</a>
            </p>
            <!-- <p class="text-xsmall text-faded"><AppDate :timestamp="thread.publishedAt" /></p> -->
          </div>
        </div>

</template>

<script>
import data from "@/data/data.json"
export default {
props: {
        thread: {
            type: Object,
            required: true,
        }
    },
    data () {
    return {
    threadData: this.thread,
    posts: data.posts,
    users: data.users
    }
}, 
methods: {
     postById(postId) {
         return this.posts.find(p => p.id === postId)
     },
      userById(userId) {
        console.log("users?", this.threadData.userId)
         return this.users.find(u => u.id === userId)
     }
},
created () {
}
}
</script>

<style>

</style>