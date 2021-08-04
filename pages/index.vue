<template>
  <section id="home-container">
    <HomeBanner />
    <section class="content">
      <section class="notice d-flex align-items-center">
        <svg-icon name="notice"></svg-icon>
        {{ notice }}
      </section>
      <h2 class="block-title d-flex align-items-center justify-content-start">
        <svg-icon name="hot" />Hot Section!
      </h2>
      <section class="new-block-section d-flex justify-content-between">
        <a
          href="https://github.com/CyangOfficial/nuxt-blog"
          class="item-block"
          target="_blank"
          v-for="item in newReleaseData"
          :key="item.title"
        >
          <div
            class="block-wrap"
            :data-title="item.title"
            :data-intro="item.intro"
          >
            <img class="img" :src="item.img" :alt="item.title" />
            <div class="mask"></div>
          </div>
        </a>
      </section>
      <h2 class="block-title d-flex align-items-center justify-content-start">
        <svg-icon name="new" />Latest Posts!
      </h2>
      <div class="skeleton-wrap" v-if="!postList.length">
        <PostLoader v-for="item in 3" :key="item" />
      </div>
      <div class="latest-posts" v-if="postList.length">
        <section
          class="item-post d-flex"
          v-for="(item, index) in postList"
          :key="index"
        >
          <nuxt-link to="/article" class="post-cover">
            <img :src="item.coverImg" :alt="item.title" />
          </nuxt-link>
          <div class="post-wrap">
            <p class="create-time">
              <!--<svg-icon name="time"></svg-icon>--><i class="bi-alarm"></i
              >发布于：{{ item.createAt }}
            </p>
            <nuxt-link to="/article" class="post-title">
              <h2>{{ item.title }}</h2>
            </nuxt-link>
            <div class="post-meta">
              <span class="item-meta"
                ><i class="bi bi-eye"></i>{{ item.pv }}</span
              >
              <span class="item-meta"
                ><i class="bi bi-heart"></i>{{ item.likes }}</span
              >
              <span class="item-meta">
                <nuxt-link to="/"
                  ><i class="bi bi-tag"></i>{{ item.tag }}</nuxt-link
                >
              </span>
            </div>
            <p class="post-intro">{{ item.intro }}</p>
            <nuxt-link to="/article" class="post-menu">
              <svg-icon name="menu"></svg-icon>
            </nuxt-link>
          </div>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
import HomeBanner from '@/components/HomeBanner'
import PostLoader from '@/components/PostLoader'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    PostLoader
  },
  data () {
    return {
      notice: '欢迎来到我的博客~',
      newReleaseData: Object.freeze([
        {
          href: 'https://github.com/CyangOfficial/nuxt-blog',
          title: 'Cyang Nuxt Blog',
          intro: '基于 Nuxt 实现的 SSR 博客',
          img: require('@/assets/images/blog-section-cover.jpg')
        },
        {
          href: 'https://github.com/CyangOfficial/nuxt-blog',
          title: 'Admin Manager',
          intro: 'vue3.0 elementui-plus',
          img: require('@/assets/images/admin-1.jpg')
        },
        {
          href: 'https://github.com/CyangOfficial/nuxt-blog',
          title: 'Nest Server',
          intro: '基于 express 的 Nest 框架',
          img: require('@/assets/images/coding.jpg')
        }
      ]),
      postList: []
    }
  },
  async asyncData ({ params }) {
    // console.log(params)
    // const postList = await new Promise((resolve) => {
    //   let postList = []
    //   setTimeout(() => {
    //     for (let i = 0; i < 5; i++) {
    //       postList.push({
    //         coverImg: 'https://sakura.2heng.xin/wp-content/uploads/2018/05/r63888719_by__LM7_-1024x534.jpg',
    //         createAt: '2021-08-02',
    //         title: 'WebP 全方位能力检测',
    //         pv: 100,
    //         likes: 15,
    //         tag: 'javascript',
    //         intro: `一直以来，习惯在 flex 布局中使用 gap
    //                   这个属性设置间距，一直以来也都是在最新的 Chrome
    //                   上调试，所以从来没有想在 flex gap 在其他`
    //       })
    //     }
    //     resolve(postList)
    //   }, 1000)
    // })
    // return { postList }
  },
  created () {
    this.postHandle()
  },
  methods: {
    fetchPostData () {
      return new Promise((resolve) => {
        setTimeout(() => {
          const postList = []
          for (let i = 0; i < 5; i++) {
            postList.push({
              coverImg: 'https://sakura.2heng.xin/wp-content/uploads/2018/05/r63888719_by__LM7_-1024x534.jpg',
              createAt: '2021-08-02',
              title: 'WebP 全方位能力检测',
              pv: 100,
              likes: 15,
              tag: 'javascript',
              intro: `一直以来，习惯在 flex 布局中使用 gap
                      这个属性设置间距，一直以来也都是在最新的 Chrome
                      上调试，所以从来没有想在 flex gap 在其他`
            })
          }
          resolve(postList)
        }, 1500)
      })
    },
    async postHandle () {
      const list = await this.fetchPostData()
      this.postList = list
    }
  }
}
</script>
<style lang="scss" scope>
#home-container {
  .content {
    max-width: 59rem;
    margin: 0 auto;
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
    .new-block-section {
      .item-block {
        width: 32%;
        border-radius: 0.625rem;
        overflow: hidden;
        .block-wrap {
          height: 11rem;
          position: relative;
          color: #fff;
          text-align: center;
          &::before {
            content: attr(data-title);
            width: 100%;
            line-height: 2.8rem;
            font-size: 1.2rem;
            background-color: black;
            position: absolute;
            left: 19rem;
            top: 1.4rem;
            z-index: 2;
            transition: all 0.4s linear;
          }
          &::after {
            content: attr(data-intro);
            width: 100%;
            font-style: italic;
            font-size: 0.9rem;
            color: #bbbbbb;
            position: absolute;
            right: 19rem;
            bottom: 1.5rem;
            z-index: 2;
            transition: all 0.4s linear;
          }
          &:hover {
            .mask {
              background-color: rgba(0, 0, 0, 0.5);
            }
            &::before {
              left: 0;
            }
            &::after {
              right: 0;
            }
          }
          .img {
            width: 100%;
            min-height: 100%;
          }
          .mask {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background-color: rgba(0, 0, 0, 0);
            z-index: 1;
            transition: all 0.4s linear;
          }
        }
      }
    }
    .skeleton-wrap {
      .post-loader-wrap:nth-of-type(2n) {
        transform: rotateY(180deg);
      }
    }

    .latest-posts {
      .item-post {
        width: 100%;
        height: 20rem;
        margin-bottom: 3rem;
        color: #969696;
        background-color: #fff;
        box-shadow: rgba(150, 150, 150, 0.5) 0px 1px 20px -8px;
        overflow: hidden;
        border-radius: 0.5rem;
        text-align: right;
        &:nth-of-type(2n) {
          flex-direction: row-reverse;
          text-align: left;
        }
        .post-cover {
          width: 33rem;
          overflow: hidden;
          &:hover {
            img {
              transform: scale(1.05);
            }
          }
          img {
            width: 100%;
            min-height: 100%;
            transition: all 0.5s ease;
          }
        }
        .post-wrap {
          width: 26rem;
          padding: 1.8rem 2.4rem;
          a {
            transition: all 0.2s ease;
          }
          a:hover {
            color: #dd3333 !important;
          }
          .create-time {
            font-size: 0.75rem;
            i {
              font-size: 0.875rem;
              margin-right: 0.5rem;
            }
          }
          .post-title {
            text-decoration: none;
            color: rgb(80, 78, 78);
            h2 {
              font-size: 1.3rem;
              line-height: 1.6rem;
              font-weight: 700;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .post-meta {
            .item-meta {
              font-size: 0.75rem;
              margin-right: 1.2rem;
              line-height: 1.2rem;
              color: #888;
              a {
                color: #888;
              }
              i {
                margin-right: 0.3rem;
                vertical-align: middle;
                font-size: 0.875rem;
              }
            }
          }
          .post-intro {
            min-height: 8rem;
            margin: 1.1rem 0 0.5rem;
            font-size: 1.1rem;
            line-height: 1.6rem;
            color: rgb(80, 78, 78);
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            overflow: hidden;
          }
          .post-menu {
            color: #000;
          }
        }
      }
    }
  }
}
</style>
