<template>
<div>
   <h1>Hello there</h1>
   <ForumList  :forums = "forums"/>
   </div>
</template>

<script>
import ForumList from "@/components/ForumList"
import data from "@/data/data.json"
export default {
  components: {
    ForumList
  },
data () {
    return {
    forums: data.forums,
    }
}, 
methods: {
}
}
</script>

<style>

</style>