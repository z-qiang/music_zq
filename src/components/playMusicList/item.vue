<template>
  <div class="item">
    <div class="item__left">
      <transition>
        <div class="item__left__play" v-if="index == showPlayIcon">
          <svg
            t="1663749578986"
            class="icon"
            viewBox="0 0 1048 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7392"
            width="200"
            height="200"
          >
            <path
              d="M524.272128 0.018022C241.513165 0.018022 12.288102 229.245952 12.288102 512.005018c0 112.734003 36.43904 216.957952 98.17897 301.537997l38.667981-40.258048C97.458176 699.230003 67.143168 609.158963 67.143168 512.005018 67.143168 259.540992 271.807078 54.872986 524.272128 54.872986c252.45696 0 457.120973 204.668006 457.120973 457.132032 0 252.460954-204.664013 457.118003-457.120973 457.118003-96.240026 0-185.530982-29.744026-259.189043-80.53504l-34.539008 42.797978c83.150029 58.344038 184.437965 92.596019 293.728973 92.596019 282.758963 0 511.984026-229.220966 511.984026-511.976038C1036.256154 229.245952 807.031091 0.018022 524.272128 0.018022zM615.693107 256.011981l0 511.987 54.855 0L670.548107 256.012 615.693128 256.012zM377.996083 256.011981l0 511.987 54.855 0L432.851083 256.012 377.996128 256.012z"
              p-id="7393"
            ></path>
          </svg>
        </div>
      </transition>
      <div class="item__left__musicname">
        {{ musicName }}
      </div>
      <div class="item__left__line">--</div>
      <div class="item__left__singername">
        {{ singerName }}
      </div>
    </div>
    <div class="item__right" @click.stop="delMusic(index)">
      <svg
        t="1666110864488"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5539"
        width="200"
        height="200"
      >
        <path
          d="M813.653333 802.986667a42.666667 42.666667 0 0 1-60.373333 0L512 561.706667 270.72 802.986667a42.666667 42.666667 0 1 1-60.373333-60.373334L451.626667 501.333333 210.346667 260.053333a42.666667 42.666667 0 0 1 30.293333-72.746666 42.666667 42.666667 0 0 1 30.08 12.373333L512 440.96 753.28 199.68a42.666667 42.666667 0 0 1 72.746667 30.293333 42.666667 42.666667 0 0 1-12.373334 30.08L572.373333 501.333333l241.28 241.28a42.666667 42.666667 0 0 1 0 60.373334z"
          p-id="5540"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { mainStore } from "../../store/index";

interface Props {
  musicName: string,
  singerName: string,
  index: number,
  showPlayIcon: number,
}

const store = mainStore();
const props = withDefaults(defineProps<Props>(), {
  musicName: "小宇",
  singerName: "张震岳",
  index: 0,
  showPlayIcon: 0,
});

const delMusic = (index:number) => {
    store.delMusicListAttr(index);
    console.log(11);
    
}
</script>

<style scoped lang="less">
@import "@/assets/CSS/text.less";
@littlefs: 0.26rem;
@color: rgb(168, 168, 168);
#singerName {
  font-size: @littlefs;
  color: @color;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1rem;
  &__left {
    display: flex;
    align-items: end;
    overflow: hidden;
    .icon {
      color: red;
    }
    div {
      margin-left: 0.2rem;
    }
    &__musicname {
      #word_oneline();
    }
    &__line {
      #singerName();
    }
    &__singername {
      #singerName();
      #word_oneline();
    //   width: 1.5rem;
    }
  }
  &__right {
    margin-right: 0.2rem;
    .icon{
        color: @color;
    }
  }
}
</style>