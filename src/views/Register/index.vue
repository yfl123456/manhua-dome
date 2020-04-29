<template>
  <section class="page-Register">
    <!-- 内页头部 -->
    <header class="inner-header login-header">
      <div class="inner-left"></div>
      <div class="inner-middle">注册</div>
      <div class="inner-right">我要登录</div>
    </header>
    <!-- 内页头部 end -->

    <!-- logo-banner -->
    <section class="logo-banner">
      <div class="pic">
        <img src="../../assets/images/login-icon.png" alt="" />
      </div>
      <div class="form">
        <p><input type="text" placeholder="请输入手机号" /></p>
        <p><input type="text" placeholder="请输入密码(8-16位数字or英文)" /></p>
        <p>
          <input type="text" placeholder="请输入验证码" /><span
            >获取验证码</span
          >
        </p>
        <button type="button" class="but">注册</button>
      </div>
    </section>
    <!-- logo-banner end -->
  </section>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style lang="scss" scoped>
// 引入 mixin 样式
@import '../../assets/style/mixin.scss';
@import '../../assets/style/commite.scss';

// 内页头部
.inner-header {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .inner-left {
    width: 40px;
    height: 40px;
    background: url('../../assets/images/fanhui.png') no-repeat center center /
      cover;
  }
  .inner-middle {
    font-size: 18px;
    color: #333;
    width: 100%;
    text-align: center;
  }
  .inner-right {
    width: 40px;
    height: 40px;
  }
}
.login-header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  .inner-left {
    background: url('../../assets/images/fanhui02.png') no-repeat center center /
      cover;
  }
  .inner-middle {
    text-indent: 50px;
    color: #fff;
  }
  .inner-right {
    width: 100px;
    line-height: 40px;
    height: 40px;
    color: #fff;
    font-size: 14px;
  }
}

// logo-banner
@include LogoreGister;
</style>
