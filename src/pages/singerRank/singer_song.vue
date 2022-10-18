<template>
  <div>
    <DailyRec :data="data" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { singerHotMusic } from "../../api/home/index";
import { onBeforeMount, reactive } from "vue";
import DailyRec from "@/pages/index.vue";

const route = useRoute();

const data = reactive({
  headName: "匿名",
  msgDaily: [
    {
      id: 1,
      name: "匿名",
      picUrl: "",
      song: {
        artists: [
          {
            name: "匿名",
          },
        ],
      },
    },
  ],
});

const createPro = (index: number, arr: Array<any>) => {
  arr[index] = new Object();
  arr[index].song = new Object();
  arr[index].song.artists = new Array();
  arr[index].song.artists[0] = new Object();
};

//todo 歌手大热歌曲
onBeforeMount(async () => {
  let id: string = route.params.id as string;
  const res = await singerHotMusic(id);
  console.log(res);
  const val = res.data.hotSongs.slice(0, 20);
  console.log(val);
  let arr = new Array();
  val.forEach((ele: any, index: number) => {
    createPro(index, arr);
    arr[index].id = ele.id;
    arr[index].name = ele.name;
    arr[index].picUrl = ele.al.picUrl;
    arr[index].song.artists[0].name = res.data.artist.name;
  });
  data.msgDaily = arr;
  console.log(data);
  data.headName = res.data.artist.name;
});
</script>

<style scoped lang="less">
</style>