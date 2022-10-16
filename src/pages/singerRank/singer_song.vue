<template>
    <div>
        123
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import {singerHotMusic} from "../../api/home/index";

const route = useRoute();
console.log(route.params.id);

//todo 歌手大热歌曲

</script>

<style scoped lang="less">

</style>