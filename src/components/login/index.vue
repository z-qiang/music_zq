<template>
  <div>
    <div class="login">
      <div class="login__head">
        <van-nav-bar left-text="返回" left-arrow @click-left="router.go(-1)" />
      </div>
      <div class="login__form">
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field
              v-model="username"
              name="用户名"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
          </van-cell-group>
          <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit">
              提交
            </van-button>
            <VanDialog />
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { mainStore } from "../../store/index";
import { onUnmounted, ref } from "vue";
import { NavBar, Form, Field, CellGroup, Dialog } from "vant";
import "vant/es/dialog/style";

const VanDialog = Dialog.Component;

const route = useRoute();
const router = useRouter();
const store = mainStore();
route.meta.bottomMusic = false;
store.bMusic = false;

const username = ref("");
const password = ref("");
const onSubmit = (values: any) => {
  console.log("submit", values);
  if (username.value!='admin' || password.value!='123456') {
    Dialog.alert({
      message: "信息错误！(u：admin，p：123456)",
    }).then(() => {
      // on close
    });
  }else{
    router.push('/');
    sessionStorage.setItem('isLogin','true');
  }
};

onUnmounted(() => {
  store.bMusic = true;
});
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  position: relative;
  &__form {
    margin: 0 0.16rem;
    margin-top: 3rem;
    padding: 0.16rem 0;
    border-radius: 0.16rem;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }
}
</style>