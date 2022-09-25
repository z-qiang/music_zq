<script setup lang="ts">
import { defineAsyncComponent } from "vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//导入头部导航栏
let HeadNav = defineAsyncComponent(() => import("./headNav.vue"))
//导入轮播组件
let swiper = defineAsyncComponent(() => import("./swiper.vue"));
//导入iconlist
let iconlist = defineAsyncComponent(() => import("./iconList.vue"));
//导入musiclist
let musiclist = defineAsyncComponent(() => import("./musicList.vue"));
</script>

<template>
  <div class="main">
    <div class="main__header">
       <Suspense>
        <template #default>
          <div>
            <HeadNav />
          </div>
        </template>
        <template #fallback>
          <div>loading</div>
        </template>
      </Suspense>
    </div>
    <div class="main__swiper">
      <Suspense>
        <template #default>
          <div>
            <swiper />
          </div>
        </template>
        <template #fallback>
          <div>loading</div>
        </template>
      </Suspense>
    </div>
    <div class="main__iconlist">
      <Suspense>
        <template #default>
          <div>
            <iconlist />
          </div>
        </template>
        <template #fallback>
          <div>loading</div>
        </template>
      </Suspense>
    </div>
    <div class="main__musiclist">
      <Suspense>
        <template #default>
          <div>
            <musiclist />
          </div>
        </template>
        <template #fallback>
          <div>loading</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '../../assets/CSS/measure.less';

.icon {
    #home_top()
}
.main {
  margin: @margin;
  &__header {
    width: 100%;
    height: 0.8rem;
  }
  &__swiper {
    width: 100%;
    margin-top: @margin-top;
  }
  &__iconlist{
    width: 100%;
    margin-top: @margin-top;
  }
  &__musiclist{
    width: 100%;
    margin-top: @margin-top *5;
  }
}
</style>
