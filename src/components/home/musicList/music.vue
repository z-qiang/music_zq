<template>
  <div class="music">
    <div class="music__head">
      <div class="music__head-left">
        <svg
          t="1663603955866"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3272"
          width="200"
          height="200"
        >
          <path
            d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m0 896c-235.64 0-426.666667-191.026667-426.666667-426.666667s191.026667-426.666667 426.666667-426.666667 426.666667 191.026667 426.666667 426.666667-191.026667 426.666667-426.666667 426.666667z m-74.666667-213.38a53.373333 53.373333 0 0 1-53.333333-53.333334V352.066667A53.333333 53.333333 0 0 1 467.373333 308L702 467.933333a53.333333 53.333333 0 0 1 0 88.133334L467.373333 716a53.286667 53.286667 0 0 1-30.04 9.286667z m0.08-383.933334a11.093333 11.093333 0 0 0-5.08 1.28 10.446667 10.446667 0 0 0-5.666666 9.433334v319.866666a10.666667 10.666667 0 0 0 16.666666 8.82l234.666667-159.94a10.666667 10.666667 0 0 0 0-17.626666l-234.666667-159.933334a10.313333 10.313333 0 0 0-5.906666-1.92z"
            fill="#5C5C66"
            p-id="3273"
          ></path>
        </svg>
        <span>
          播放全部<span v-if="musicList.msg"
            >(共{{ musicList.msg.length }}首)</span
          >
        </span>
      </div>
      <div class="music__head-right">
        <van-button type="danger"
          >收藏量（{{ props.subscribedCount }}）</van-button
        >
      </div>
    </div>
    <div class="music__content">
      <div
        class="music__content-item"
        v-for="(item, index) in musicList.msg"
        :key="index"
        @click="playMusic(index)"
      >
        <MusicCom :data="{ item: item, index: index }" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onBeforeMount, reactive, onMounted } from "vue";
import { getmusicListItemMusic } from "../../../api/home/musicListDetail/index";
import { Button } from "vant";
import MusicCom from "./musicCom.vue";
import { mainStore } from "../../../store/index";
import { storeToRefs } from "pinia";

const store = mainStore();

type musicProps = {
  id: any;
  subscribedCount: string | number;
};
type Props = {
  props: musicProps;
};
type musiclist = {
  msg: object | any;
  length: number;
};
let data = defineProps<Props>();

let musicList = reactive<musiclist>({
  msg: {},
  length: 1,
});

onBeforeMount(async () => {
  let value = await getmusicListItemMusic(data.props.id);
  musicList.msg = value.data.songs;
});

const playMusic = (index: any) => {
  let aa = {
    id: 476659144,
    al: {
      name: "张震岳",
      picUrl:
        "https://p1.music.126.net/4azOvzVWCzln6E84lPKZ9A==/109951164548112691.jpg",
    },
    name: "小宇",
  };
  if (musicList.msg) {
    aa.id = musicList.msg[index].id;
    aa.al.name = musicList.msg[index].al.name;
    aa.al.picUrl = musicList.msg[index].al.picUrl;
    aa.name = musicList.msg[index].name;
    store.addMusic(aa, "单曲");
  }
  store.musicState = true;
};
</script>

<style scoped lang="less">
@import "../../../assets/CSS/measure";
@import "../../../assets/CSS/color";
@margin-left: 0.12rem;
@border-top-radius: 0.4rem;
.music {
  box-sizing: border-box;
  border-top-left-radius: @border-top-radius;
  border-top-right-radius: @border-top-radius;
  background: white;
  padding: 0 @margin_line;
  margin-top: 10px;
  &__head {
    display: flex;
    justify-content: space-between;
    padding-top: 0.08rem;

    // background-color: black;
    &-left {
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        #home_top();
        margin-right: @margin-left;
      }
      span > span {
        font-size: 0.14rem;
        font-weight: bolder;
        color: rgba(0, 0, 0, 0.5);
      }
    }
    &-right {
      button {
        border-radius: 0.3rem;
      }
    }
  }
}
</style>