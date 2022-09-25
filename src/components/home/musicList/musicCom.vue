<template>
  <div class="musiccomp">
    <div class="musiccomp__left">
      <span>{{data.index + 1}}</span>
      <div class="musiccomp__left-word">
        <div class="musiccomp__left-word-top">{{data.item.name}}</div>
        <div class="musiccomp__left-word-bottom">{{data.item.al.name}}</div>
      </div>
    </div>
    <div class="musiccomp__right">
      <svg
        t="1663662940961"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="7937"
        width="200"
        height="200"
      >
        <path
          d="M885.333333 938.666667H138.666667a53.393333 53.393333 0 0 1-53.333334-53.333334V138.666667a53.393333 53.393333 0 0 1 53.333334-53.333334h746.666666a53.393333 53.393333 0 0 1 53.333334 53.333334v746.666666a53.393333 53.393333 0 0 1-53.333334 53.333334zM138.666667 128a10.666667 10.666667 0 0 0-10.666667 10.666667v746.666666a10.666667 10.666667 0 0 0 10.666667 10.666667h746.666666a10.666667 10.666667 0 0 0 10.666667-10.666667V138.666667a10.666667 10.666667 0 0 0-10.666667-10.666667z m298.666666 597.286667a53.373333 53.373333 0 0 1-53.333333-53.333334V352.066667A53.333333 53.333333 0 0 1 467.373333 308L702 467.933333a53.333333 53.333333 0 0 1 0 88.133334L467.373333 716a53.286667 53.286667 0 0 1-30.04 9.286667z m0.08-383.933334a11.093333 11.093333 0 0 0-5.08 1.28 10.446667 10.446667 0 0 0-5.666666 9.433334v319.866666a10.666667 10.666667 0 0 0 16.666666 8.82l234.666667-159.94a10.666667 10.666667 0 0 0 0-17.626666l-234.666667-159.933334a10.313333 10.313333 0 0 0-5.906666-1.92z"
          fill="#5C5C66"
          p-id="7938"
        ></path>
      </svg>
      <svg
        t="1663663885950"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5906"
        width="200"
        height="200"
      >
        <path
          d="M256 734.101333v64H170.666667v-64h85.333333z m597.333333 0v64H298.666667v-64h554.666666zM256 493.184v64H170.666667v-64h85.333333z m597.333333 0v64H298.666667v-64h554.666666zM256 252.245333v64H170.666667v-64h85.333333z m597.333333 0v64H298.666667v-64h554.666666z"
          p-id="5907"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps,onMounted, onBeforeMount } from 'vue';
type value = {
    item: object,
    index: number | string,
}
type props = {
    data: value,
}
defineProps<props>();

</script>

<style scoped lang="less">
@import '../../../assets/CSS/text';
@import '../../../assets/CSS/measure';
@import '../../../assets/CSS/color';
@icon_size: 0.5rem;
.musiccomp{
    width: 100%;
    height: 1rem;
    // margin-top: 40px;
    // background-color: pink;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    &__left{
        display: flex;
        // justify-content: center;
        align-items: center;
        &>span{
            width: .4rem;
        }
        &-word{
            width: 5rem;
            margin-left: @margin_line;
             &-top{
                #word_oneline();
                font-weight: bolder;
             }
             &-bottom{
                font-size: 0.14rem;
                 #word_oneline();
                 color: @text-color-transparent;
                 margin-top: @margin-top/2;
             }
        }
    }
    &__right{
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left:  @margin_line;
        .icon{
            width: @icon_size;
            height: @icon_size;
        }
    }
}
</style>