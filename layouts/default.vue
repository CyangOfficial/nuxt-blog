<!--  -->
<template>
  <div id="main-container">
    <Header />
    <div v-if="!isMobile" @click="goTop" class="cat-top m-hidden" :class="{ down: catDown }"></div>
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
  computed: {
    isMobile () {
      return this.$store.state.isMobile
    }
  },
  mounted () {
    document.documentElement.setAttribute('data-theme', 'default-theme')
    !this.isMobile && window.addEventListener('scroll', this.scrollHandle)
  },
  methods: {
    scrollHandle: throttle(function () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.catDown = scrollTop > 400
    }, 300),
    goTop () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    }
  }
}
</script>

<style lang="scss" scope>
#main-container {
  overflow-x: hidden;
  @include background_color("bg-color");
  @include theme_transition(background);
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
    cursor: pointer;
    &.down {
      height: 70vh;
    }
    
  }
}
</style>