<template>
  <section class="page-Comicend">
    <!-- 内页头部 -->
    <header class="inner-header">
      <div class="inner-left"></div>
      <div class="inner-middle">完结</div>
      <div class="inner-right"></div>
    </header>
    <!-- 内页头部 end -->

    <!-- 完结列表 -->
    <section class="comicend-list">
      <div class="item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/08/22/2084322240_mGV6SQRx.jpg"
            alt=""
          />
        </div>
        <div class="item-text bg-orange"><span>恋爱</span>渡灵Guarding</div>
      </div>
      <div class="item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/08/21/3471934934_kzPR1PMX.jpg"
            alt=""
          />
        </div>
        <div class="item-text bg-yellow"><span>恋爱</span>渡灵Guarding</div>
      </div>
      <div class="item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/08/21/3471934934_C0jKJkU0.jpg"
            alt=""
          />
        </div>
        <div class="item-text bg-pink"><span>恋爱</span>渡灵Guarding</div>
      </div>
      <div class="item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/08/21/3471934934_Sjx51dYB.jpg"
            alt=""
          />
        </div>
        <div class="item-text bg-green"><span>恋爱</span>渡灵Guarding</div>
      </div>
      <div class="item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/02/07/6391218420_5ziHWTki.jpg"
            alt=""
          />
        </div>
        <div class="item-text bg-blue"><span>恋爱</span>渡灵Guarding</div>
      </div>
      <div class="item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/08/21/3471934934_4Bh9oO1w.jpg"
            alt=""
          />
        </div>
        <div class="item-text bg-black"><span>恋爱</span>渡灵Guarding</div>
      </div>
    </section>
    <!-- 完结列表 end -->
  </section>
</template>

<script>
export default {
  name: 'Comicend'
}
</script>

<style lang="scss" scoped>
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

// 完结列表
.comicend-list {
  .item {
    .item-pic {
      border-radius: 10px;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
      }
    }
    .item-text {
      margin: 10px 8px;
      font-size: 16px;
      color: #666;
      span {
        color: #fff;
        border-radius: 2px;
        font-size: 12px;
        width: 30px;
        padding: 3px;
        text-align: center;
        box-sizing: border-box;
        display: inline-block;
        margin-right: 5px;
      }
    }
    .bg-orange span {
      background: #fc7933;
    }
    .bg-yellow span {
      background: #f2c900;
    }
    .bg-pink span {
      background: #f75d79;
    }
    .bg-green span {
      background: #34b6a3;
    }
    .bg-blue span {
      background: #4a90e2;
    }
    .bg-black span {
      background: #535353;
    }
  }
}
</style>
