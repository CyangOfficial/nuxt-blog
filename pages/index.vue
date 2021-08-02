<template>
  <section id="home-container">
    <HomeBanner />
    <section class="content">
      <section class="notice d-flex align-items-center">
        <svg-icon name="notice"></svg-icon>
        {{ notice }}
      </section>
      <h2 class="block-title d-flex align-items-center justify-content-start"><svg-icon name="hot" />New Release!</h2>
      <section class="top-feature-row">
        <nuxt-link to="/">详情页</nuxt-link>
      </section>
    </section>
  </section>
</template>

<script>
import HomeBanner from '@/components/HomeBanner'
export default {
  name: 'Home',
  components: {
    HomeBanner
  },
  data () {
    return {
      notice: '欢迎来到我的博客~'
    }
  }
}
</script>
<style lang="scss" scope>
#home-container {
  .content {
    max-width: 59rem;
    margin: 0 auto;
    .block-title {
      font-size: 1.3rem;
      margin: 4rem 0 2rem;
      font-weight: 400;
      padding-bottom: 0.6rem;
      border-bottom: 1px dashed rgb(230, 230, 230);
      color: rgb(102, 102, 102);
      .svg-icon {
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 0.8rem;
      }
    }
    .notice {
      padding: 1.25rem;
      border: 1px dashed #e6e6e6;
      color: #969696;
      background: #fbfbfb;
      width: 100%;
      border-radius: 0.6rem;
      margin-top: 3rem;
      .icon-notice {
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 1rem;
      }
    }
  }
}
</style>
