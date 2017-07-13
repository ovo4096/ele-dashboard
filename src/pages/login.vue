<template>
  <div class="full-screen">
    <div class="center-window">
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <div class="ele-panel">
            <h1>DASHBOARD</h1>
            <el-form label-width="80px">
              <el-form-item label="帐号">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-checkbox>在这台电脑记住我</el-checkbox>
              </el-form-item>
              <el-form-item style="margin-bottom: 0">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button>重置</el-button>
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
    methods: {
      login () {
        this.$router.push({ name: 'home-welcome' })
      }
    }
  }
</script>
