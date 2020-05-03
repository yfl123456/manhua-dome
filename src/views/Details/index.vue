<template>
  <section class="page-Details">
    <!-- 详情头 -->
    <div class="Details">
      <div class="back-btn"></div>
      <div class="nav-middle">
        <span>总裁在上</span>
      </div>
      <div class="guanzhu"></div>
      <div class="share-btn"></div>
    </div>
    <!-- 详情头 end -->

    <!-- 详情内容 -->
    <div class="Details-con">
      <div
        class="Details-banner"
        style="background: url('https://img.manhua.weibo.com/hcover/2019/01/30/5629291694_YdB2XPCy.jpg') no-repeat center center / 100%"
      >
        <div class="comic-name">
          <span>总裁在上</span>
          <span class="pay-icon"></span>
        </div>
        <div class="comic-tags-hot">
          <span>恋爱 | 总裁</span>
          <div class="comic-hot">
            <strong>热度值：</strong>
            <strong>9482.8万</strong>
          </div>
        </div>
      </div>
      <div class="last-time-chapter">
        <span>暂未阅读</span>
        <button>开始阅读</button>
      </div>
      <div class="Details-context">
        <div class="Details-context-title">
          <div class="active">详情</div>
          <div>目录</div>
        </div>
        <div class="Details-item">
          <div class="Details-context-con">
            <h3>简介</h3>
            <p>
              子虚乌有的孩子。将他——莫名的偏执，铁腕而强权的现世帝王；将她——穷困美女漫画家，绝世缺爱单身狗；牢牢捆绑在了爱的温床，虐的心房，情的书房，欲的厨房…………她没有反抗的权利，一切只因他叫做【宫欧】
              iCiyuan漫画 粉丝①群:669229357 iCiyuan漫画
              粉丝③群:572715499（已满） 女频漫画群为①③，小可爱加群只能加1个哦~
            </p>
            <strong
              >作者:
              <img src="../../assets/images/default_avatar.png" alt="" />
              iCiyuan</strong
            >
          </div>
          <div class="Details-context-text">
            <h3>热门评论</h3>
            <div class="item">
              <div class="pic">
                <img
                  src="https://img.manhua.weibo.com/wbcomic/user/2020/202004/202006/1586137929p0X6r20K.jpg"
                  alt=""
                />
              </div>
              <div class="text">
                <h4>欣怡大小姐<span>2020-04-28</span></h4>
                <p>作者应该换一个男主啊，这个男主好狠心呐</p>
              </div>
            </div>
            <div class="item">
              <div class="pic">
                <img
                  src="https://img.manhua.weibo.com/wbcomic/user/2020/202004/202028/1588046197l6fdglsI.jpg"
                  alt=""
                />
              </div>
              <div class="text">
                <h4>欣怡大小姐<span>2020-04-28</span></h4>
                <p>作者应该换一个男主啊，这个男主好狠心呐</p>
                <div class="line">成美琪: <span>对啦！</span></div>
              </div>
            </div>
            <div class="item">
              <div class="pic">
                <img
                  src="https://img.manhua.weibo.com/wbcomic/user/2020/202004/202006/1586137929p0X6r20K.jpg"
                  alt=""
                />
              </div>
              <div class="text">
                <h4>欣怡大小姐<span>2020-04-28</span></h4>
                <p>作者应该换一个男主啊，这个男主好狠心呐</p>
              </div>
            </div>
            <div class="more">更多精彩评论</div>
          </div>
        </div>
        <div class="Details-mulu">
          <div class="chapter-name">
            <p>01 负距离检查</p>
          </div>
          <div class="chapter-name">
            <p>02 负距离检查</p>
          </div>
          <div class="chapter-name">
            <p>03 负距离检查</p>
          </div>
          <div class="chapter-name">
            <p>04 负距离检查</p>
          </div>
          <div class="chapter-name">
            <p>05 负距离检查</p>
          </div>
          <div class="chapter-name">
            <p>06 负距离检查</p>
            <span></span>
          </div>
          <div class="chapter-name">
            <p>07 负距离检查</p>
            <span></span>
          </div>
          <div class="chapter-name">
            <p>08 负距离检查</p>
            <span></span>
          </div>
          <div class="chapter-name">
            <p>09 负距离检查</p>
            <span></span>
          </div>
          <div class="chapter-name">
            <p>10 负距离检查</p>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <!-- 详情内容 end -->
  </section>
</template>

<script>
export default {
  name: 'Details'
}
</script>

<style lang="scss" scoped>
// 详情页
.page-Details {
  height: 100%;
  display: flex;
  flex-direction: column;
}

// 详情头
.Details {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .back-btn {
    width: 55px;
    height: 44px;
    background: url('../../assets/images/fanhui.png') no-repeat center center /
      100%;
  }
  .nav-middle {
    font-size: 16px;
    width: 100%;
    span {
      color: #999;
    }
  }
  .guanzhu {
    width: 70px;
    height: 35px;
    background: url('../../assets/images/guanzhu.png') no-repeat center center /
      100%;
  }
  .share-btn {
    width: 55px;
    height: 44px;
    margin-left: 8px;
    background: url('../../assets/images/fenxiang.png') no-repeat center center /
      100%;
  }
}

// 详情内容
.Details-con {
  flex: 1;
  overflow-y: auto;
  .Details-banner {
    position: relative;
    overflow: hidden;
    &::before {
      content: '';
      background: -webkit-gradient(
        linear,
        0 0,
        0 bottom,
        from(transparent),
        to(rgba(0, 0, 0, 0.6))
      );
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100px;
    }
    &::after {
      content: '';
      width: 100%;
      height: 20px;
      background: url('../../assets/images/cover_bottom.png') no-repeat center
        center / 100%;
      transform: rotateY(180deg);
      display: block;
      left: 0;
      bottom: 0;
      position: absolute;
    }
    height: 200px;
    .comic-name {
      display: flex;
      align-items: center;
      padding: 0 20px;
      margin-top: 120px;
      box-sizing: border-box;
      position: relative;
      z-index: 9;
      span {
        margin-right: 5px;
        font-size: 16px;
        color: #fff;
      }
      .pay-icon {
        display: block;
        width: 30px;
        height: 20px;
        background: url('../../assets/images/fufei.png') no-repeat center center /
          100%;
      }
    }
    .comic-tags-hot {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px 0;
      box-sizing: border-box;
      position: relative;
      z-index: 9;
      span {
        font-size: 14px;
        color: #fff;
      }
      .comic-hot {
        font-size: 14px;
        color: #fff;
        position: relative;
        padding-left: 20px;
        &::after {
          content: '';
          width: 10px;
          height: 10px;
          display: block;
          background: url('../../assets/images/hot.png') no-repeat center center /
            100%;
          position: absolute;
          left: 0;
          top: 2px;
        }
      }
    }
  }
  .last-time-chapter {
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 16px;
      color: #666;
    }
    button {
      width: 70px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      background-color: #f75d79;
      border: none;
      border-radius: 5px;
      color: #fff;
      font-size: 12px;
    }
  }
  .Details-context {
    background-color: #f8f8f8;
    .Details-mulu {
      padding: 10px;
      box-sizing: border-box;
      .chapter-name {
        background-color: #fff;
        margin-top: 5px;
        border-radius: 5px;
        padding: 0 10px;
        height: 50px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          color: #666;
          font-size: 14px;
        }
        span {
          width: 20px;
          height: 20px;
          background: url('../../assets/images/suo.png') no-repeat center center /
            100%;
          display: block;
        }
        &:first-child {
          margin-top: 0;
        }
      }
    }
    .Details-context-title {
      background-color: #fff;
      padding: 0 20px;
      box-sizing: border-box;
      display: flex;
      height: 55px;
      line-height: 55px;
      div {
        width: 70px;
        font-size: 18px;
        color: #999;
        &.active {
          color: #666;
        }
      }
    }
    .Details-context-con {
      background-color: #fff;
      margin: 10px;
      padding: 10px;
      box-sizing: border-box;
      border-radius: 5px;
      h3 {
        font-size: 14px;
        color: #666;
      }
      p {
        color: #666;
        font-size: 14px;
        margin-top: 5px;
        line-height: 25px;
      }
      strong {
        font-size: 14px;
        color: #666;
        margin-top: 10px;
        display: block;
        img {
          margin: 0 5px;
          width: 25px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
    .Details-context-text {
      background-color: #fff;
      padding: 10px;
      box-sizing: border-box;
      h3 {
        font-size: 16px;
        color: #666;
        margin-bottom: 15px;
      }
      .item {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        box-sizing: border-box;
        .pic {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          overflow: hidden;
          img {
            display: block;
            width: 100%;
          }
        }
        .text {
          width: 85%;
          .line {
            color: #666;
            font-size: 14px;
            background-color: #eee;
            margin-top: 10px;
            border-radius: 3px;
            height: 25px;
            line-height: 25px;
            padding: 0 10px;
            box-sizing: border-box;
            span {
              color: #634fa4;
            }
          }
          h4 {
            font-size: 14px;
            color: #666;
            display: flex;
            justify-content: space-between;
            span {
              color: #ccc;
              font-size: 12px;
            }
          }
          p {
            font-size: 14px;
            margin-top: 15px;
            color: #666;
          }
        }
      }
      .more {
        width: 120px;
        height: 35px;
        line-height: 35px;
        border-radius: 50px;
        border: 1px solid #e6e6e6;
        color: #666;
        margin: 0 auto;
        font-size: 14px;
        margin-top: 10px;
        text-align: center;
      }
    }
  }
}
</style>
