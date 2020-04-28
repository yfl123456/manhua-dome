<template>
  <div class="page-Ranking">
    <!-- 内页头部 -->
    <header class="inner-header">
      <div class="inner-left"></div>
      <div class="inner-middle">排行榜</div>
      <div class="inner-right"></div>
    </header>
    <!-- 内页头部 end -->

    <!-- 排行榜标题 -->
    <section class="ranking-title">
      <div class="item active">阅读榜</div>
      <div class="item">新作榜</div>
      <div class="item">综合榜</div>
    </section>
    <!-- 排行榜标题 end -->

    <!-- 排行榜列表 -->
    <section class="ranking-list">
      <div class="ranking-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/client/2020/04/20/JqyVe73t.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>水晶鞋</h3>
          <strong>恋爱、总裁</strong>
          <p>翻阅漫画</p>
        </div>
        <div class="item-icon"></div>
      </div>
      <div class="ranking-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/client/2020/04/20/KxyeCH28.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <strong>恋爱、总裁</strong>
          <p>翻阅漫画</p>
        </div>
        <div class="item-icon"></div>
      </div>
      <div class="ranking-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/client/2020/04/20/JqyVe73t.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>水晶鞋</h3>
          <strong>恋爱、总裁</strong>
          <p>翻阅漫画</p>
        </div>
        <div class="item-icon"></div>
      </div>
      <div class="ranking-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/client/2020/04/20/KxyeCH28.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <strong>恋爱、总裁</strong>
          <p>翻阅漫画</p>
        </div>
        <div class="item-icon">
          <span>4</span>
        </div>
      </div>
      <div class="ranking-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/client/2020/04/20/JqyVe73t.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>水晶鞋</h3>
          <strong>恋爱、总裁</strong>
          <p>翻阅漫画</p>
        </div>
        <div class="item-icon">
          <span>5</span>
        </div>
      </div>
      <div class="ranking-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/client/2020/04/20/KxyeCH28.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <strong>恋爱、总裁</strong>
          <p>翻阅漫画</p>
        </div>
        <div class="item-icon">
          <span>6</span>
        </div>
      </div>
      <div class="ranking-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/client/2020/04/20/JqyVe73t.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>水晶鞋</h3>
          <strong>恋爱、总裁</strong>
          <p>翻阅漫画</p>
        </div>
        <div class="item-icon">
          <span>7</span>
        </div>
      </div>
      <div class="ranking-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/client/2020/04/20/KxyeCH28.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <strong>恋爱、总裁</strong>
          <p>翻阅漫画</p>
        </div>
        <div class="item-icon">
          <span>8</span>
        </div>
      </div>
      <div class="ranking-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/client/2020/04/20/JqyVe73t.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>水晶鞋</h3>
          <strong>恋爱、总裁</strong>
          <p>翻阅漫画</p>
        </div>
        <div class="item-icon">
          <span>9</span>
        </div>
      </div>
      <div class="ranking-item">
        <div class="item-pic">
          <img
            src="https://img.manhua.weibo.com/client/2020/04/20/KxyeCH28.jpg"
            alt=""
          />
        </div>
        <div class="item-text">
          <h3>总裁在上</h3>
          <strong>恋爱、总裁</strong>
          <p>翻阅漫画</p>
        </div>
        <div class="item-icon">
          <span>10</span>
        </div>
      </div>
    </section>
    <!-- 排行榜列表 end -->
  </div>
</template>

<script>
export default {
  name: 'Ranking'
}
</script>

<style lang="scss" scoped>
// 引入 mixin 样式
@import '../../assets/style/mixin.scss';

// 排行榜
.page-Ranking {
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

// 排行榜标题
.ranking-title {
  @include border-botter;
  height: 40px;
  line-height: 40px;
  display: flex;
  .item {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #b3b3b3;
    &.active {
      position: relative;
      &::after {
        content: '';
        background-color: #f75d79;
        height: 2px;
        color: #666;
        display: block;
        width: 40px;
        position: absolute;
        left: 50%;
        margin-left: -20px;
        bottom: 0;
      }
    }
  }
}

// 排行榜列表
.ranking-list {
  flex: 1;
  overflow-y: auto;
  margin: 10px 15px 15px;
  .ranking-item {
    border-radius: 8px;
    overflow: hidden;
    margin-top: 15px;
    display: flex;
    align-items: center;
    .item-icon {
      font-size: 16px;
      color: #666;
    }
    &:nth-child(1) .item-icon {
      width: 35px;
      height: 39px;
      background: url('../../assets/images/rank_num1.png') no-repeat center
        center / 100%;
    }
    &:nth-child(2) .item-icon {
      width: 35px;
      height: 39px;
      background: url('../../assets/images/rank_num2.png') no-repeat center
        center / 100%;
    }
    &:nth-child(3) .item-icon {
      width: 35px;
      height: 39px;
      background: url('../../assets/images/rank_num3.png') no-repeat center
        center / 100%;
    }
    &:first-child {
      margin-top: 0;
    }
    .item-pic {
      width: 43%;
      img {
        display: block;
        width: 100%;
      }
    }
    .item-text {
      width: 57%;
      margin-left: 7px;
      h3 {
        font-size: 16px;
      }
      strong {
        margin: 10px 0;
        font-size: 12px;
        display: block;
        background: url('../../assets/images/zxsj-icon.png') no-repeat center
          left / 10%;
        padding-left: 20px;
      }
      p {
        color: #333;
        background: url('../../assets/images/default_avatar02.png') no-repeat
          center left / 10%;
        padding-left: 20px;
        font-size: 12px;
      }
    }
  }
}
</style>
