<template>
  <form @sumbit.prevent>
              <!-- <div class="form-group">
                <label for="thread_title">Title:</label>
                <input type="text" id="thread_title" class="form-input" name="title" >
              </div> -->

              <div class="form-group">
                <label for="thread_content">Content:</label>
                <textarea
                 v-model="newPostText"
                 id="thread_content" class="form-input" name="content" rows="8" cols="140"></textarea>
              </div>

              <div class="btn-group">
                <button class="btn btn-ghost">Cancel</button>
                <button @click="addPost" class="btn btn-blue">Publish </button>
              </div>
          </form>
</template>

<script>
export default {
    data () {
    return {
    newPostText: ""
    }
}, 
methods: {
    addPost (e) {
    e.preventDefault()
    const postId = "timmy" + Math.random()
    const post = {
      id: postId,
      text: this.newPostText,
      publishedAt: Math.floor(Date.now()/1000),
      threadId: this.id,
      userId: "38St7Q8Zi2N1SPa5ahzssq9kbyp1"
    }
    this.$emit("save-post", {post})
    // this.posts.push(post)
    // this.thread.posts.push(postId)
  }
}
}
</script>

<style>

</style>