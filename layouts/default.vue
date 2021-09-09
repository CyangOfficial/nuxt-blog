<!--  -->
<template>
  <main id="main-container">
    <Header />
    <Sidebar />
    <div
      v-if="!isMobile"
      @click="goTop"
      class="cat-top m-hidden"
      :class="{ down: catDown }"
    ></div>
    <div
      @click="clickMask"
      ref="layer"
      class="mask-layer"
      :class="{ show: sidebarOpened }"
    ></div>
    <nuxt />
    <Footer />
  </main>
</template>

<script>
import { throttle } from '@/utils'
import Sidebar from '@/components/Sidebar'
import { lock, unlock } from 'tua-body-scroll-lock'
export default {
  data () {
    return {
      catDown: false
    };
  },
  components: {
    Sidebar
  },
  computed: {
    isMobile () {
      return this.$store.state.isMobile
    },
    sidebarOpened () {
      return this.$store.state.sidebarOpened
    }
  },
  watch: {
    '$store.state.sidebarOpened' (n, o) {
      if (n) {
        const layer = this.$refs['layer']
        // const sidebar = document.querySelector('#sidebar')
        lock(layer)
      } else {
        unlock()
      }
    },
    $route (n, o) {
      if (this.$store.state.isMobile) {
        this.$store.commit('toggleSidebar', false)
      }
      // console.log(n, o)
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
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    clickMask () {
      this.$store.commit('toggleSidebar')
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
  .mask-layer {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    z-index: 9;
    left: 0;
    top: 0;
    display: none;
    @include mobile() {
      &.show {
        display: block;
      }
    }
  }
}
</style>