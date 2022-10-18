<template>
  <div class="daily">
    <van-sticky>
    <div class="daily__head">
      <Head :headName="data.headName" />
    </div>
    </van-sticky>
    <div class="daily__time">
      <img :src="data.msgDaily[0].picUrl" alt="" class="daily__time__img" />
      <dailytime class="daily__time__word" />
    </div>
    <div class="daily__list">
      <van-sticky @scroll="scroll" :offset-top="40">
        <div :class="changClass?'daily__list__head':'daily__list__headtop'"></div>
      </van-sticky>
      <div class="daily__list__music" v-for="(item,index) in data.msgDaily" :key="index" @click="playMusic({id: item.id,al: {picUrl: item.picUrl,name: item.song.artists[0].name},name: item.name })">
        <MusicItem :data="{index: index,name: item.name,song: item.song}" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dailyRecommendation } from "../api/home/index";
import { onBeforeMount, reactive,ref, defineProps } from "vue";
import dailytime from "@/components/common/daily_time.vue";
import Head from "@/components/common/head.vue";
import { useRoute } from "vue-router";
import { Sticky } from "vant";
import MusicItem from '@/components/common/music_item.vue';
import { mainStore } from '../store/index';
const route = useRoute();
type msg = {
  msgDaily: [
    {
      id: number | undefined;
      name: string | undefined;
      picUrl: string | undefined;
      song: {
        artists: [{
          name: string,
        }]
      }
    }
  ];
  headName: string | undefined;
};

type date = {
  data: msg,
}

const store = mainStore();

defineProps<date>();

//改变形状
const changClass = ref(true);



//监听musicTitle滚动
const scroll = (value: {scrollTop: number, isFixed: boolean}) => {
  if(value.isFixed){
    changClass.value = false;
  }else{
    changClass.value = true;
  }
  
}

const playMusic = (value:any) => {
  store.addMusic(value,'单曲');
}
</script>

<style scoped lang="less">
.daily {
  &__head {
    width: 100%;
    height: 40px;
    // display: none;
  }
  &__time {
    width: 100%;
    height: 4rem;
    position: relative;
    z-index: -1;
    &__word {
      margin: 0 0.2rem;
      position: absolute;
      top: 70%;
    }
    &__img {
      height: 4rem;
      width: 100%;
      opacity: 0.9;
    }
  }
  &__list {
    width: 100%;
    height: 100%;
    margin-bottom: 1.1rem;
    &__head {
      margin-top: -0.3rem;
      width: 100%;
      height: 1rem;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      background-image: linear-gradient(
        to right top,
        #d16ba5,
        #c777b9,
        #ba83ca,
        #aa8fd8,
        #9a9ae1,
        #8aa7ec,
        #79b3f4,
        #69bff8,
        #52cffe,
        #41dfff,
        #46eefa,
        #5ffbf1
      );
    }
    &__headtop{
      width: 100%;
      height: 1rem;
      background-image: linear-gradient(
        to right top,
        #d16ba5,
        #c777b9,
        #ba83ca,
        #aa8fd8,
        #9a9ae1,
        #8aa7ec,
        #79b3f4,
        #69bff8,
        #52cffe,
        #41dfff,
        #46eefa,
        #5ffbf1
      );
    }
    &__music{
      margin: 0 0.2rem;
    }
  }
}
</style>