<template>
  <div class="swiper">
    <van-swipe :autoplay="3000" lazy-render class="swiper__margin">
      <van-swipe-item v-for="image in images.data.banners" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup lang="ts">
import { Swipe, SwipeItem } from "vant";
import { reactive, onBeforeMount, ref, watch } from "vue";
import { getBanner } from "../../api/home/index";
let images = await getBanner();
</script>

<style scoped lang="less">
@border-radius: 0.16rem;
.swiper {
  width: 100%;
  height: 4rem;
  &__margin {
    border-radius: @border-radius;
  }
  img {
    width: 100%;
    height: 4rem;
    // border-radius: @border-radius;
  }
}
</style>