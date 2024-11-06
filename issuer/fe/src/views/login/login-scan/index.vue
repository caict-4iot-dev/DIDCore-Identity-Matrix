<script lang="ts" setup>
import {defineAsyncComponent, reactive, watchEffect} from "vue";
import router from "/@/router";
import {ElMessage} from "element-plus";
import {createIdentity} from "/@/api/login/login-form";

const svgPage = defineAsyncComponent(() => import('../components/svg.vue'))
const state = reactive({
  isShowSvg: true,
  qrCodeUrl: '', // 二维码的内容
})
const loginFormLink = () => {
  try {
    let bifWallet;
    bifWallet = window.bifWallet;
    window.bifWallet.signAuth({randomCode: "839402"}, async (res: any) => {
      console.log('res', res);
      if (res.code !== 0) {
        ElMessage({
          message: res.message,
          type: 'error',
        })
      } else {
        // let res1 = await createIdentity({data: res.data});
        // console.log('res1', res1);
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        ElMessage({
          message: '验证成功',
          type: 'success',
        })
        router.push('/creDentialList');
      }
    })
  } catch (e) {
    console.log('e', e)
  }
}
watchEffect(() => {
  if (state.qrCodeUrl) {
    state.isShowSvg = true;
  }
})
</script>

<template>
  <div class="contain">
    <div class="contain-content">
      <div class="contain-content-left">
      </div>
      <div class="contain-content-right">
        <div class="contain-content-right-content">
          <p class="contain-content-right-title">Provide details</p>
          <p class="contain-content-right-con">
            In order to issue a credential we need to get
          </p>
          <p class="contain-content-right-con">
            some information from your wallet.
          </p>
          <div class="contain-content-right-QrCodeIsShow">
            <svgPage v-if="state.isShowSvg"></svgPage>
          </div>
          <div>
            <button class="contain-content-right_btn" @click="loginFormLink()">with wallet login</button>
          </div>
          <div class="contain-content-right_bot">
            <p class="contain-content-right_bot_text">Scan this QR code using your wallet's QR</p>
            <p class="contain-content-right_bot_text">scanner to provide information.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '/@/assets/scss/mixins/index.scss';

.contain {
  .contain-content {
    display: flex;
    height: 100vh;
    width: 100vw;

    .contain-content-left {
      display: flex;
      width: 60%;
      height: 100%;
      flex-direction: column;
      align-items: center;
      background: url('/@/assets/images/login-scan-bg.png') 0% 0% / cover;
    }

    .contain-content-right {
      display: flex;
      width: 40%;
      height: 100%;
      background-color: rgb(255, 255, 255);
      align-items: center;
      justify-content: center;

      .contain-content-right-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 60%;
        text-align: center;

        .contain-content-right-title {
          //margin-top: 120px;
          margin-bottom: 20px;
          @include font-style(24px, 600, 29px, 'Inter, sans-serif')
        }

        .contain-content-right-con {
          padding: 0 9px;
          //max-width: 313px;
          text-align: center;
          @include font-style(16px, 400, 21px, 'Poppins, sans-serif')
        }

        .contain-content-right-QrCodeIsShow {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 60%;
          margin-bottom: 20%;
          margin-top: 10%;

          .qr-code {
            width: 200px;
            height: 200px;
          }
        }

        .contain-content-right_btn {
          color: white;
          font-size: 16px;
          font-family: Poppins, sans-serif;
          font-weight: 400;
          border-radius: 6px;
          background: linear-gradient(91deg, rgb(114, 118, 247) 0.39%, rgb(124, 64, 232) 100%);
          border: 1px solid rgb(251, 251, 251);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          width: 300px;
          height: 42px;
        }

        .contain-content-right_bot {
          margin-top: 20px;
          flex-grow: 1;
          @include font-style(16px, 600, 24px, 'Poppins, sans-serif')
        }
      }
    }

  }
}
</style>
