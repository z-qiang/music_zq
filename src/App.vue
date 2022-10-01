<template>
  <div class="main">
    <router-view></router-view>
    <div class="main__bottom" v-show="store.bMusic">
      <BottomPlayItem />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import BottomPlayItem from "./components/item/bottomPlayItem.vue";
import { mainStore } from './store/index';

const store = mainStore();
sessionStorage.setItem("isLogin", "false");
</script>

<style scoped lang="less">
@import "./assets/CSS/measure";
.main {
  box-sizing: border-box;
  &__bottom {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: @main_bottom_height + 0.3rem;
    background-color: white;
  }
}
</style>