<template>
  <div class="musicDetail">
    <img
      :src="store.musicList[store.index].al.picUrl"
      class="musicDetail__bgimg"
    />
    <div class="musicDetail__head">
      <div class="musicDetail__head-back" @click.stop="closeDetail">
        <svg
          t="1663938120609"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4215"
          width="200"
          height="200"
        >
          <path
            d="M979.0208 301.99808l-47.104-47.04768-419.98848 419.9424-419.89632-419.9424-47.0528 47.0528 419.89632 419.93728v0.00512l47.09888 47.104 47.04256-47.0528z"
            p-id="4216"
          ></path>
        </svg>
      </div>
      <div class="musicDetail__head-content">
        <Vue3Marquee class="musicDetail__head-content-musname">
          {{ store.musicList[store.index].name }}
        </Vue3Marquee>
        <div class="musicDetail__head-content-name">
          {{ store.musicList[store.index].al.name }}
        </div>
      </div>
      <span></span>
    </div>
    <div class="musicDetail__center">
      <div v-if="showWord" @click="changeWord">
        <img
          :class="[
            src?.musicState
              ? 'musicDetail__center-top--play'
              : 'musicDetail__center-top',
          ]"
          src="https://s3.music.126.net/mobile-new/img/needle-ab.png?4b81da043356110081e5ccaed2e6f2ad="
          alt=""
        />
        <div
          class="musicDetail__center-bottom"
          :class="[
            src?.musicState
              ? 'musicDetail__center-bottom-play'
              : 'musicDetail__center-bottom-paused',
          ]"
        >
          <img
            class="musicDetail__center-black"
            src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4602256867/5855/63fb/325b/d7e4e3a244701ee85fecb5d4f6b5bd57.png?imageView=&quality=75&thumbnail=200y200"
            alt=""
          />
          <img
            class="musicDetail__center-img"
            :src="store.musicList[store.index].al.picUrl"
            alt=""
          />
        </div>
      </div>
      <div
        v-else
        @click="changeWord"
        v-for="(item, index) in msg.lyc"
        :key="index"
        :class="[
          timer * 1000 >= item.time && timer * 1000 < item.future
            ? 'musicDetail__center-nowword'
            : 'musicDetail__center-word',
        ]"
      >
        {{ item.lyc }}
      </div>
    </div>
    <div class="musicDetail__progress">
      <span>{{
        Math.floor(timer / 60) + ":" + ((timer % 60) / 100).toFixed(2).slice(-2)
      }}</span>
      <van-slider
        class="musicDetail__progress__center"
        v-model="timer"
        :max="store.duration"
        min="0"
        @change="changeMusictime"
      />
      <span>
        {{
          Math.floor(store.duration / 60) +
          ":" +
          ((store.duration % 60) / 100).toFixed(2).slice(-2)
        }}
      </span>
    </div>
    <div class="musicDetail__bottom">
      <div>
        <svg
          t="1663936412997"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2951"
          width="200"
          height="200"
          v-if="!isRepeatMusic"
          @click="changeIsRepeatMusic"
        >
          <path
            d="M361.5 727.8c-119.1 0-215.9-96.9-215.9-215.9 0-119.1 96.9-215.9 215.9-215.9 2.3 0 4.6-0.2 6.8-0.6v58.3c0 12.3 14 19.4 23.9 12.1l132.6-97.6c8.1-6 8.1-18.2 0-24.2l-132.6-97.6c-9.9-7.3-23.9-0.2-23.9 12.1v58.1c-2.2-0.4-4.5-0.6-6.8-0.6-39.8 0-78.5 7.9-115 23.4-35.2 15-66.8 36.3-94 63.5s-48.6 58.8-63.5 94c-15.5 36.5-23.4 75.2-23.4 115s7.9 78.5 23.4 115c15 35.2 36.3 66.8 63.5 94s58.8 48.6 94 63.5c36.5 15.5 75.2 23.4 115 23.4 22.1 0 40-17.9 40-40s-17.9-40-40-40zM938.2 396.9c-15-35.2-36.3-66.8-63.5-94s-58.8-48.6-94-63.5c-36.5-15.5-75.2-23.4-115-23.4-22.1 0-40 17.9-40 40s17.9 40 40 40c119.1 0 215.9 96.9 215.9 215.9 0 119.1-96.9 215.9-215.9 215.9-4.1 0-8.1 0.6-11.8 1.8v-60.8c0-12.3-14-19.4-23.9-12.1l-132.6 97.6c-8.1 6-8.1 18.2 0 24.2L629.9 876c9.9 7.3 23.9 0.2 23.9-12.1V806c3.7 1.2 7.7 1.8 11.8 1.8 39.8 0 78.5-7.9 115-23.4 35.2-15 66.8-36.3 94-63.5s48.6-58.8 63.5-94c15.5-36.5 23.4-75.2 23.4-115s-7.8-78.5-23.3-115z"
            p-id="2952"
          ></path>
        </svg>
        <svg
          t="1663936424914"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3096"
          width="200"
          height="200"
          @click="changeIsRepeatMusic"
          v-else
        >
          <path
            d="M361.5 727.8c-119.1 0-215.9-96.9-215.9-215.9 0-119.1 96.9-215.9 215.9-215.9 2.3 0 4.6-0.2 6.8-0.6v58.3c0 12.3 14 19.4 23.9 12.1l132.6-97.6c8.1-6 8.1-18.2 0-24.2l-132.6-97.6c-9.9-7.3-23.9-0.2-23.9 12.1v58.1c-2.2-0.4-4.5-0.6-6.8-0.6-39.8 0-78.5 7.9-115 23.4-35.2 15-66.8 36.3-94 63.5s-48.6 58.8-63.5 94c-15.5 36.5-23.4 75.2-23.4 115s7.9 78.5 23.4 115c15 35.2 36.3 66.8 63.5 94s58.8 48.6 94 63.5c36.5 15.5 75.2 23.4 115 23.4 22.1 0 40-17.9 40-40s-17.9-40-40-40zM938.2 396.9c-15-35.2-36.3-66.8-63.5-94s-58.8-48.6-94-63.5c-36.5-15.5-75.2-23.4-115-23.4-22.1 0-40 17.9-40 40s17.9 40 40 40c119.1 0 215.9 96.9 215.9 215.9 0 119.1-96.9 215.9-215.9 215.9-4.1 0-8.1 0.6-11.8 1.8v-60.8c0-12.3-14-19.4-23.9-12.1l-132.6 97.6c-8.1 6-8.1 18.2 0 24.2L629.9 876c9.9 7.3 23.9 0.2 23.9-12.1V806c3.7 1.2 7.7 1.8 11.8 1.8 39.8 0 78.5-7.9 115-23.4 35.2-15 66.8-36.3 94-63.5s48.6-58.8 63.5-94c15.5-36.5 23.4-75.2 23.4-115s-7.8-78.5-23.3-115z"
            p-id="3097"
          ></path>
          <path
            d="M512.8 660.6c22.1-0.1 39.9-18.1 39.8-40.2l-1.2-214.1c-0.1-22-18-39.8-40-39.8h-0.2c-22.1 0.1-39.9 18.1-39.8 40.2l1.2 214.1c0.1 22 18 39.8 40 39.8h0.2z"
            p-id="3098"
          ></path>
        </svg>
      </div>
      <div>
        <van-button @click="backMusic">
          <svg
            t="1663935207226"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8297"
            width="200"
            height="200"
          >
            <path
              d="M955.733333 544H136.533333c-17.066667 0-32-14.933333-32-32s14.933333-32 32-32h819.2c17.066667 0 32 14.933333 32 32s-14.933333 32-32 32z"
              p-id="8298"
            ></path>
            <path
              d="M373.333333 857.6c-8.533333 0-17.066667-4.266667-23.466666-8.533333l-298.666667-298.666667c-21.333333-21.333333-21.333333-55.466667 0-74.666667l298.666667-298.666666c12.8-14.933333 34.133333-12.8 44.8 0s10.666667 32 0 42.666666L104.533333 512l290.133334 290.133333c12.8 12.8 12.8 32 0 44.8-4.266667 6.4-12.8 10.666667-21.333334 10.666667z"
              p-id="8299"
            ></path>
          </svg>
        </van-button>
        <van-button @click="judgeMusicState" v-if="store.musicState">
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
        </van-button>
        <van-button @click="judgeMusicState" v-else>
          <svg
            t="1663934564988"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5005"
            width="200"
            height="200"
          >
            <path
              d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-992a480 480 0 1 0 480 480A480 480 0 0 0 512 32z m145.744 506.64l-192 127.84A32 32 0 0 1 416 639.888v-255.68a32 32 0 0 1 49.744-26.592l192 127.84a32 32 0 0 1 0 53.184zM620.8 493.248l-150.224-99.088A45.488 45.488 0 0 0 448 389.568v243.376a51.2 51.2 0 0 0 22.576-5.616l150.224-92.576a26.128 26.128 0 0 0 11.712-21.76 22.784 22.784 0 0 0-11.712-19.744z"
              p-id="5006"
            ></path>
          </svg>
        </van-button>
        <van-button @click="nextMusic">
          <svg
            t="1663935262518"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8443"
            width="200"
            height="200"
          >
            <path
              d="M887.466667 544H68.266667c-17.066667 0-32-14.933333-32-32s14.933333-32 32-32h819.2c17.066667 0 32 14.933333 32 32s-14.933333 32-32 32z"
              p-id="8444"
            ></path>
            <path
              d="M650.666667 857.6c-8.533333 0-17.066667-4.266667-23.466667-8.533333-12.8-12.8-12.8-32 0-44.8L919.466667 512 629.333333 221.866667c-12.8-12.8-12.8-32-2.133333-44.8s32-12.8 44.8-2.133334c0 0 2.133333 0 2.133333 2.133334l298.666667 298.666666c21.333333 21.333333 21.333333 55.466667 0 74.666667l-298.666667 298.666667c-6.4 6.4-14.933333 8.533333-23.466666 8.533333z m275.2-337.066667z"
              p-id="8445"
            ></path>
          </svg>
        </van-button>
      </div>
      <div>
        <svg
          t="1663936507868"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3242"
          width="200"
          height="200"
        >
          <path
            d="M938.8 555.5c-12.8-27.7-30.4-52.7-51.7-73.9-2.4-2.2-4.8-4.4-7.1-6.8-15.5-16-26.8-35.9-32.1-58.1-0.9-3.3-1.5-6.6-2-10-1.6-9.6-2.1-19.7-1.3-29.8 1.7-22.4 9.2-43 20.8-60.4-47.7 6.3-87.8 39.3-103.2 84.6-1.1 3.4-2.2 6.9-3 10.5l-22.2 290c-6.4-2.6-12.9-4.9-19.8-6.7-11.7-3.3-24.1-5.7-37-7.1-14.9-1.6-30.5-1.7-46.6-0.1-34.1 3.2-65.2 13.3-90.8 27.9-28.9 16.5-50.7 39-61.9 64.4-6.5 14.8-9.5 30.5-7.9 46.5 6.3 67.7 88.6 115.3 183.6 106.4 23.3-2.2 45.3-7.6 65-15.5 26.6-10.7 49.1-25.9 65.7-43.9 14.6-15.8 24.5-33.9 28.3-52.9 0.7-3.6 1.2-7.4 1.6-11.1 0.2 0 22-282.3 22-282.3 2.3 0.1 4.8 0.1 7.1 0.3 30.1 2.3 57 14.9 77.4 34.3 16.4 15.5 28.5 35.3 34.8 57.5-3.6-22.3-10.3-43.7-19.7-63.8z m-99.5-28.3zM105 169h798.2c22.1 0 40-17.9 40-40s-17.9-40-40-40H105c-22.1 0-40 17.9-40 40s17.9 40 40 40z"
            p-id="3243"
          ></path>
          <path
            d="M105 551.8h568.2c22.1 0 40-17.9 40-40s-17.9-40-40-40H105c-22.1 0-40 17.9-40 40s17.9 40 40 40zM417.2 854.6H105c-22.1 0-40 17.9-40 40s17.9 40 40 40h312.2c22.1 0 40-17.9 40-40s-17.9-40-40-40z"
            p-id="3244"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mainStore } from "../../store/index";
import {
  onBeforeUpdate,
  reactive,
  defineEmits,
  defineProps,
  watch,
  onBeforeMount,
  ref,
  computed,
} from "vue";
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import { Slider,Toast } from "vant";

type data_props = {
  judgeMusicState: any;
  nextMusic: any;
  backMusic: any;
  src: {
    url: any;
    imgSrc: any;
    musicName: any;
    musicState: boolean;
  };
  timer: number;
};

type msg_data = {
  lyc: any;
};

//存储当前组件变量
let msg = reactive<msg_data>({
  lyc: [],
});

//获取传来的方法
let Props_data = defineProps<data_props>();

//获取pinia歌曲数据
const store = mainStore();
let isShow: boolean = false;

//切换图片和歌词
let showWord = ref<boolean>(false);
const changeWord = () => {
  showWord.value = !showWord.value;
};

//关闭detail
const emit = defineEmits(["closeDetail", "changeMusicTime"]);
const closeDetail = () => {
  emit("closeDetail", isShow);
};

//处理获得的歌词
const handleMusicLyc = () => {
  if (store.lyric) {
    msg.lyc = store.lyric.split(/[(\r\n)\r\n]+/).map((item, index) => {
      let min = item.slice(1, 3);
      let seco = item.slice(4, 6);
      let mill = item.slice(7, 10);
      let lyc = item.slice(11, item.length);
      let time: any =
        parseInt(min) * 60 * 1000 + parseInt(seco) * 1000 + parseInt(mill);
      let future: number = 0;
      if (isNaN(Number(mill))) {
        mill = item.slice(7, 9);
        lyc = item.slice(10, item.length);
        time =
          parseInt(min) * 60 * 1000 + parseInt(seco) * 1000 + parseInt(mill);
      }
      return { min, seco, mill, lyc, time, future };
    });
    //存储下一句歌词的时间在当前歌词，以获取一句歌词持续的时间
    msg.lyc.forEach((item: any, index: number) => {
      if (index === msg.lyc.length - 1 || isNaN(msg.lyc[index + 1].time)) {
        item.future = 10000000;
      } else {
        item.future = msg.lyc[index + 1].time;
      }
    });
  }
};

//监听歌词，更新歌词
watch(store, (newV) => {
  handleMusicLyc();
});
onBeforeMount(() => {
  //获取默认歌曲歌词
  handleMusicLyc();
});

//歌词滚动
const getDom = () => {
  let domWord: any = document.querySelector(".musicDetail__center-nowword");
  const dom: any = document.querySelector(".musicDetail__center");
  if (domWord && dom) {
    if (domWord.offsetTop > 329) {
      dom.scrollTop = domWord.offsetTop - 300;
    } else {
      dom.scrollTop = 0;
    }
  }
};
watch(Props_data, () => {
  getDom();

  //自动播放下一首
  // if (Props_data.timer === store.duration) {
  //   Props_data.nextMusic();
  // }
});

// computed(() => {
//   return Props_data.timer/100
// })

//拖拽
const getM = () => {
  // 百分比*current = current
};

const changeMusictime = (value: number) => {
  emit("changeMusicTime", value);
};

let isRepeatMusic = ref<boolean>(false);
const changeIsRepeatMusic = () => {
  if(isRepeatMusic.value){
Toast('列表循环')
  }else{
Toast('单曲循环')
  }
  isRepeatMusic.value = !isRepeatMusic.value
}
</script>

<style scoped lang="less">
@import "../../assets/CSS/measure";
@import "../../assets/CSS/text";
@import "../../assets/CSS/color";
@bgc: rgba(255, 255, 255, 0.1);
@word-color: white;
.musicDetail {
  width: 100%;
  height: @main_bottom_height;
  background-color: @bgc;
  &__bgimg {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: blur(0.05rem);
  }
  &__head {
    padding: @margin;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: @bgc;
    &-back {
      .icon {
        width: 0.4rem;
        height: 0.4rem;
      }
      color: @word-color;
    }
    &-content {
      width: 3rem;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      &-musname {
        width: 1.5rem;
        color: @word-color;
      }
      &-name {
        width: 3rem;
        #word_oneline();
      }
    }
  }
  &__center {
    // background-color: pink;
    width: 100%;
    height:7rem;
    overflow: scroll;
    display: flex;
    flex-flow: column;
    text-align: center;
    margin-top: 0.4rem;
    &-word {
      margin: 0.2rem;
      font-size: 0.3rem;
      color: white;
    }
    &-nowword {
      margin: @margin;
      font-size: 0.4rem;
      color: @default_purple;
    }
    &-top {
      width: 2.4rem;
      height: 3rem;
      position: absolute;
      top: 10%;
      left: 45%;
      transform: translate(-20%, -50%);
      z-index: 10;
      transform-origin: 0 0;
      transform: rotate(-10deg);
      transition: all 0.4s;
    }
    &-top--play {
      width: 2.4rem;
      height: 3rem;
      position: absolute;
      top: 10%;
      left: 45%;
      transform: translate(-20%, -50%);
      z-index: 10;
      transform-origin: 0 0;
      transform: rotate(0deg);
      transition: all 0.4s;
    }
    &-bottom {
      position: absolute;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -35%);
      animation: rotate_yuan 15s linear infinite;
    }
    &-bottom-play {
      animation-play-state: running;
    }
    &-bottom-paused {
      animation-play-state: paused;
    }
    &-black {
      width: 5rem;
      height: 5rem;
      z-index: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &-img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @keyframes rotate_yuan {
      0% {
        transform: rotateZ(0);
      }
      100% {
        transform: rotateZ(360deg);
      }
    }
  }
  &__center::-webkit-scrollbar {
    // 隐藏滚动条
    display: none;
  }
  &__progress {
    width: 100%;
    position: absolute;
    bottom: 1.2rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    &__center {
      width: 100%;
    }
    span {
      margin: @margin;
    }
  }
  &__bottom {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    padding: @margin;
    width: 100%;
    height: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: @bgc;
    .icon {
      width: 0.65rem;
      height: 0.65rem;
      color: @word-color;
    }
    button {
      background-color: rgba(255, 255, 255, 0);
      border-color: rgba(255, 255, 255, 0);
    }
  }
}
</style>