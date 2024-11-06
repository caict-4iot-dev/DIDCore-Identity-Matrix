<script lang="ts" setup>
import {reactive, ref} from 'vue'
import type {FormInstance, FormRules} from 'element-plus'


const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{validator: validatePass, trigger: 'blur'}],
  checkPass: [{validator: validatePass2, trigger: 'blur'}],
  age: [{validator: checkAge, trigger: 'blur'}],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  let identity = createIdentity({address: '12312314'});
  console.log('identity', identity);

  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}
</script>

<template>
  <div class="contain">
    <div class="contain-content">
      <div class="contain-content-left">
        <p class="contain-content-left-text">"Digital identity is the passport to the
          virtual world, where convenience and
          connectivity effortlessly intertwine."</p>
      </div>
      <div class="contain-content-right">
        <p class="contain-content-right-title">Provide your data</p>
        <p class="contain-content-right-con">
          <text>Almost there!
            Please fill out any missing data.
            To claim your DIIPv2 Guest
            credential(s). The content will not be stored! It is used to personalize the credentials
          </text>
        </p>
        <div class="contain-content-right-form">
          <el-form
              ref="ruleFormRef"
              :model="ruleForm"
              :rules="rules"
              class="demo-ruleForm"
              label-position="left"
              label-width="auto"
              status-icon
              style="max-width: 327px"
          >
            <el-form-item label="First name" prop="pass">
              <el-input v-model="ruleForm.pass" autocomplete="off" type="password"/>
            </el-form-item>
            <el-form-item label="Last name" prop="checkPass">
              <el-input
                  v-model="ruleForm.checkPass"
                  autocomplete="off"
                  type="password"
              />
            </el-form-item>
            <el-form-item label="Email address" prop="age">
              <el-input v-model.number="ruleForm.age"/>
            </el-form-item>
            <el-form-item style="margin: 0 auto">
              <el-button class="contain-content-right-form-btn" type="primary" @click="submitForm(ruleFormRef)">
                continue
              </el-button>
            </el-form-item>
          </el-form>
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
      background: url('/@/assets/images/login-form-bg.svg') 0% 0% / cover;

      .contain-content-left-text {
        max-width: 735px;
        color: rgb(251, 251, 251);
        margin-top: auto;
        margin-bottom: 120px;
        @include font-style(36px, 500, 54px, 'Poppins, sans-serif')
      }
    }

    .contain-content-right {
      display: flex;
      flex-grow: 1;
      width: 40%;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background-color: rgb(255, 255, 255);

      .contain-content-right-title {
        margin-top: 120px;
        margin-bottom: 12px;
        @include font-style(24px, 600, 29px, 'Inter, sans-serif')
      }

      .contain-content-right-con {
        padding: 0 9px;
        max-width: 313px;
        text-align: center;
        @include font-style(14px, 400, 21px, 'Poppins, sans-serif')
      }

      .contain-content-right-form {
        display: flex;
        flex-direction: column;
        gap: 23px;
        padding-bottom: 48px;
        padding-top: 48px;
        width: 327px;

        .el-form-item {
          display: block;

          :deep(.el-form-item__label) {
            height: 20px;
            @include font-style(10px, 400, 15px, 'Poppins, sans-serif')
          }

          .el-input {
            height: 40px;
          }

          .contain-content-right-form-btn {
            margin-left: 10px;
            margin-top: 58px;
            border-radius: 6px;
            border: 1px solid rgb(251, 251, 251);
            background: linear-gradient(91deg, rgb(114, 118, 247) 0.39%, rgb(124, 64, 232) 100%);
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
}
</style>
