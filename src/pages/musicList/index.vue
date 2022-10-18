<template>
  <div class="musiclist">
    <DailyRec :data="data" />
  </div>
</template>

<script setup lang="ts">
import DailyRec from "@/pages/index.vue";
import { useRoute } from 'vue-router';
import { reactive, onBeforeMount } from 'vue';
import { musicList } from '../../api/home/index';

type element = {
  id: number,
  name: string,
  artists: [{
    picUrl: string,
    name: string,
  }]
}
const route = useRoute();
const data = reactive({
    headName: route.meta.name || '好听的歌',
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
});

const createPro = (index: number,arr: Array<any>) => {
    arr[index] = new Object();
    arr[index].song = new Object();
    arr[index].song.artists  = new Array();
    arr[index].song.artists[0] = new Object();
}

onBeforeMount(async () => {
  const res = await musicList();
  const val = res.data.data.slice(0,20);
  let arr = new Array();
  //取出前20
  val.forEach((ele:element,index:number) => { 
    createPro(index,arr);
    arr[index].id = ele.id;
    arr[index].name = ele.name;
    arr[index].picUrl = ele.artists[0].picUrl;
    arr[index].song.artists[0].name = ele.artists[0].name;
  });
  data.msgDaily = arr;
  console.log(data);
})


</script>

<style scoped lang="less">
</style>