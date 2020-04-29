<template>
  <section class="page-ComicList">
    <!-- 内页头部 -->
    <header class="inner-header">
      <div class="inner-left"></div>
      <div class="inner-middle">人气作品</div>
      <div class="inner-right"></div>
    </header>
    <!-- 内页头部 end -->

    <!-- 作品列表 -->
    <section class="comiclist-con">
      <div class="item">
        <div class="pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2019/11/20/6396974840_AfI7HcBv.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <h3>只对你臣服</h3>
          <p>作者：-冬漫社-</p>
          <p>占了便宜还想跑？</p>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/11/14/6469545963_sPd1SAFk.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <h3>只对你臣服</h3>
          <p>作者：-冬漫社-</p>
          <p>占了便宜还想跑？</p>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2020/01/02/5079128765_cj3Vfvuw.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <h3>只对你臣服</h3>
          <p>作者：-冬漫社-</p>
          <p>占了便宜还想跑？</p>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/12/24/6469545963_KjDiUXtX.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <h3>只对你臣服</h3>
          <p>作者：-冬漫社-</p>
          <p>占了便宜还想跑？</p>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/09/29/2084322240_dgFQRZXS.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <h3>只对你臣服</h3>
          <p>作者：-冬漫社-</p>
          <p>占了便宜还想跑？</p>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2019/11/20/6396974840_AfI7HcBv.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <h3>只对你臣服</h3>
          <p>作者：-冬漫社-</p>
          <p>占了便宜还想跑？</p>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/11/14/6469545963_sPd1SAFk.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <h3>只对你臣服</h3>
          <p>作者：-冬漫社-</p>
          <p>占了便宜还想跑？</p>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2020/01/02/5079128765_cj3Vfvuw.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <h3>只对你臣服</h3>
          <p>作者：-冬漫社-</p>
          <p>占了便宜还想跑？</p>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/12/24/6469545963_KjDiUXtX.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <h3>只对你臣服</h3>
          <p>作者：-冬漫社-</p>
          <p>占了便宜还想跑？</p>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/09/29/2084322240_dgFQRZXS.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <h3>只对你臣服</h3>
          <p>作者：-冬漫社-</p>
          <p>占了便宜还想跑？</p>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/09/26/2042188591_0gyuF1NJ.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <h3>只对你臣服</h3>
          <p>作者：-冬漫社-</p>
          <p>占了便宜还想跑？</p>
        </div>
      </div>
    </section>
    <!-- 作品列表 end -->
  </section>
</template>

<script>
export default {
  name: 'ComicList'
}
</script>

<style lang="scss" scoped>
// 引入 mixin 样式
@import '../../assets/style/mixin.scss';

// 内页头部
.inner-header {
  @include border-botter;
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

// 列表
.page-ComicList {
  display: flex;
  height: 100%;
  flex-direction: column;
}

// 作品列表
.comiclist-con {
  padding: 15px;
  box-sizing: border-box;
  flex: 1;
  overflow-y: auto;
  .item {
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin-top: 15px;
    &:first-child {
      margin-top: 0;
    }
    .pic {
      width: 40%;
      img {
        display: block;
        width: 100%;
      }
    }
    .text {
      width: 57%;
      h3 {
        font-size: 14px;
        color: #333;
      }
      p {
        color: #999;
        font-size: 12px;
        margin: 12px 0;
      }
    }
  }
}
</style>
