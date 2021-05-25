<template>
<div>
   <h1>Hello there</h1>
   <CategoryList  :categories = "categories"/>
   </div>
</template>

<script>
import CategoryList from "@/components/CategoryList"
import data from "@/data/data.json"
export default {
  components: {
    CategoryList
  },
data () {
    return {
    categories: data.categories,
    }
}, 
methods: {
}
}
</script>

<style>

</style>