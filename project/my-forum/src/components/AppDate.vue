<template>
<span :title="dateForHumans(timeStamp)">
          {{timeForHumans(timeStamp)}}
        </span>
  
</template>

<script>
import relativeTime from "dayjs/plugin/relativeTime";
import localizeDate from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";

dayjs.extend(relativeTime);
dayjs.extend(localizeDate);

export default {
props: {
    timeStamp: {
        required: true,
        type: Number
    }
}, 
methods: { 
    timeForHumans() {
	return dayjs.unix(this.timeStamp).fromNow();
},
    dateForHumans() {
  return dayjs.unix(this.timeStamp).format("llll")
},

}
}
</script>

<style>

</style>