<template>
  <div class="index">
    <!-- 搜索部分 -->
    <div class="search">
      <div class="searchBtn">
        <icon type="search" class="icon_search" size="32rpx"/>
        <span>搜索</span>
      </div>
    </div>
    <!-- 轮播图部分 -->
    <div class="swiperImg">
      <swiper indicator-dots autoplay circular class="swiper_slide">
        <block v-for="(item,index) in imgUrls" :key="index">
          <swiper-item>
            <img :src="item.image_src" class="slide-image" mode="aspectFit">
          </swiper-item>
        </block>
      </swiper>
    </div>
    <!-- 导航部分 -->
    <div class="menu">
      <div class="menu_nav" v-for="(item,index) in menus" :key="index">
        <img :src="item.image_src" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  data: {
    imgUrls: [],
    menus: []
  },
  created() {
    let page = this;
    // wx.request({
    //   url: "https://itjustfun.cn/api/public/v1/home/swiperdata",
    //   success(res) {
    //     // console.log(res)
    //     page.imgUrls = res.data.data;
    //   }
    // }),
      // wx.request({
      //   url: "https://itjustfun.cn/api/public/v1/home/catitems",
      //   // 箭头函数可以修正this的指向
      //   success:(res)=> {
      //     // console.log(this.menus)
      //     this.menus = res.data.data
      //     console.log(res)
      //   }
      // });
      request ("https://itjustfun.cn/api/public/v1/home/swiperdata").then(res=>{
        this.imgUrls = res.data.data;
      })
      request ("https://itjustfun.cn/api/public/v1/home/catitems").then(res=>{
          this.menus = res.data.data
      })
  }
};
</script>

<style lang="scss" scoped>
.search {
  background-color: #ffd161;
  padding: 20rpx 16rpx;
}
.search .searchBtn {
  background-color: #fff;
  height: 60rpx;
  border-radius: 10rpx;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #bbb;
  padding-left: 16rpx;
}
.search .searchBtn span {
  font-size: 24rpx;
  margin-left: 16rpx;
}
.swiper_slide {
  width: 100%;
  height: 340rpx;
}
.swiperImg img {
  width: 100%;
  height: 100%;
}
.menu {
  padding: 24rpx 0 29rpx 0;
  display: flex;
  justify-content: space-around;
}
.menu .menu_nav img {
  width: 128rpx;
  height: 128rpx;
}
</style>