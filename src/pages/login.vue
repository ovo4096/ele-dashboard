<template>
  <div class="full-screen">
    <div class="center-window">
      <el-row type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="12" :lg="8">
          <div class="ele-panel">
            <h1>DASHBOARD</h1>
            <el-form :model="loginForm" :rules="loginFormRules" ref="loginForm">
              <el-form-item label="帐号" prop="username">
                <el-input type="text" v-model="loginForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="loginForm.remember">在这台电脑记住我</el-checkbox>
              </el-form-item>
              <el-form-item style="margin-bottom: 0">
                <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .full-screen {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .center-window {
      flex-grow: 1;
    }
  }
</style>

<script>
  export default {
    data () {
      let validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'))
        } else {
          callback()
        }
      }

      let validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: '',
          password: '',
          remember: false
        },
        loginFormRules: {
          username: [{validator: validateUsername, trigger: 'blur'}],
          password: [{validator: validatePassword, trigger: 'blur'}]
        }
      }
    },
    mounted () {
      this.loginForm.username = 'admin'
      this.loginForm.password = '123456'
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('authentication/accessToken', {value: '123', remember: this.loginForm.remember})
            this.$router.push({name: 'home-welcome'})
          } else {
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>
