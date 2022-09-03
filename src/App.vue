<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.$router.push('/home');
    this.$store.dispatch('CategoryList');
    this.$store.dispatch('BannerList');
    this.$store.dispatch('FloorList');
  }
}
</script>

<style>
</style>
