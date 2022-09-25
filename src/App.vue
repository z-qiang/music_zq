<template>
  <div class="main">
    <router-view></router-view>
    <div class="main__bottom">
        <BottomPlayItem />
    </div>
  </div>
</template>

<script setup lang="ts">
import BottomPlayItem from './components/item/bottomPlayItem.vue';
</script>

<style scoped lang="less">
@import './assets/CSS/measure'; 
.main{
  box-sizing: border-box;
  &__bottom{
    position: fixed;
    width: 100%;
    bottom: 0;
    height: @main_bottom_height + 0.3rem;
    background-color: white;
  }
}
</style>