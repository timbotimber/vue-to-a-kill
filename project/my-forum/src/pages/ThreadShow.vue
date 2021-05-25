
<template>

   <div :key="thread.id" class="col-large push-top">
    <h1>{{ thread.title }}</h1>
<PostList :posts="threadPosts"/>
<PostEditor @save-post="addPost"/>
  </div>

</template>

<script>
import data from "@/data/data.json"
import PostList from "@/components/PostList"
import PostEditor from "@/components/PostEditor"
export default {
  components: {
    PostList,
    PostEditor
  },
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
    newPostText: ""
    }
}, 
computed: {
thread () {
    return this.threads.find(thread => thread.id === this.id)
}, 
threadPosts () {
 let filtered = this.posts.filter(post => post.threadId === this.id)
 return filtered
}
},
methods: {
  addPost (eventData) {
    const post = {
     ... eventData.post,
      threadId: this.id,
      userId: "38St7Q8Zi2N1SPa5ahzssq9kbyp1"
    }
   
    this.posts.push(post)
    this.thread.posts.push(post.id)
  }
}
}
</script>

<style>

</style>