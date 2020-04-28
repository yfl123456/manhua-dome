<template>
  <section class="page-Classify">
    <!-- 内页头部 -->
    <header class="inner-header">
      <div class="inner-left"></div>
      <div class="inner-middle">分类</div>
      <div class="inner-right"></div>
    </header>
    <!-- 内页头部 end -->

    <!-- 分类标题 -->
    <section class="classify-title">
      <div class="item">
        <div class="active">全部</div>
        <div>剧情</div>
        <div>恋爱</div>
        <div>搞笑</div>
        <div>日常</div>
        <div>总裁</div>
        <div>奇幻</div>
        <div>少年</div>
        <div>动作</div>
      </div>
      <div class="item">
        <div class="active">全部</div>
        <div>完结</div>
        <div>连载</div>
      </div>
      <div class="item">
        <div class="active">全部</div>
        <div>免费</div>
        <div>付费</div>
      </div>
    </section>
    <!-- 分类标题 end -->

    <!-- 分类列表 -->
    <section class="classify-list">
      <div class="classify-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/client/2020/04/20/ymrbyNpY.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <p>她，没有反抗的权利</p>
        </div>
      </div>
      <div class="classify-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/09/07/2660188431_YdWpZOAj.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <p>她，没有反抗的权利</p>
        </div>
      </div>
      <div class="classify-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2019/01/15/1420789885_WHx8h5W5.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <p>她，没有反抗的权利</p>
        </div>
      </div>
      <div class="classify-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/11/07/1788083155_I5646sFN.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <p>她，没有反抗的权利</p>
        </div>
      </div>
      <div class="classify-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/client/2020/04/20/ymrbyNpY.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <p>她，没有反抗的权利</p>
        </div>
      </div>
      <div class="classify-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/09/07/2660188431_YdWpZOAj.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <p>她，没有反抗的权利</p>
        </div>
      </div>
      <div class="classify-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2019/01/15/1420789885_WHx8h5W5.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <p>她，没有反抗的权利</p>
        </div>
      </div>
      <div class="classify-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/client/2020/04/20/ymrbyNpY.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <p>她，没有反抗的权利</p>
        </div>
      </div>
      <div class="classify-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/09/07/2660188431_YdWpZOAj.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <p>她，没有反抗的权利</p>
        </div>
      </div>
      <div class="classify-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2019/01/15/1420789885_WHx8h5W5.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <p>她，没有反抗的权利</p>
        </div>
      </div>
      <div class="classify-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/hcover/2018/11/07/1788083155_I5646sFN.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <p>她，没有反抗的权利</p>
        </div>
      </div>
      <div class="classify-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/client/2020/04/20/ymrbyNpY.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <p>她，没有反抗的权利</p>
        </div>
      </div>
    </section>
    <!-- 分类列表 end -->
  </section>
</template>

<script>
export default {
  name: 'Classify'
}
</script>

<style lang="scss" scoped>
// 分类
.page-Classify {
  height: 100%;
  display: flex;
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

// 分类标题
.classify-title {
  padding: 0 10px;
  .item {
    overflow: hidden;
    margin-bottom: 5px;
    div {
      float: left;
      color: #fff;
      font-size: 14px;
      color: #ccc;
      text-align: center;
      border-radius: 3px;
      width: 14.2%;
      height: 30px;
      line-height: 30px;
      &.active {
        background-color: #f75d79;
        color: #fff;
      }
    }
  }
}

// 分类列表
.classify-list {
  margin: 8px 10px 10px;
  flex: 1;
  overflow-y: auto;
  .classify-item {
    width: 49%;
    margin-left: 2%;
    float: left;
    &:nth-child(2n + 1) {
      margin-left: 0;
    }
    .item-pic {
      border-radius: 8px;
      overflow: hidden;
      img {
        width: 100%;
        display: block;
      }
    }
    .item-text {
      margin-top: 10px;
      line-height: 18px;
      h3 {
        font-size: 14px;
        color: #666;
      }
      p {
        color: #999;
        font-size: 12px;
      }
    }
  }
}
</style>
