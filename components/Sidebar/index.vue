<template>
  <aside id="sidebar">
    <div class="overview">
      <div class="auth-info d-flex jc-center ai-center">
        <div class="avatar">
          <img class="w-100 h-100" src="../../assets/images/avatar.jpg" />
        </div>
        <h2 class="name">Cyang Official Blog</h2>
        <h2 class="sub-name">楊的博客 &amp; 前端笔记</h2>
        <p class="social d-flex">
          <a href="">
            <svg-icon name="github" />
          </a>
          <a href="">
            <svg-icon name="github" /> </a
          ><a href="">
            <svg-icon name="github" /> </a
          ><a href="">
            <svg-icon name="github" /> </a
          ><a href="">
            <svg-icon name="github" />
          </a>
        </p>
      </div>
      <nav class="navs d-flex jc-center ai-center">
        <nuxt-link to="/" class="nav-item"><svg-icon name="house" />首页</nuxt-link>
        <nuxt-link to="/" class="nav-item"><svg-icon name="post" />文章</nuxt-link>
        <nuxt-link to="/" class="nav-item"><svg-icon name="bookmarks" />分类</nuxt-link>
        <nuxt-link to="/" class="nav-item"><svg-icon name="about" />关于</nuxt-link>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods: {
  },
}
</script>
<style lang='scss' scoped>
#sidebar {
  width: 60vw;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  .overview {
    width: 100%;
    height: 100%;
    padding: 1rem 0;
    .auth-info {
      flex-direction: column;
      .avatar {
        width: 8rem;
        height: 8rem;
        background-color: #ccc;
        border-radius: 50%;
        overflow: hidden;
      }
      .name,
      .sub-name {
        font-size: 1rem;
        color: rgb(88, 88, 88);
        font-weight: normal;
      }
      .sub-name {
        font-size: 1.1rem;
      }
      .social {
        a {
          width: 1.5rem;
          height: 1.5rem;
          color: #000;
          margin-left: 0.5rem;
        }
      }
    }
    .navs {
      flex-direction: column;
      margin-top: 2rem;
      .nav-item {
        color: rgb(70, 70, 70);
        margin-top: 2rem;
        .svg-icon {
          width: 1.1rem;
          height: 1.1rem;
          margin-right: 0.5rem;
        }
      }
    }
  }
}
</style>