<template>
  <div class="singer" @click.stop="toSingerMsi">
    <transition>
      <img
        :src="data?.picUrl"
        alt="未找到"
        v-if="show"
      />
      <div class="singer__icon" v-else></div>
    </transition>
    <transition>
        <div v-if="show">
      {{ data?.name }}
    </div>
        <div class="singer__name" v-else>
    </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { defineProps,ref,onBeforeMount } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
type value = {
  data: {
    id?: number;
    name?: string;
    picUrl?: string;
  };
};

const val = defineProps<value>();

const show = ref(false);
onBeforeMount(() => {
    const time = setTimeout(() => {
        show.value = true;
    },500);
});

const toSingerMsi = () => {
router.push({
    name: 'SingerSong',
    params: {id: val.data.id},
})

}

</script>

<style scoped lang="less">
.singer {
  height: 3rem;
  width: 100%;
  border-radius: 8px;
  background: #c5fcef;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px rgba(255, 250, 222, 1);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid rgba(249, 248, 113, 1);
  &__icon {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-bottom: 0.2rem;
    background: rgba(206, 176, 255, 0.7);
  }
  img{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-bottom: 0.2rem;
  }
  &__name{
    width: 1rem;
    height:0.5rem;
    background-color: rgb(224, 224, 224);
  }
}
</style>