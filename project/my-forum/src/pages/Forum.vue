<template>
  
      <div class="col-full push-top">
          <div class="forum-header">
              <div class="forum-details">
                  <h1>{{ forum.name }}</h1>
                  <p class="text-lead">{{ forum.description }}</p>
              </div>
              <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
          </div>
      </div>

      <div class="col-full push-top">
          <ThreadList :threads="threads"/>
      </div>

  <div class="forum-stats desktop-only">
      <hr>
      <ul>
        <li><i class="fa fa-user-circle-o"></i>47 users online</li>
        <li><i class="fa fa-user-o"></i>497 users registered</li>
        <li><i class="fa fa-comments-o"></i>49 threads</li>
        <li><i class="fa fa-comment-o"></i>763 posts</li>
      </ul>
  </div>
</template>

<script>
import ThreadList from "@/components/ThreadList"
import sourceData from "@/data/data.json"
export default {
components: { ThreadList },
props: {
    id: {
    required: true,
    type: String
}
},
computed: {
forum () {
    return sourceData.forums.find(forum => 
       forum.id === this.id 
    )
}, 

threads () {
    return sourceData.threads.filter(thread => {
        console.log(thread)
        return thread.forumId === this.id
        })
}
}


}
</script>

<style>

</style>