<!--  -->
<template>
  <div id="main-container">
    <Header />
    <div @click="goTop" class="cat-top" :class="{ down: catDown }"></div>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import { throttle } from '@/utils'
export default {
  data () {
    return {
      catDown: false
    };
  },
  mounted () {
    window.addEventListener('scroll', this.scrollHandle)
  },
  methods: {
    scrollHandle: throttle(function () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.catDown = scrollTop > 400
    }, 300),
    goTop () {
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scope>
#main-container {
  overflow-x: hidden;
  .cat-top {
    width: 4.67rem;
    height: 0;
    position: fixed;
    right: 4rem;
    top: 0;
    z-index: 4;
    background: url("~/assets/images/scroll.png") no-repeat center bottom;
    background-size: cover;
    cursor: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/ayuda.cur"),
      auto;
    transition: height 0.5s ease;
    animation: float 2s linear infinite;
    &.down {
      height: 70vh;
    }
  }
}
</style>