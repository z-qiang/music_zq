<template>
  <div class="bottomplay">
    <div class="bottomplay__left" @click.stop="showDetail">
      <audio ref="audio" :src="src.url"></audio>
      <img
        :src="src.imgSrc"
        alt=""
        class="bottomplay__left-icon"
        v-if="src.imgSrc"
      />
      <div class="bottomplay__left-icon" v-else></div>
      <div class="bottomplay__left-name">
        {{ src.musicName ? src.musicName : "请选择歌曲" }}
      </div>
    </div>
    <div class="bottomplay__right">
      <van-button class="bottomplay__right-left" @click="nextMusic">
        <svg
          t="1663749187373"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3906"
          width="200"
          height="200"
        >
          <path
            d="M511.3 98.2c-228.8 0-414.9 186.1-414.9 414.9 0 23.9 2.6 48.2 6.5 71 0 0.1 0.2 0.1 0.3 0.2 1.7 5.8 6.8 10.1 13.1 10.1 7.6 0 13.8-6.2 13.8-13.8 0-0.5-0.2-0.9-0.3-1.3l0.2-0.1c-3.7-21.5-6-43.5-6-66C124 299.3 297.4 126 511.2 126s387.2 173.4 387.2 387.2-173.2 387.2-387.1 387.2c-142.9 0-267.4-77.6-334.5-192.8 0-0.1-0.1-0.1-0.1-0.2l-0.6-0.9c-2.3-4.3-6.8-7.4-12-7.4-7.6 0-13.8 6.2-13.8 13.8 0 3 1.2 5.6 2.8 7.9l-0.2 0.1C224.7 844.5 358.3 928 511.3 928c228.8 0 414.9-186.1 414.9-414.9S740.1 98.2 511.3 98.2z"
            fill="#3259CE"
            p-id="3907"
          ></path>
          <path
            d="M409 410.7l-82 83.6c-10.6 10.8-10.5 28.1 0.1 38.8l81.9 82.7 0.1-0.1c2.5 2.8 6.1 4.7 10.2 4.7 7.6 0 13.8-6.2 13.8-13.8 0-4-1.8-7.6-4.6-10.1l0.1-0.1-68.1-68.8h329.3c7.6 0 13.8-6.2 13.8-13.8s-6.2-13.8-13.8-13.8H360.2l68.4-69.8-0.1-0.1c2.8-2.5 4.6-6.1 4.6-10.1 0-7.6-6.2-13.8-13.8-13.8-4.2-0.3-7.8 1.6-10.3 4.5z"
            fill="#3259CE"
            p-id="3908"
          ></path>
        </svg>
      </van-button>
      <van-button
        class="bottomplay__right-center"
        @click="judgeMusicState"
        v-if="store.musicState"
      >
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
      <van-button
        class="bottomplay__right-center"
        @click="judgeMusicState"
        v-else
      >
        <svg
          t="1663749551664"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6479"
          width="200"
          height="200"
        >
          <path
            d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM456.704 305.92C432.704 289.152 405.333333 303.082667 405.333333 331.797333v360.533334c0 28.586667 27.541333 42.538667 51.370667 25.856l252.352-176.768c21.76-15.253333 21.632-43.541333 0-58.709334l-252.373333-176.768z m-8.597333 366.72V351.466667l229.269333 160.597333-229.269333 160.597333z"
            fill="#3D3D3D"
            p-id="6480"
          ></path>
        </svg>
      </van-button>
      <van-button class="bottomplay__right-right" @click="backMusic">
        <svg
          t="1663749246829"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5574"
          width="200"
          height="200"
        >
          <path
            d="M512.3 98.2c-228.8 0-414.9 186.1-414.9 414.9 0 23.9 2.6 48.2 6.5 71 0 0.1 0.2 0.1 0.3 0.2 1.7 5.8 6.8 10.1 13.1 10.1 7.6 0 13.8-6.2 13.8-13.8 0-0.5-0.2-0.9-0.3-1.3l0.2-0.1c-3.7-21.5-6-43.5-6-66C125 299.3 298.4 126 512.2 126s387.2 173.4 387.2 387.2-173.3 387.2-387.1 387.2c-142.9 0-267.4-77.6-334.5-192.8 0-0.1-0.1-0.1-0.1-0.2l-0.6-0.9c-2.3-4.3-6.8-7.4-12-7.4-7.6 0-13.8 6.2-13.8 13.8 0 3 1.2 5.6 2.8 7.9l-0.2 0.1C225.6 844.5 359.3 928 512.3 928c228.8 0 414.9-186.1 414.9-414.9S741.1 98.2 512.3 98.2z"
            fill="#3259CE"
            p-id="5575"
          ></path>
          <path
            d="M614.7 410.7l82 83.6c10.6 10.8 10.5 28.1-0.1 38.8l-81.9 82.7-0.1-0.1c-2.5 2.8-6.1 4.7-10.2 4.7-7.6 0-13.8-6.2-13.8-13.8 0-4 1.8-7.6 4.6-10.1l-0.1-0.1 68.1-68.8H333.8c-7.6 0-13.8-6.2-13.8-13.8s6.2-13.8 13.8-13.8h329.5l-68.4-70 0.1-0.1c-2.8-2.5-4.6-6.1-4.6-10.1 0-7.6 6.2-13.8 13.8-13.8 4.3-0.1 7.9 1.8 10.5 4.7z"
            fill="#3259CE"
            p-id="5576"
          ></path>
        </svg>
      </van-button>
      <van-button class="bottomplay__right-detail" @click.stop="isShowMusicPlayList">
        <svg
          t="1663849406137"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8251"
          width="200"
          height="200"
        >
          <path
            d="M182.044444 256m-28.444444 0a28.444444 28.444444 0 1 0 56.888889 0 28.444444 28.444444 0 1 0-56.888889 0Z"
            fill="#FFFFFF"
            p-id="8252"
          ></path>
          <path
            d="M182.044444 199.111111c-34.133333 0-56.888889 22.755556-56.888888 56.888889s22.755556 56.888889 56.888888 56.888889 56.888889-22.755556 56.888889-56.888889-22.755556-56.888889-56.888889-56.888889z"
            fill="#9E9B9A"
            p-id="8253"
          ></path>
          <path
            d="M182.044444 512m-28.444444 0a28.444444 28.444444 0 1 0 56.888889 0 28.444444 28.444444 0 1 0-56.888889 0Z"
            fill="#FFFFFF"
            p-id="8254"
          ></path>
          <path
            d="M182.044444 455.111111c-34.133333 0-56.888889 22.755556-56.888888 56.888889s22.755556 56.888889 56.888888 56.888889 56.888889-22.755556 56.888889-56.888889-22.755556-56.888889-56.888889-56.888889z"
            fill="#9E9B9A"
            p-id="8255"
          ></path>
          <path
            d="M182.044444 768m-28.444444 0a28.444444 28.444444 0 1 0 56.888889 0 28.444444 28.444444 0 1 0-56.888889 0Z"
            fill="#FFFFFF"
            p-id="8256"
          ></path>
          <path
            d="M182.044444 711.111111c-34.133333 0-56.888889 22.755556-56.888888 56.888889s22.755556 56.888889 56.888888 56.888889 56.888889-22.755556 56.888889-56.888889-22.755556-56.888889-56.888889-56.888889z"
            fill="#9E9B9A"
            p-id="8257"
          ></path>
          <path d="M381.155556 256h512" fill="#FFFFFF" p-id="8258"></path>
          <path
            d="M893.155556 284.444444h-512c-17.066667 0-28.444444-11.377778-28.444445-28.444444s11.377778-28.444444 28.444445-28.444444h512c17.066667 0 28.444444 11.377778 28.444444 28.444444s-17.066667 28.444444-28.444444 28.444444z"
            fill="#9E9B9A"
            p-id="8259"
          ></path>
          <path d="M381.155556 512h512" fill="#FFFFFF" p-id="8260"></path>
          <path
            d="M893.155556 540.444444h-512c-17.066667 0-28.444444-11.377778-28.444445-28.444444s11.377778-28.444444 28.444445-28.444444h512c17.066667 0 28.444444 11.377778 28.444444 28.444444s-17.066667 28.444444-28.444444 28.444444z"
            fill="#9E9B9A"
            p-id="8261"
          ></path>
          <path d="M381.155556 768h512" fill="#FFFFFF" p-id="8262"></path>
          <path
            d="M893.155556 796.444444h-512c-17.066667 0-28.444444-11.377778-28.444445-28.444444s11.377778-28.444444 28.444445-28.444444h512c17.066667 0 28.444444 11.377778 28.444444 28.444444s-17.066667 28.444444-28.444444 28.444444z"
            fill="#9E9B9A"
            p-id="8263"
          ></path>
        </svg>
      </van-button>
    </div>
    <div class="bottomplay__detail">
      <van-popup
        v-model:show="show"
        close-icon="arrow-left"
        position="bottom"
        :style="{ height: '100%' }"
        @click-close-icon="cloesShow"
        close-icon-position="top-left"
        teleport="#app"
      >
        <MusicDetail
          @closeDetail="closeDetail"
          @changeMusicTime="changeMusicTime"
          :src="src"
          :judgeMusicState="judgeMusicState"
          :nextMusic="nextMusic"
          :backMusic="backMusic"
          :timer="timer"
        />
      </van-popup>
    </div>
    <VanDialog />
    <van-popup v-model:show="showMusicPlayList" position="bottom" :style="{ height: '70%' }">
      <PlayMusicList />
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, watch, reactive, nextTick, onMounted } from "vue";
import { Button } from "vant";
import { mainStore } from "../../store/index";
import { getMusic } from "../../api/home/index";
import { Popup,Toast, Dialog } from "vant";
import MusicDetail from "./musicDeatil.vue";
import { getLyric } from "../../api/home/index";
import PlayMusicList from '@/components/playMusicList/index.vue';

const VanDialog = Dialog.Component;

type data_boi = {
  lyc: [
    {
      min: string;
      mill: string;
      seco: string;
      lrc: string;
      time: number;
      future: number;
    }
  ];
};
const store = mainStore();
let src = reactive({
  url: "",
  imgSrc: "",
  musicName: "",
  musicState: false,
});
let audio: any = ref<HTMLDivElement>();

let musicState = ref(store.musicState);
let show = ref(false);
//存储定时器
let inter: any = reactive({});
//存储歌曲时间
let timer = ref<number>(0);

// onBeforeMount(async () => {
//   // src.url = `https://music.163.com/song/media/outer/url?id=${
//   //   store.musicList[store.index].id
//   // }.mp3`;
//   // src.imgSrc = store.musicList[store.index]?.al?.picUrl;
//   // src.musicName = store.musicList[store.index]?.name;
//   // src.musicState = store.musicState;
//   // //存储歌词
//   // let txt = await getLyric(store.musicList[store.index].id);
//   // store.lyric = txt.data.lrc.lyric;
// });

//传递歌曲播放了多久
const musicCurrentTime = () => {
  inter = setInterval(() => {
    timer.value = audio.value.currentTime;
    if (audio.value.duration == audio.value.currentTime) {
      store.musicState = false;
    }
  }, 1000);
};

watch(
  store,
  async (newV, oldV) => {
    src.url = `https://music.163.com/song/media/outer/url?id=${
      store.musicList[store.index]?.id
    }.mp3`;
    src.imgSrc = store.musicList[store.index]?.al?.picUrl;
    src.musicName = store.musicList[store.index]?.name;
    src.musicState = store.musicState;
    nextTick(() => {
      if (store.musicState) {
        //切歌自动播放
        audio.value.autoplay = true;
      }
    });
    //存储歌词
    let txt = await getLyric(store.musicList[store.index].id);
    store.lyric = txt.data.lrc.lyric;
    //存储歌曲当前时间
    if (store.musicState) {
      musicCurrentTime();
      console.log("歌曲播放", store.musicState);
    } else {
      //todo 清除计时器不成功
      clearInterval(inter);
      inter = null;
    }
    //存储歌曲时间
    audio.value.preload = { metadata: true };
    //需要判断，不然可能会因为没有获取到媒体而出现NaN的情况
    if (audio.value.duration) {
      store.duration = audio.value.duration;
    }
  },
  {
    deep: true,
    immediate: true,
  }
);

//查看歌曲是否需要vip
watch(
  () => {
    store.playMessage;
  },
  (newValue, oldValue) => {
    if (store.playMessage) {
      Dialog.alert({
        message: "该歌曲需要vip！！！",
      }).then(() => {
        store.playMessage = false;
      });
    }
  },
  {
    deep: true,
  }
);

//判断播放状态
watch(() => {store.musicState},()=>{
  if(store.musicState){
    audio.value.play();
  }else{
    audio.value.pause();
  }
},{
  deep: true,
})

watch(() => {
  store.isMusicList
},()=>{
  if(store.isMusicList){
    show.value = false;
    showMusicPlayList.value = false;
  }
},{
  deep: true,
})
//method

//判断播放状态
const judgeMusicState = () => {
  if (store.musicList.length) {
    if (src.musicState) {
      src.musicState = !src.musicState;
      audio.value.pause();
      store.musicState = src.musicState;
    } else {
      src.musicState = !src.musicState;
      audio.value.play();
      store.musicState = src.musicState;
    }
  }
};

//下一首歌
const nextMusic = () => {
  //判断防止越界
  if (store.index === store.musicList.length - 1) {
    store.index = 0;
    audio.value.autoplay = true;
    store.musicState = true;
  } else {
    store.index = store.index + 1;
    audio.value.autoplay = true;
    store.musicState = true;
  }
  if (store.musicList.length <= 1) {
    Toast("播放列表无更多歌曲");
  }
};

//上一首歌
const backMusic = () => {
  //判断防止越界
  if (store.index == 0) {
    store.index = store.musicList.length - 1;
    audio.value.autoplay = true;
    store.musicState = true;
  } else {
    store.index = store.index - 1;
    audio.value.autoplay = true;
    store.musicState = true;
  }
  if (store.musicList.length <= 1) {
    Toast("播放列表无更多歌曲");
  }
};

const getlyric = async () => {
  let txt = await getLyric(store.musicList[store.index].id);
  store.lyric = txt.data.lrc.lyric;
};

//detail显示
const showDetail = () => {
  show.value = true;
};

const cloesShow = () => {
  show.value = false;
};

//获取detail组件状态
const closeDetail = (value: boolean) => {
  show.value = value;
};

//接收传过来的拖拽时间
const changeMusicTime = (value: number) => {
  if (audio) {
    audio.value.currentTime = value;
  }
};

//显示播放列表
const showMusicPlayList = ref(false);
const isShowMusicPlayList = () => {
  showMusicPlayList.value = true;
}

</script>

<style scoped lang="less">
@import "../../assets/CSS/text";
@import "../../assets/CSS/measure";
@icon_scale: 0.9rem;
@btn_scale: 0.9rem;
@btn_icon_scale: 0.65rem;
.bottomplay {
  width: 100%;
  height: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__left {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 3rem;
    margin-left: @margin_line;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    border-right: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: @border-radius-bigger;
    &-icon {
      width: @icon_scale;
      height: @icon_scale;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    &-name {
      #word_oneline();
      width: 2rem;
      margin-left: 0.1rem;
    }
  }
  &__right {
    button {
      width: @btn_scale;
      height: @btn_scale;
    }
    .icon {
      width: @btn_icon_scale;
      height: @btn_icon_scale;
    }
    &-left {
      border-top-left-radius: @border-radius-bigger;
      border-bottom-left-radius: @border-radius-bigger;
    }
    &-right {
      border-top-right-radius: @border-radius-bigger;
      border-bottom-right-radius: @border-radius-bigger;
      margin-right: 0.08rem;
    }
    &-detail {
      margin-right: @margin_line;
    }
  }
}
</style>