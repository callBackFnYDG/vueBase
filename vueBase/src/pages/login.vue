<template>
  <div class="login_parent_box">
    <div class="hx_login">
      <ul class="login_box">
        <li class="login_item">
          <Input placeholder="用户名"></Input>
        </li>
        <li class="login_item">
          <Input placeholder="密码"></Input>
        </li>
        <li class="login_item">
          <Input
            placeholder="验证码"
            class="login_code"
          ></Input>
          <img
            :src="codeUrl"
            class="login_img"
            @click.stop="changeCode"
          >
        </li>
        <li class="login_item">
          <Button class="login_btn">登录</Button>
        </li>
      </ul>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import frame from '@/assets/js/project3D.js'
export default {
  name: 'login',
  data() {
    return {
      codeUrl: 'api/Login/code',
      list: [{ body: 'yedegao' }]
    }
  },
  methods: {
    changeCode() {
      let timestamp = new Date().valueOf()
      this.codeUrl = 'api/Login/code?v=' + timestamp
    }
  },
  mounted() {
    this.$group('--------我进入了生命周期mounted--------')
    frame()
    this.$log(this)
    this.$log('执行了一次fram方法')
    this.$groupEnd()
  }
}
</script>

<style>
.login_parent_box {
  width: 100%;
  height: 100%;
}
.hx_login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hx_login .login_box {
  width: 350px;
  height: 500px;
  padding: 150px 25px;
  list-style-type: none;
  transform: translate(100%, 0);
}
.hx_login .login_item {
  margin-bottom: 10px;
  font-size: 0px;
}
.hx_login .login_item input {
  background-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}
.hx_login .login_item button {
  background-color: rgba(21, 154, 231, 0.5);
  color: #ffffff;
}
.hx_login .login_code {
  width: 220px;
  float: left;
}
.hx_login .login_img {
  width: 80px;
  height: 32px;
  cursor: pointer;
}
.hx_login .login_btn {
  width: 100%;
}
#canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10000;
}
</style>
