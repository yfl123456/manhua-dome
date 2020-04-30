<template>
  <section class="page-Search">
    <!-- 搜索头 -->
    <div class="search-title">
      <form action="">
        <span class="search-icon"></span>
        <input type="text" placeholder="请输入搜索关键字" />
        <span class="search-cion"></span>
      </form>
      <div class="search-but">
        <span>取消</span>
      </div>
    </div>
    <!-- 搜索头 end -->

    <!-- 热门搜索 -->
    <div class="hot-search">
      <div class="hot-search-title">
        <h3>热门搜索</h3>
        <div></div>
      </div>
      <ul>
        <li><a href="">我拿到的恋爱剧本不对劲！？</a></li>
        <li><a href="">悬疑猫——大叔深夜故事集</a></li>
        <li><a href="">黑粉的造星计划</a></li>
        <li><a href="">男友来自异次元</a></li>
        <li><a href="">无常备忘录</a></li>
        <li><a href="">拜托了！学霸</a></li>
        <li><a href="">天劫神卷</a></li>
      </ul>
    </div>
    <!-- 热门搜索 end -->

    <!-- 搜索历史 -->
    <div class="hot-search hosity">
      <div class="hot-search-title">
        <h3>搜索历史</h3>
        <div></div>
      </div>
      <ul>
        <li><a href="">哈哈</a></li>
        <li><a href="">aaaa</a></li>
        <li><a href="">wwww</a></li>
        <li><a href="">gggg</a></li>
        <li><a href="">sdfsdf</a></li>
        <li><a href="">areygfd</a></li>
        <li><a href="">动漫</a></li>
        <li><a href="">11</a></li>
        <li><a href="">222</a></li>
        <li><a href="">3333</a></li>
        <li><a href="">44444</a></li>
        <li><a href="">68536</a></li>
      </ul>
    </div>
    <!-- 搜索历史 end -->
  </section>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss" scoped>
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

// 热门搜索
.hot-search {
  padding: 0 20px;
  ul {
    font-size: 13px;
    margin-top: 5px;
    li {
      background-color: #efefef;
      border-radius: 3px;
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      box-sizing: border-box;
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 10px;
      a {
        color: #666;
        display: block;
        font-size: 13px;
      }
    }
  }
  .hot-search-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: #666;
      font-weight: 700;
      font-size: 18px;
    }
    div {
      width: 37px;
      height: 37px;
      background: url('../../assets/images/shuaxin.png') no-repeat center center /
        100%;
    }
  }
}
.hosity {
  padding: 20px;
  box-sizing: border-box;
  .hot-search-title {
    div {
      background: url('../../assets/images/del.png') no-repeat center center /
        100%;
    }
  }
}
</style>
