<template>
  <section class="page-My">
    <!-- 内页头部 -->
    <header class="inner-header my-header">
      <div class="inner-left"></div>
      <div class="inner-middle"></div>
      <div class="inner-right"></div>
    </header>
    <!-- 内页头部 end -->

    <!-- inner-banner -->
    <section class="inner-banner">
      <div class="pic">
        <img src="../../assets/images/pic.png" alt="" />
      </div>
      <div class="text">
        <p>戳我立即登录哦QAQ</p>
        <strong>我的墨币: 0</strong>
      </div>
    </section>
    <!-- inner-banner end -->

    <!-- 个人中心 -->
    <section class="mine-list">
      <div class="item">
        <img src="../../assets/images/my01.png" alt="" />
        <span>墨币充值</span>
        <i></i>
      </div>
      <div class="item">
        <img src="../../assets/images/my02.png" alt="" />
        <span>我的关注</span>
        <i></i>
      </div>
      <div class="item">
        <img src="../../assets/images/my03.png" alt="" />
        <span>浏览历史</span>
        <i></i>
      </div>
      <div class="item">
        <img src="../../assets/images/my04.png" alt="" />
        <span>意见反馈</span>
        <i></i>
      </div>
      <div class="item">
        <img src="../../assets/images/my05.png" alt="" />
        <span>已购作品</span>
        <i></i>
      </div>
      <div class="item">
        <img src="../../assets/images/my05.png" alt="" />
        <span>自动购买管理</span>
        <i></i>
      </div>
    </section>
    <!-- 个人中心 end -->
  </section>
</template>

<script>
export default {
  name: 'My'
}
</script>

<style lang="scss" scoped>
// 引入 mixin 样式
@import '../../assets/style/mixin.scss';

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
    // width: 40px;
    // height: 40px;
  }
}
.my-header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  .inner-left {
    background: url('../../assets/images/fanhui02.png') no-repeat center center /
      cover;
  }
}

// 个人中心
.mine-list {
  margin-top: 10px;
  .item {
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 47px;
    @include border-botter;
    span {
      font-size: 14px;
      color: #666;
      width: 100%;
    }
    img {
      width: 35px;
      height: 35px;
      display: block;
      margin-right: 10px;
    }
    i {
      width: 35px;
      height: 35px;
      background: url('../../assets/images/fanhui03.png') no-repeat center
        center / cover;
    }
  }
}

// inner-banner
.inner-banner {
  overflow: hidden;
  position: relative;
  height: 200px;
  text-align: center;
  background: url('../../assets/images/my-bg.png') no-repeat center top / 100%;
  &::after {
    content: '';
    width: 100%;
    height: 18px;
    display: block;
    background: url('../../assets/images/cover_bottom.png') no-repeat center
      center / 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .pic {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    overflow: hidden;
    margin: 50px auto 0;
    img {
      display: block;
      width: 100%;
    }
  }
  .text {
    font-size: 16px;
    color: #fff;
    line-height: 28px;
    margin-top: 8px;
  }
}
</style>
