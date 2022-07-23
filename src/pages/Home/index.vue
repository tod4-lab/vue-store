<template>
    <div>
        <!-- 包含三级联动加顶部导航栏 -->
        <TypeNav/>
        <!-- 包含轮播图加右侧尚品汇快报 -->
        <ListContainer/>
        <!-- 今日推荐模块 -->
        <TodayRecommend/>
        <!-- 热卖排行模块 -->
        <Rank/>
        <!-- 猜你喜欢模块 -->
        <Like/>
        <!--  -->
        <Floor v-for="(floor, index) in FloorList" :key="floor.id" :floor="floor"/>
    </div>
</template>
<script>
import ListContainer from '@/pages/Home/ListContainer'
import TodayRecommend from '@/pages/Home/TodayRecommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import {mapState} from 'vuex'

export default {
    components: {
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor
    },
    computed: {
      ...mapState({
        FloorList: (state) => {
            return state.home.FloorList
        }
      })
    }
}
</script>
<style lang="">
    
</style>