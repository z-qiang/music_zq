<template>
  <div class="search">
    <div class="search__head">
      <div class="search__back" @click="router.go(-1)">
        <svg
          t="1664201088743"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3854"
          width="200"
          height="200"
        >
          <path
            d="M896 544H193.3312a32 32 0 1 1 0-64H896a32 32 0 0 1 0 64z"
            fill="#2C2C2C"
            p-id="3855"
          ></path>
          <path
            d="M426.5984 798.72a31.8976 31.8976 0 0 1-22.6304-9.3696L126.8736 512 403.968 234.9056a32 32 0 0 1 45.2608 45.2608L217.3952 512l231.8336 231.8336A32 32 0 0 1 426.5984 798.72z"
            fill="#2C2C2C"
            p-id="3856"
          ></path>
        </svg>
      </div>
      <form action="/" class="search__search">
        <van-search
          v-model="val"
          show-action
          :placeholder="defaultWord"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    <div class="search__before">
      <div class="search__before__history">
        <div
          class="search__before__history-head"
          v-if="store.searchHistory.length"
        >
          <div style="fontweight:bolder">历史</div>
          <div @click="delHistory">
            <svg
              t="1664205820221"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5752"
              width="200"
              height="200"
            >
              <path
                d="M358.925672 596.814688v30.450522c0 17.248849 13.985526 31.233352 31.233352 31.233352 17.248849 0 31.233352-13.985526 31.233352-31.233352v-30.450522c0-17.248849-13.985526-31.233352-31.233352-31.233352-17.248849 0-31.233352 13.985526-31.233352 31.233352zM602.506317 596.814688v30.450522c0 17.248849 13.985526 31.233352 31.233352 31.233352s31.233352-13.985526 31.233351-31.233352v-30.450522c0-17.248849-13.984503-31.233352-31.233351-31.233352s-31.233352 13.985526-31.233352 31.233352zM437.047937 699.686636c-14.650675 9.104355-19.155269 28.360931-10.04989 43.01263 11.015891 17.73185 41.238216 47.740304 84.651982 47.740304 43.195801 0 73.79368-29.780257 85.059258-47.379077 9.216919-14.391778 5.03262-33.338293-9.237385-42.742477-14.270005-9.393951-33.576723-5.409197-43.159985 8.739035-0.12689 0.188288-13.049201 18.915815-32.661888 18.915815-19.028379 0-30.93864-17.274432-31.772634-18.530028-9.175987-14.412244-28.259624-18.788925-42.829458-9.756202zM907.576407 160.082952H699.352015v-26.882254c0-40.145325-32.692586-72.807213-72.878844-72.807213h-229.046626c-40.186258 0-72.878844 32.661887-72.878844 72.807213v26.882254H116.323309c-17.248849 0-31.233352 13.984503-31.233352 31.233352s13.984503 31.233352 31.233352 31.233351h791.253098c17.248849 0 31.233352-13.984503 31.233352-31.233351s-13.985526-31.233352-31.233352-31.233352z m-270.692119 0H387.014404v-26.882254c0-5.607718 4.768607-10.340509 10.411117-10.340509h229.046627c5.64251 0 10.411117 4.732791 10.411117 10.340509v26.882254z"
                p-id="5753"
              ></path>
              <path
                d="M824.286446 259.279185c-17.248849 0-31.233352 13.984503-31.233352 31.233352v530.07261c0 40.089044-32.692586 72.705905-72.878844 72.705906H303.725466c-40.186258 0-72.878844-32.616862-72.878844-72.705906v-530.07261c0-17.248849-13.984503-31.233352-31.233352-31.233352s-31.233352 13.984503-31.233352 31.233352v530.07261c0 74.535577 60.71378 135.172609 135.345548 135.172609h416.448784c74.632791 0 135.345548-60.637032 135.345548-135.172609v-530.07261c0-17.248849-13.984503-31.233352-31.233352-31.233352z"
                p-id="5754"
              ></path>
              <path
                d="M355.781052 259.279185c-17.248849 0-31.233352 13.984503-31.233351 31.233352v167.494758c0 17.248849 13.985526 31.233352 31.233351 31.233352 17.248849 0 31.233352-13.985526 31.233352-31.233352v-167.494758c0-17.248849-13.984503-31.233352-31.233352-31.233352zM699.352015 458.007295v-167.494758c0-17.248849-13.984503-31.233352-31.233351-31.233352s-31.233352 13.984503-31.233352 31.233352v167.494758c0 17.248849 13.985526 31.233352 31.233352 31.233352s31.233352-13.984503 31.233351-31.233352zM511.949858 489.240647c17.248849 0 31.233352-13.985526 31.233352-31.233352v-167.494758c0-17.248849-13.985526-31.233352-31.233352-31.233352s-31.233352 13.984503-31.233352 31.233352v167.494758c-0.001023 17.248849 13.984503 31.233352 31.233352 31.233352z"
                p-id="5755"
              ></path>
            </svg>
          </div>
        </div>
        <div
          class="search__before__history-content"
          v-if="store.searchHistory.length"
        >
          <div
            v-for="(item, index) in store.searchHistory"
            :key="index"
            @click="history_search(item)"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="search__before__hotSearch" v-if="showHotSearch">
        <div class="search__before__hotSearch-title">热搜榜</div>
        <div class="search__before__hotSearch-line"></div>
        <div
          v-for="(item, index) in data.hotSea"
          :key="index"
          :class="
            Number(index)>2
              ? 'search__before__hotSearch-content black'
              : 'search__before__hotSearch-content red'
          "
          @click="history_search(item?.first)"
        >
          <div>{{ index + 1 }}</div>
          <div>{{ item?.first }}</div>
        </div>
      </div>
      <div class="search__before__result" v-if="!showHotSearch">
        <Result :list="data?.searchResult" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, reactive } from "vue";
import { Search } from "vant";
import { useRouter } from "vue-router";
import { defaultSearch, hotSearch, searchResult } from "../../api/search/index";
import { mainStore } from "../../store/index";
import Result from "./result.vue";

const router = useRouter();
const store = mainStore();

let defaultWord = ref<string>();

let val = ref<any>("");

let showHotSearch = ref(true);

type data_msg = {
  hotSea: {
    first: any,
  };
  searchResult: [{
    name: any,
    al: {
      picUrl: any,
    },
    ar:[
      {name:any}
    ],
  }];
};
let data = reactive<data_msg>({
  hotSea: {
    first:{},
  },
  searchResult: [{
    name: '',
    al: {
      picUrl: '',
    },
    ar:[
      {name:''}
    ],
  }],
});

//life
onBeforeMount(async () => {
  //默认关键词
  let val = await defaultSearch();
  defaultWord.value = val.data.data.showKeyword;
  //热搜列表
  let aa = await hotSearch();
  data.hotSea = aa.data.result.hots;
  console.log(data.hotSea);
});

//method
const onSearch = () => {
  //默认关键词
  if (!val.value) {
    val.value = defaultWord.value;
    console.log(val.value);
  }
  //添加搜索记录
  //获得搜索结果
  history_search(val.value);

  // search_result(val.value);
};

//取消按钮
const onCancel = () => {
  val.value = "";
};

//清除历史记录
const delHistory = () => {
  store.searchHistory.splice(0, store.searchHistory.length);
};

//点击历史记录搜索
const history_search = (clickVal: string) => {
  store.addSearchHistory(clickVal);
  //todo
  search_result(clickVal);
  //同步搜索框的值
  val.value = clickVal;
};

//搜索结果
const search_result = async (value: string) => {
  let aa = await searchResult(value);
  data.searchResult = aa.data.result.songs;
  console.log("结果");

  console.log(aa);
  //跳转进入搜索结果页
  if(showHotSearch.value){
    showHotSearch.value = false;
  }
};
</script>

<style scoped lang="less">
@import "../../assets/CSS/measure";
@import "../../assets/CSS/text";
@import "../../assets/CSS/color";
.search {
  width: 100%;
  &__head {
    display: flex;
    flex-wrap: wrap;
  }
  &__back {
    flex: 1;
    #home_top();
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__search {
    width: 90%;
  }
  &__before {
    width: 100%;
    &__history {
      border-bottom: 1px solid rgb(145, 145, 145);
      &-head {
        display: flex;
        justify-content: space-between;
        margin: 0 8px;
        align-items: center;
        .icon {
          width: 0.32rem;
          height: 0.32rem;
        }
      }
      &-content {
        display: flex;
        flex-wrap: wrap;
        margin: 0 16px;
        div {
          margin: 0.16rem 0.08rem;
          background-color: rgba(145, 145, 145, 0.6);
          color: @default_purple;
          padding: 0.1rem 0.2rem;
          border-radius: @border-radius-big;
        }
      }
    }
    &__hotSearch {
      width: 100%;
      border-radius: 10px;
      background: white;
      box-shadow: 10px 10px 30px #f0efef, -10px -10px 30px #ffffff;
      &-title {
        margin: 0 0.32rem;
        padding: 0.32rem 0;
        font-weight: bolder;
      }
      &-line {
        border-bottom: 1px solid #ccc;
        margin: 0 16px;
      }
      &-content {
        display: flex;
        flex-wrap: wrap;
        padding: 16px;
        justify-content: left;
        align-items: center;
        font-size: 18px;
      }
      .red :first-child {
        color: red;
        margin-right: 0.32rem;
      }
      .black :first-child {
        margin-right: 0.32rem;
      }
    }
  }
}
</style>