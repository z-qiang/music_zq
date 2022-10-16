<template>
  <div class="singerrank">
    <van-sticky>
    <div class="singerrank__head" >
      <Head :headName="route.meta.name" />
    </div>
    </van-sticky>
    <div class="singerrank__content">
      <div
        class="singerrank__person"
        v-for="(item, index) in value.singer"
        :key="index"
      >
        <SingerImg
          :data="{ id: item.id, name: item.name, picUrl: item.picUrl }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { singerRank } from "../../api/home/index";
import { onBeforeMount, reactive } from "vue";
import SingerImg from "@/components/common/singer_img.vue";
import Head from "@/components/common/head.vue";
import { Sticky } from 'vant';
import { useRoute } from 'vue-router'

const route = useRoute();

const value = reactive({
  singer: [
    {
      id: 1,
      name: "匿名",
      picUrl: "",
    },
  ],
});
onBeforeMount(async () => {
  const res = await singerRank();
  const val = res.data.list.artists.slice(0, 10);
  value.singer = val;
  console.log(value.singer);
});
</script>

<style scoped lang="less">
.singerrank {
    &__content{
//  margin-top: 1.1rem;
   margin-bottom: 1.1rem;
    }
  &__person {

  }
}
</style>