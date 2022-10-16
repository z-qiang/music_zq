<template>
  <div class="dailytime">
    <div class="dailytime__month">{{ data.time_month }}</div>
    <div class="dailytime__day">/{{ data.time_day }}</div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const data = reactive({
  time_month: 1,
  time_day: 1,
});

//获取时间
const getTime = () => {
  const time = new Date();
  data.time_month = time.getMonth() + 1;
  data.time_day = time.getDate();
};
getTime();
</script>

<style scoped lang="less">
@import "@/assets/CSS/color.less";
@font-size: 0.35rem;
.dailytime {
  display: flex;
  color: @default_purple;
  align-items: center;
  &__month {
    font-size: @font-size*2;
  }
  &__day {
    font-size: @font-size;
  }
}
</style>