<!--  -->
<template>
  <header id="head-container" :class="{ 'scroll-top': isScrollTop }">
    <div class="white-block"></div>
    <nav class="navBar d-flex justify-content-between align-items-center">
      <a href="" class="yang-logo"></a>
      <div class="nav-content d-flex align-items-center">
        <div class="navs d-flex">
          <nuxt-link class="nav_link" to="/"
            ><i class="nav-icon bi bi-house-door-fill"></i>首页</nuxt-link
          >
          <nuxt-link class="nav_link" to="/article"
            ><i class="nav-icon bi bi-file-earmark-post"></i>文章</nuxt-link
          >
          <nuxt-link class="nav_link" to="/categories"
            ><i class="nav-icon bi bi-bookmarks-fill"></i>分类</nuxt-link
          >
          <nuxt-link class="nav_link" to="/about"
            ><i class="nav-icon bi bi-file-person-fill"></i>关于</nuxt-link
          >
        </div>
        <div class="search-box d-flex align-items-center">
          <button type="submit">
            <i class="bi bi-search"></i>
          </button>
          <input
            autocomplete="off"
            autocapitalize="off"
            autocorrect="off"
            type="search"
            placeholder="搜点什么呢？"
          />
        </div>
        <button
          class="theme-button"
          :class="{ 'light-theme': defaultTheme, 'dark-theme': !defaultTheme }"
          @click="changeTheme"
        >
          <svg-icon name="sun" class="svg-theme"></svg-icon>
          <svg-icon name="moon" class="svg-theme"></svg-icon>
        </button>
      </div>
    </nav>
    <div class="search-panel"></div>
  </header>
</template>

<script>
import { throttle } from '@/utils'
export default {
  name: 'Header',
  data () {
    return {
      isScrollTop: true,
      defaultTheme: true
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        // console.log(window)
        // if (route.fullPath === '/') {
        //   this.isScrollTop = true
        //   document.body.addEventListener('scroll', this.scrollHandle)
        // } else {
        //   this.isScrollTop = false
        //   document.body.removeEventListener('scroll', this.scrollHandle)
        // }
      },
      immediate: true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollHandle)
  },
  methods: {
    scrollHandle: throttle(function () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.isScrollTop = scrollTop === 0
      // if (scrollTop > 300) { }
    }, 200),
    changeTheme () {
      this.defaultTheme = !this.defaultTheme
    }
  }
}
</script>
<style lang="scss">
#head-container {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: #000 0 1px 40px -8px;
  padding: 0 2.4rem;
  z-index: 5;
  transition: all 0.5s ease;
  opacity: 1;
  .white-block {
    background: rgba(255, 255, 255, 0.95);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  // &.scroll-top {
  //   opacity: 0;
  // }
  &:hover {
    opacity: 1;
  }
  .navBar {
    .yang-logo {
      display: block;
      height: 50px;
      width: 230px;
      // background: #000;
      background: url("~/assets/images/blog-logo.png") no-repeat center / cover;
    }
    .navs {
      height: 100%;
      margin-right: 2rem;
      .nav_link {
        display: block;
        color: #6e6e6e;
        text-decoration: none;
        font-size: 1.1rem;
        margin-left: 1.6rem;
        height: 4.5rem;
        line-height: 4.5rem;
        position: relative;
        transition: color 0.3s;
        .nav-icon {
          margin-right: 0.4rem;
        }
        &::after {
          content: "";
          width: 0;
          height: 0.3rem;
          background: #ffaa0d;
          position: absolute;
          bottom: 0;
          left: 0;
          transition: all 0.3s;
        }
        &:hover {
          color: #ffaa0d;
          .nav-icon {
            display: inline-block;
            animation: shaking 5s ease infinite;
          }
          &::after {
            width: 100%;
          }
        }
      }
    }
    .search-box {
      font-size: 1.5rem;
      border: 1px solid #8f8484;
      border-radius: 0.3rem;
      padding: 0 0.4rem;
      height: 2.3rem;
      margin-right: 2rem;
      button {
        border: none;
        background: none;
        display: inline-block;
        font-size: 1rem;
        padding: 0;
        margin-right: 0.5rem;
      }
      input {
        border: none;
        outline: none;
        padding: 0;
        height: 1rem;
        background: transparent;
        color: #666;
        font-size: 0.9rem;
        width: 14rem;
        &::placeholder {
          font-size: 0.9rem;
          line-height: 1.5rem;
          color: #8f8484;
        }
      }
    }
    .theme-button {
      width: 8rem;
      height: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: none;
      border-radius: 1.5rem;
      transition: all 0.5s;
      overflow: hidden;
      &.light-theme {
        background: linear-gradient(rgb(57, 89, 138), rgb(121, 215, 237));
        .icon-moon {
          transform: translateY(-5rem);
        }
        .icon-sun {
          transform: translateY(0);
        }
      }
      &.dark-theme {
        background: linear-gradient(rgb(9, 18, 54), rgb(30, 33, 93));
        .icon-sun {
          transform: translateY(-5rem);
        }
        .icon-moon {
          transform: translateY(0);
        }
      }
      .svg-theme {
        width: 2rem;
        transform: translateY(0);
        transition: all 0.5s;
      }
    }
  }
  .search-panel {
    width: 28.6rem;
    height: calc(100vh - 4.5rem);
    position: fixed;
    right: -30rem;
    top: 4.5rem;
    background: #fff;
  }
}
</style>