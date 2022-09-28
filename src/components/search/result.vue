<template>
  <div>
    <div class="result">
      <div class="result__item" v-for="(item, index) in list" :key="index" @click="getMus(item)">
        <img :src="item.al.picUrl" alt="" class="result__item-img" v-if="item.al.picUrl" />
        <div class="result__item-img" v-if="!item.al.picUrl" ></div>
        <div>
          <span class="title">{{ item.name }}</span>
          <span class="name">{{ item.ar[0].name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Image as VanImage } from "vant";
import { getMusic } from '../../api/home/index';
import { mainStore } from '../../store/index';

const store = mainStore();
type props = {
  list: object;
};
let Props = defineProps<props>();

//播放
const getMus = (value: object) => {
    store.addMusic(value,'单曲');
}

</script>

<style scoped lang="less">
@import "../../assets/CSS/color";
@import "../../assets/CSS/measure";
.result {
  width: 100%;
  margin: 0 0 1.1rem 0;
  display: flex;
  flex-flow: column;
  &__item {
    display: flex;
    margin: 0.16rem;
    color: white;
    background-color: rgba(148, 60, 249, 0.5);
    justify-content: left;
    align-items: center;
    border-radius: @border-radius-big;
    &-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 0.32rem;
      background-color: @default_purple;
    }
    div {
      display: flex;
      flex-flow: column;
      .title {
        font-size: 0.3rem;
      }
      .name {
        font-size: 0.2rem;
      }
    }
  }
}
</style>