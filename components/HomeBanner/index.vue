<!--  -->
<template>
  <div class="banner-container">
    <figure
      class="banner-img d-flex align-items-center justify-content-center"
      :style="{ backgroundImage: 'url(' + coverImg + ')' }"
    >
      <section class="focus-info">
        <h1
          class="center-text glitch is-glitching Ubuntu-font"
          :data-text="bannerTitle"
        >
          {{ bannerTitle }}
        </h1>
        <div class="header-info">
          <p class="sub-title">{{ subTitle }}</p>
          <div class="top-social d-flex justify-content-center">
            <a href="https://github.com/CyangOfficial" target="_blank">
              <svg-icon name="github" />
            </a>
            <a href="#">
              <svg-icon name="wechat" />
            </a>
          </div>
        </div>
      </section>
    </figure>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      title: 'Hi, Cyang!',
      subTitle: '一沙一世界，一花一天堂。君掌盛无边，刹那成永恒。',
      coverImg: 'https://s3-hk.2heng.xin/mstdn/static/blog/cover/webp/d8c29cad010447a75b0eaae4513f3780.jpg.webp'
    };
  },
  computed: {
    bannerTitle () {
      return this.title.toString().toUpperCase()
    }
  },
  methods: {

  },
}
</script>
<style lang='scss' scoped>
.banner-container {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
    background-attachment: fixed;
    background-image: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/dot.gif");
  }
  .banner-img {
    background-position: top center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    z-index: -1;
    width: 100%;
    height: 100vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .focus-info {
    color: #fff;
    position: relative;
    z-index: 4;
    .glitch {
      font-size: 5rem;
      font-weight: bold;
      position: relative;
      mix-blend-mode: lighten;
      text-transform: uppercase;
      user-select: none;
      &::before {
        left: -1px;
        text-shadow: 1px 0 #ff3f1a;
      }
      &::before,
      &::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0);
        clip: rect(0, 0, 0, 0);
      }
      &::after {
        left: 1px;
        text-shadow: -1px 0 #00a7e0;
      }
      &:hover:before {
        text-shadow: 4px 0 #ff3f1a;
        animation: glitch-loop-1 0.8s infinite ease-in-out alternate-reverse;
      }
      &:hover:after {
        text-shadow: -5px 0 #00a7e0;
        animation: glitch-loop-2 0.8s infinite ease-in-out alternate-reverse;
      }
    }
    .header-info {
      background: rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      padding: 1rem;
      .sub-title {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-weight: bold;
        text-align: center;
      }
      .top-social {
        a {
          width: 2rem;
          height: 2rem;
          margin-left: 0.5rem;
          display: block;
          .svg-icon {
            width: 1.4rem;
            height: 1.4rem;
            &.icon-wechat {
              color: #07C160;
            }
            &.icon-github {
              color: #5052d1;
            }
          }
        }
      }
    }
  }
}
</style>