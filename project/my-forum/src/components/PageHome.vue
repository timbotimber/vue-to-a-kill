<template>
<div>
   <h1>Hello there</h1>
   <ThreadList  :threads = "threads"/>
   </div>
</template>

<script>
import ThreadList from "@/components/ThreadList"
import data from "@/data/data.json"
export default {
  components: {
    ThreadList
  },
data () {
    return {
    threads: data.threads,
    }
}, 
methods: {
}
}
console.log(data)
</script>

<style>

</style>