<template>
 <div class="col-full">
    <div class="thread-list">

      <h2 class="list-title">Threads</h2>

            <div v-for="thread in threads" :key="thread.id" class="thread">

            <ThreadItem :thread ="thread"/>
        </div>
    </div>
  </div>
</template>

<script>
import ThreadItem from "@/components/ThreadItem"
import data from "@/data/data.json"
export default {
    components: {
        ThreadItem
    },
    props: {
        threads: {
            type: Array,
            required: true,
        }
    },
data () {
    return {
    posts: data.posts,
    users: data.users
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
</script>

<style>

</style>