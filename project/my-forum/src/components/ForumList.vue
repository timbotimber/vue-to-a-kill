<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <a href="#">{{categoryName}}</a>
      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
          <router-link
            :to="{name: 'Forum', params: {id: forum.id}}"
            class="text-xlarge"
          >
            {{ forum.name }}
          </router-link>
          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p>
            <span class="count">{{ forum.threads?.length }}</span>
            {{ threadChecker(forum.threads?.length) }}
          </p>
        </div>

        <div class="last-thread"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props: {
   forums: {
       required: true,
       type: Array
   } , 
   categoryName: {
       type: String,
       default: "forums"
   }
}, 

methods : {
    threadChecker (threads) {
 return threads ? threads > 1 ? "threads": "thread" : "no threads!"
    }
}
}
</script>

<style>

</style>