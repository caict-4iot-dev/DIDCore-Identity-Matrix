<template>
  <div class="contain">
    <div class="contain_content">
      <div class="contain_content_input">
        <div class="contain_content_input_con">
          <img :src="getAssetURL('login-input.svg')" alt="" srcset="" style="margin-bottom: 58px">
          <p class="contain_content_input_con_title">Manually fill out details</p>
          <p class="contain_content_input_con_con">When you opt to manually enter your data,
            please fill in your first- and lastname, along
            with your email address to get the
            DIIPv2 Guest credential(s)</p>
          <button class="contain_content_input_con_btn" @click="loginLink('form')">Manually</button>
        </div>
      </div>
      <div class="contain_content_scan">
        <div class="contain_content_scan_con">
          <img :src="getAssetURL('login-scan.svg')" alt="" srcset="" style="margin-bottom: 58px">
          <p class="contain_content_scan_con_title">Use your Wallet</p>
          <p class="contain_content_scan_con_con">
            <text>Choose to share your data via your wallet.
              It's a quick method to provide the
              information to get the
              DIIPv2 Guest credential(s)
            </text>
          </p>
          <button class="contain_content_scan_con_btn" @click="loginLink('scan')">With a wallet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {getAssetURL} from '/@/assets/scripts/getAssetsFile'
import router from "/@/router";
import {reactive} from "vue";

let state = reactive({
  loginLinkObj: {
    'form': '/login-form',
    'scan': '/login-scan',
  }
})
// router.push(val.path);
const loginLink = (val: any) => {
  router.push(state.loginLinkObj[val]);
}
</script>


<style lang="scss" scoped>
.contain {
  height: 100%;
  width: 100%;
  background-color: rgb(32, 37, 55);
  display: flex;
  align-items: center;
  justify-content: center;

  .contain_content {
    max-width: 810px;
    place-content: center space-between;
    display: flex;
    flex-direction: row;
    width: 100%;

    .contain_content_input {
      border-radius: 25px;
      max-width: 400px;
      max-height: 700px;
      background: linear-gradient(135deg, rgba(114, 118, 247, 0.5) 0%, rgba(124, 64, 232, 0.5) 100%);
      margin-bottom: 20px;

      .contain_content_input_con {
        margin: 76px 37px 48px;
        align-items: center;
        display: flex;
        flex-direction: column;

        .contain_content_input_con_title {
          color: white;
          text-align: center;
          margin-bottom: 17px;
          font-family: Inter, sans-serif !important;
          font-weight: 600;
          font-size: 24px;
          line-height: 29px;
        }

        .contain_content_input_con_con {
          font-family: Poppins, sans-serif !important;
          max-width: 313px;
          color: white;
          margin-bottom: 123px;
          text-align: center;
          font-size: 14px;
          line-height: 21px;
          font-weight: 400;
        }

        .contain_content_input_con_btn {
          color: white;
          font-size: 16px;
          font-family: Poppins, sans-serif !important;
          font-weight: 400 !important;
          border-radius: 6px;
          background: transparent;
          border: 1px solid rgb(251, 251, 251);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          width: 300px;
          height: 42px;
        }
      }
    }

    .contain_content_scan {
      border-radius: 25px;
      max-width: 400px;
      max-height: 700px;
      background: rgb(251, 251, 251);
      margin-bottom: 20px;

      .contain_content_scan_con {
        margin: 76px 37px 48px;
        align-items: center;
        display: flex;
        flex-direction: column;

        .contain_content_scan_con_title {
          color: black;
          text-align: center;
          margin-bottom: 17px;
          font-family: Inter, sans-serif !important;
          font-weight: 600;
          font-size: 24px;
          line-height: 29px;
        }

        .contain_content_scan_con_con {
          padding: 0 20px;
          font-family: Poppins, sans-serif !important;
          max-width: 313px;
          color: black;
          margin-bottom: 123px;
          text-align: center;
          font-size: 14px;
          line-height: 21px;
          font-weight: 400;
        }

        .contain_content_scan_con_btn {
          color: white;
          font-size: 16px;
          font-family: Poppins, sans-serif !important;
          font-weight: 400 !important;
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

      }
    }

  }

}
</style>
