<template>
  <section class="page-Daypub">
    <!-- 内页头部 -->
    <header class="inner-header">
      <div class="inner-left"></div>
      <div class="inner-middle">送放表</div>
      <div class="inner-right"></div>
    </header>
    <!-- 内页头部 end -->

    <!-- 送放表日期 -->
    <div class="daypub-title">
      <div class="item">周三</div>
      <div class="item">周四</div>
      <div class="item">周五</div>
      <div class="item active">周六</div>
      <div class="item">周日</div>
      <div class="item">昨天</div>
      <div class="item">今天</div>
    </div>
    <!-- 送放表日期 end -->

    <!-- 送放表内容 -->
    <div class="daypub-con">
      <div class="item">
        <img src="../../assets/images/play-loading.png" alt="" />
        <p>今日的漫画还在绘制中</p>
      </div>
    </div>
    <!-- 送放表内容 end -->
  </section>
</template>

<script>
export default {
  name: 'Daypub'
}
</script>

<style lang="scss" scoped>
// 引入 mixin 样式
@import '../../assets/style/mixin.scss';

// 送放表
.page-Daypub {
  display: flex;
  height: 100%;
  flex-direction: column;
}

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

// 送放表日期
.daypub-title {
  @include border-botter;
  display: flex;
  .item {
    flex: 1;
    font-size: 14px;
    color: #b3b3b3;
    text-align: center;
    height: 35px;
    line-height: 35px;
    position: relative;
    &.active {
      color: #333;
    }
    &.active::after {
      content: '';
      width: 25px;
      height: 2px;
      display: block;
      background-color: #f75d79;
      position: absolute;
      left: 50%;
      margin-left: -12.5px;
      bottom: 0;
    }
  }
}

// 送放表内容
.daypub-con {
  text-align: center;
  flex: 1;
  overflow-y: auto;
  .item {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    img {
      width: 158px;
      height: 158px;
      display: block;
      margin: 0 auto;
    }
    p {
      font-size: 14px;
      color: #999;
      margin-top: 10px;
    }
  }
}
</style>
