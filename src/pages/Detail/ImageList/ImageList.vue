<template>
  <!--  <div class="swiper-container">-->
  <!--    <div class="swiper-wrapper">-->
  <!--      <div class="swiper-slide" v-for="(image,index) in skuImageList" :key="index">-->
  <!--        <img :src="image.imgUrl"/>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="swiper-button-next"></div>-->
  <!--    <div class="swiper-button-prev"></div>-->
  <!--  </div>-->

  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner, index) in skuImageList" :key="banner.id">
        <img :class="{active: index===curIndex}" @click="changeCurIndex(index)" :src="banner.imgUrl"/>
      </div>
    </div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>

import Swiper from 'swiper'

export default {
  name: "ImageList",
  data() {
    return {
      curIndex: 0
    }
  },
  props: ['skuImageList'],
  watch: {
    // 监听数据保证轮播图数据
    skuImageList(newValue, oldValue) {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          slidesPerView: 7,
          slidesPerGroup: 1,
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

        })
      })
    }
  },
  methods: {
    changeCurIndex(index) {
      this.curIndex = index
      this.$bus.$emit('changeImg', index)
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;
      cursor: pointer;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      //&:hover {
      //  border: 2px solid #f60;
      //  padding: 1px;
      //}
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;

    &::after {
      font-size: 12px;
    }
  }
  .active {
    border: 2px solid #f60;
    padding: 1px;
  }
}
</style>