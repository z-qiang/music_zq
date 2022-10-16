<template>
  <div class="musiclistdetail">
    <van-sticky>
      <div class="musiclistdetail__top">
        <div class="musiclistdetail__top-left" @click="backHome">
          <svg
            t="1663582875004"
            class="icon"
            id="musiclistdetail__top-left-one"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2366"
            width="200"
            height="200"
          >
            <path
              d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
              fill=""
              p-id="2367"
            ></path>
          </svg>
          <span>歌单</span>
        </div>
        <div class="musiclistdetail__top-right">
          <svg
            t="1663396526808"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1949"
            width="200"
            height="200"
          >
            <path
              d="M98.357122 818.73194c-14.213723 0-25.764803 11.532661-25.764803 25.76071 0 14.233166 11.55108 25.770943 25.764803 25.770943M922.866648 818.73194 98.128925 818.73194c-14.21884 0-25.770943 11.532661-25.770943 25.76071 0 14.233166 11.552104 25.770943 25.770943 25.770943l824.737724 0c14.213723 0 25.764803-11.538801 25.764803-25.770943C948.633498 830.262554 937.081395 818.73194 922.866648 818.73194zM98.357122 483.770052c-14.213723 0-25.764803 11.537777-25.764803 25.76992 0 14.229073 11.55108 25.764803 25.764803 25.764803M922.866648 483.770052 98.128925 483.770052c-14.21884 0-25.770943 11.537777-25.770943 25.76992 0 14.229073 11.552104 25.764803 25.770943 25.764803l824.737724 0c14.213723 0 25.764803-11.537777 25.764803-25.764803C948.633498 495.307829 937.081395 483.770052 922.866648 483.770052zM98.357122 148.815327c-14.213723 0-25.764803 11.539824-25.764803 25.768897 0 14.227026 11.55108 25.76378 25.764803 25.76378M98.128925 200.346981l824.737724 0c14.213723 0 25.764803-11.536754 25.764803-25.76378 0-14.229073-11.55108-25.768897-25.764803-25.768897L98.128925 148.814304c-14.21884 0-25.770943 11.539824-25.770943 25.768897C72.359005 188.81125 83.911108 200.346981 98.128925 200.346981z"
              p-id="1950"
            ></path>
          </svg>
          <span></span>
          <svg
            t="1663396556615"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2996"
            width="200"
            height="200"
          >
            <path
              d="M1001.526404 991.699618C999.922771 986.822379 999.922771 986.822379 998.661741 984.531443 997.556333 982.547938 996.293839 980.724943 994.702325 978.653549 992.500075 975.787264 989.423708 972.169135 985.358477 967.619563 978.223881 959.634933 967.82403 948.546074 954.04227 934.18551 932.495573 911.733901 910.909628 889.684252 858.479859 836.391998 806.561909 783.619985 784.782022 761.370402 763.425645 739.113463 750.035742 725.158933 739.986204 714.441517 733.331893 706.993367 730.0273 703.294545 727.65239 700.501581 726.365602 698.828322 727.222236 700.438869 727.222236 700.438869 728.57702 704.41879 730.685899 711.913483 730.685899 711.913483 721.610157 729.174018 803.853596 649.91606 851.33145 539.987051 851.33145 422.399774 851.33145 189.11482 665.530044 0 436.332393 0 207.134741 0 21.333333 189.11482 21.333333 422.399774 21.333333 655.684727 207.134741 844.799548 436.332393 844.799548 441.356706 844.799548 446.556279 844.56416 452.347883 844.11767 456.487002 843.798575 460.079727 843.454155 466.651669 842.776804 479.958906 841.405269 484.804847 841.014569 490.397372 841.014558 499.896397 841.014541 514.964663 837.646929 537.39015 831.429666 540.021178 830.700239 542.719546 829.938705 545.476431 829.148403 553.976567 826.711712 562.667765 824.108471 571.097184 821.505798 576.160226 819.942528 580.026436 818.721914 582.233225 818.013231 595.480279 813.759108 602.830912 799.380094 598.651326 785.896804 594.471738 772.413515 580.344653 764.931795 567.097598 769.18592 565.058735 769.840674 561.367413 771.006074 556.494825 772.510539 548.364858 775.020755 539.986116 777.530404 531.839533 779.865745 529.217662 780.617342 526.657771 781.339795 524.170112 782.029476 506.936476 786.807345 493.480702 789.814579 490.397278 789.814586 482.458716 789.814601 476.720548 790.277235 461.583853 791.837329 455.416051 792.473024 452.140828 792.787008 448.548723 793.063932 443.933724 793.419714 439.960704 793.599575 436.332393 793.599575 234.916275 793.599575 71.63625 627.407763 71.63625 422.399774 71.63625 217.391785 234.916275 51.199973 436.332393 51.199973 637.74851 51.199973 801.028533 217.391785 801.028533 422.399774 801.028533 525.775443 759.336083 622.309077 687.025254 691.994987 677.769918 709.563029 677.769918 709.563029 679.976768 717.62707 681.566101 722.305182 681.566101 722.305182 682.808947 724.550298 683.910231 726.511657 685.170219 728.326692 686.754421 730.386692 688.964348 733.260343 692.047349 736.886044 696.115554 741.439575 703.261474 749.437982 713.66454 760.532418 727.438434 774.887134 749.001325 797.359294 770.84669 819.675765 822.916311 872.601946 875.194278 925.7399 896.716879 947.724843 918.057933 969.962174 931.455439 983.922347 941.502012 994.634524 948.144469 1002.068378 951.440527 1005.757135 953.805218 1008.538259 955.077419 1010.194061 954.139053 1008.441707 954.139053 1008.441707 952.75811 1004.249822 950.686453 996.172693 950.686453 996.172693 960.850534 978.849743 950.24269 987.977788 948.913429 1004.130236 957.881542 1014.927251 966.849655 1025.724265 982.719104 1027.077231 993.326948 1017.949188 1003.683753 1000.332838 1003.683753 1000.332838 1001.526404 991.699618Z"
              p-id="2997"
            ></path>
          </svg>
        </div>
      </div>
    </van-sticky>
    <div class="musiclistdetail__center">
      <img :src="data?.msg?.coverImgUrl" class="musiclistdetail__center-bg" />
      <div class="musiclistdetail__center-content">
        <div class="musiclistdetail__center-content-left">
          <div></div>
          <img :src="data.msg?.coverImgUrl" />
        </div>
        <div class="musiclistdetail__center-content-right">
          <div class="musiclistdetail__center-content-right--name">
            {{ data.msg?.name }}
          </div>
          <div
            class="musiclistdetail__center-content-right--tag"
            v-if="data.msg?.creator"
          >
            <img
              :src="data.msg?.creator?.avatarUrl"
              v-if="data.msg?.creator?.avatarUrl"
              class="musiclistdetail__center-content-right--tag--img"
            />
            <div
              v-else
              class="musiclistdetail__center-content-right--tag--img"
            ></div>
            <div>{{ data?.msg?.creator?.nickname }}</div>
          </div>
          <div
            v-else
            v-for="msg in data?.msg?.algTags"
            :key="msg"
            class="musiclistdetail__center-content-right--tag"
          >
            {{ msg }}
          </div>
          <div class="musiclistdetail__center-content-right--description">
            {{ data?.msg?.description }}
          </div>
        </div>
      </div>
    </div>
    <div class="musiclistdetail__center__musiclist">
      <Music :props="props" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getmusicListItem } from "../../../api/home/musicListDetail/index";
import Music from "./music.vue";
import type { StickyProps, StickyPosition } from "vant";
import { Sticky } from "vant";

type data = {
  msg: {
    description: any;
    algTags: any;
    creator: {
      creator: any;
      avatarUrl: any;
      nickname: any;
    };
    coverImgUrl: any;
    name: any;
  };
};
type props = {
  id: string | string[] | null;
  subscribedCount: number | string;
};
let data = reactive({
  msg: {
    description: {},
    algTags: {},
    creator: {
      creator: {},
      avatarUrl: "",
      nickname: {},
    },
    coverImgUrl: "",
    name: {},
  },
});

//获取路由
const router = useRoute();
let props = reactive({
  id: router.query.id,
  subscribedCount: "",
});
onBeforeMount(async () => {
  let src = await getmusicListItem(router.query.id as any);
  data.msg = src.data.playlist;
  props.subscribedCount = src.data.playlist.subscribedCount;
  console.log(src);
});

//返回上一级
const Router = useRouter();
const backHome = () => {
  Router.go(-1);
};

if (true) {
  console.log("undefind");
  console.log(undefined == null);
}
if (null) {
  console.log("null");
}
</script>

<style scoped lang="less">
@import "../../../assets/CSS/measure";
@import "../../../assets/CSS/text";
@font-size: 18px;
.musiclistdetail {
  width: 100%;
  height: 1000px;
  background-color: pink;
  &__top {
    width: 100%;
    z-index: 10;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    //顶部的高
    height: 0.8rem;
    align-items: center;
    color: white;
    background-color: pink;
    .icon {
      fill: white;
      font-size: 0.4rem;
    }
    &-left {
      margin-left: 0.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        width: 0.6rem;
        height: 0.6rem;
      }
      & span {
        margin-left: 0.6rem;
        font-size: 0.35rem;
      }
    }
    &-right {
      margin-right: 0.2rem;
      & span {
        margin-right: 0.6rem;
      }
    }
  }
  &__center {
    position: relative;
    margin: 0 @margin_line;
    &-bg {
      position: absolute;
      top: 0;
      z-index: -1;
      width: 100%;
      height: 5rem;
      filter: blur(15px);
    }
    &-content {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      &-left {
        width: 2rem;
        height: 2rem;
        overflow: hidden;
        position: relative;
        & > div {
          position: absolute;
          width: 1.8rem;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.35);
          z-index: -1;
          top: 0;
          left: 50%;
          transform: translate(-50%, 0);
          border-radius: 0.2rem;
        }
        img {
          width: 2rem;
          height: 1.9rem;
          margin-top: 0.1rem;
          border-radius: 0.2rem;
        }
      }
      &-right {
        width: 65%;
        height: 2rem;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        &--name {
          margin-top: 0.1rem;
          font-size: @font-size;
          color: white;
          word-wrap: break-word;
        }
        &--tag {
          font-size: 0.14rem;
          color: rgba(255, 255, 255, 0.5);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          &--img {
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
            margin-right: @margin_line;
          }
        }
        &--description {
          font-size: 0.14rem;
          color: rgba(255, 255, 255, 0.5);
          #word_oneline();
        }
      }
    }
    &__musiclist {
      box-sizing: border-box;
      padding-bottom: @main_bottom_height + 0.3rem;
    }
  }
}
</style>