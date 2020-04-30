<template>
  <section class="page-SearchList">
    <!-- 搜索头 -->
    <div class="search-title">
      <form action="">
        <span class="search-icon"></span>
        <input type="text" placeholder="请输入搜索关键字" />
        <span class="search-cion"></span>
      </form>
      <div class="search-but">
        <span>搜索</span>
      </div>
    </div>
    <!-- 搜索头 end -->

    <!-- 搜索列表 -->
    <div class="search-list">
      <div class="item">
        <div class="pic">
          <img
            src="https://img.manhua.weibo.com/cover/2018/05/02/3905045671_4fcBR3aJ_b.jpg"
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
            src="https://img.manhua.weibo.com/cover/2018/05/30/3905045671_NdK2K6ui_b.jpg"
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
            src="https://img.manhua.weibo.com/cover/2018/04/17/3905045671_4dcfBKOv_b.jpg"
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
            src="https://img.manhua.weibo.com/cover/2019/07/10/6567946512_Tia6QxPI_b.jpg"
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
            src="https://img.manhua.weibo.com/cover/2018/05/02/3905045671_4fcBR3aJ_b.jpg"
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
            src="https://img.manhua.weibo.com/cover/2018/05/30/3905045671_NdK2K6ui_b.jpg"
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
            src="https://img.manhua.weibo.com/cover/2018/04/17/3905045671_4dcfBKOv_b.jpg"
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
            src="https://img.manhua.weibo.com/cover/2019/07/10/6567946512_Tia6QxPI_b.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <h3>只对你臣服</h3>
          <p>作者：-冬漫社-</p>
          <p>占了便宜还想跑？</p>
        </div>
      </div>
    </div>
    <!-- 搜索列表 end -->
  </section>
</template>

<script>
export default {
  name: 'SearchList'
}
</script>

<style lang="scss" scoped>
// 搜索列表
.page-SearchList {
  height: 100%;
  display: flex;
  flex-direction: column;
}

// 搜索头
.search-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  form {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: #fff;
    padding: 5px 10px;
    box-sizing: border-box;
    border-radius: 5px;
    .search-icon {
      width: 37px;
      height: 37px;
      display: block;
      background: url('../../assets/images/sousuo.png') no-repeat center center /
        100%;
    }
    .search-cion {
      width: 18px;
      height: 18px;
      display: block;
      margin-right: 10px;
      margin-top: 10px;
      background: url('../../assets/images/cuo.png') no-repeat center center /
        100%;
    }
    input {
      width: 200px;
      color: #666;
      outline: none;
      border: none;
      font-size: 13px;
    }
  }
  .search-but {
    font-size: 14px;
    span {
      color: #666;
    }
  }
}

// 搜索列表
.search-list {
  padding: 0 20px 20px;
  overflow-y: auto;
  flex: 1;
  .item {
    justify-content: space-between;
    display: flex;
    margin-top: 15px;
    &:first-child {
      margin-top: 0;
    }
    .pic {
      width: 20%;
      img {
        display: block;
        width: 100%;
      }
    }
    .text {
      width: 77%;
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
