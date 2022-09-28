<template>
  <div class="user">
    <div class="user__head">
      <div class="user__head__img"></div>
      <div class="user__head__name">无愧这分合_Z</div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
@import "../../assets/CSS/color";
.user {
  &__head {
    width: 100%;
    height: 2rem;
    background-color: white;
    margin-top: 2rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    border-radius: 0.2rem;
    box-shadow: 5px 10px 30px #bebebe;
    &__img {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: @default_purple;
      margin-top: -0.75rem;
    }
    &__name {
      padding: 0.32rem;
    }
  }
}
</style>