<template>
  <div>
    <DailyRec :data="data" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { reactive, onBeforeMount } from 'vue';
import { dailyRecommendation } from "../../api/home/index";
import DailyRec from "@/pages/index.vue";
const route = useRoute();

let data = reactive({
 msgDaily: [
    {
      id: 1,
      name: '匿名',
      picUrl: '',
      song: {
        artists: [{
          name: '匿名',
        }]
      }
    }
  ],
  headName: route.meta.name || '好听的歌',
})

onBeforeMount(async () => {
  let res = await dailyRecommendation();
  console.log("音乐数据");
  console.log(res.data.result);
  data.msgDaily = res.data.result;
});

</script>

<style scoped lang='less'>

</style>