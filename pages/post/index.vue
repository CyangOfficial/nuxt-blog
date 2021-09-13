<!--  -->
<template>
  <div class="post-container">
    <div class="header-bg">
      <picture>
        <!-- <source type="image/webp" srcset="@/assets/images/wallhaven.webp" /> -->
        <img src="@/assets/images/Attack-on-Titan.jpg" alt="啦啦" />
      </picture>
      <!-- <h2 class="head-tit">什么都无法舍弃的人，什么都改变不了！</h2> -->
      <h2 class="head-tit">文 章</h2>
    </div>
    <div class="content d-flex jc-between">
      <div class="post-container">
        <div class="skeleton-wrap" v-if="!postList.length">
          <PostLoader v-for="item in 3" :key="item" />
        </div>
        <div class="post-list" v-if="postList.length">
          <PostItem v-if="postList.length" :postList="postList" />
        </div>
      </div>
      <div class="right-container m-hidden">
        <h3 class="r-head d-flex ai-center">
          <svg-icon name="ranking" />排行榜
        </h3>
        <RankingLoader primaryColor="#" />
        <div class="ranking-list">
          <nuxt-link
            v-for="(item, index) in rankingList"
            :key="index"
            class="item-rank"
            to="post"
          >
            <div class="rank-wrap">
              <div
                class="blur"
                :style="{ backgroundImage: `url(${item.cover})` }"
              ></div>
              <div class="ranking-content d-flex ai-center jc-between">
                <div class="post-intro">
                  <p class="title">{{ item.title }}</p>
                  <p class="link">{{ item.link }}</p>
                </div>
                <div class="pic">
                  <img :src="item.cover" :alt="item.title" class="cover" />
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
        <!-- <h3 class="r-head d-flex ai-center">
          <svg-icon name="tag1" />分 类
        </h3>
        <div class="classification">文章分类</div> -->
        <h3 class="r-head tag d-flex ai-center">
          <svg-icon name="tag1" />标签云
        </h3>
        <div class="tag-list">
          <nuxt-link to="/post?123" v-for="item in tags" :key="item">
            <span class="item-tag">{{ item }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RankingLoader from '@/components/RankingLoader'
export default {
  components: {
    RankingLoader
  },
  data () {
    return {
      postList: [],
      rankingList: [],
      tags: []
    }
  },
  created () {
    this.postHandle()
    this.rankingHandle()
    this.tagHandle()
  },
  methods: {
    fetchPostData () {
      return new Promise((resolve) => {
        setTimeout(() => {
          const postList = []
          for (let i = 0; i < 5; i++) {
            postList.push({
              coverImg: require('@/assets/images/post-cover.jpg'),
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
    fetchRankingList () {
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = new Array(7).fill({
            title: '关于我',
            link: 'https://www.cyang.com',
            cover: require('@/assets/images/post-cover.jpg')
          })
          resolve(data)
        }, 1000)
      })
    },
    fetchTagList () {
      return new Promise(resolve => {
        setTimeout(() => {
          const tags = ['CSS3', 'CSS', 'HTML5', 'GIT', 'javascript', 'Web Api', 'Poem', 'About Me', '正则表达式', '大事记', '汇率计算器', '面试', 'Music', 'Vue', 'ElementUi', 'VantUi', 'Nest.js', '微信小程序']
          resolve(tags)
        }, 1000)
      })
    },
    async postHandle () {
      const list = await this.fetchPostData()
      this.postList = list
    },
    async rankingHandle () {
      const data = await this.fetchRankingList()
      this.rankingList = data
    },
    async tagHandle () {
      const data = await this.fetchTagList()
      this.tags = data
    }
  },
}
</script>
<style lang="scss" scope>
.post-container {
  width: 100%;
  .header-bg {
    height: 30rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;
    @include mobile() {
      height: 17.5rem;
      align-items: flex-start;
      margin: 0;
    }
    picture,
    img {
      width: 100%;
      height: auto;
      margin-bottom: 3rem;
      @include mobile() {
        width: auto;
        height: 100%;
        margin: 0 auto;
      }
    }
    .head-tit {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%);
      text-align: center;
      font-size: 2.4rem;
      color: #eaeaea;
      text-align: right;
      // color: transparent;
      // -webkit-text-fill-color: transparent;
      -webkit-font-smoothing: antialiased;
      // background: linear-gradient(
      //   to left,
      //   rgb(241, 241, 240) 33%,
      //   rgb(252, 239, 232) 73%
      // );
      // background-clip: text;
      @include mobile() {
        font-size: 2rem;
        font-weight: 700;
      }
    }
  }
  .content {
    width: 90rem;
    margin: 3rem auto 0;
    @include mobile() {
      max-width: 100vw;
      padding: 0 1rem;
    }
    .post-container {
      width: 59rem;
      @include mobile() {
        width: auto;
      }
      .post-list {
        width: 100%;
      }
    }
  }
}
.r-head {
  width: 20rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed #e6e6e6;
  @include font_color("post-r-text1");
  @include theme_transition(color);
  margin-bottom: 2rem;
  &.tag {
    margin-top: 4rem;
    margin-bottom: 1rem;
  }
  .svg-icon {
    width: 2rem;
    height: 2rem;
    margin-right: 0.8rem;
  }
}
.right-container {
  width: 27rem;
  // margin-left: 4rem;
  // flex-grow: 1;
  overflow: hidden;
}
.ranking-list {
  .rank-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 0.6rem;
    margin-bottom: 1rem;
    .blur {
      filter: blur(5px);
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      inset: 0;
    }
  }
}
.ranking-content {
  padding: 0.9rem;
  // background-color: rgba(245, 245, 245, 0.8);
  @include background_color("ranking-bg");
  @include theme_transition(background);
  position: relative;
  .post-intro {
    .title {
      font-size: 1.2rem;
      @include font_color("post-r-text1");
      @include theme_transition(color);
    }
    .link {
      display: block;
      margin-top: 0.8rem;
      width: 20rem;
      font-size: 1rem;
      line-height: 1.25;
      @include font_color("ranking-link");
      @include theme_transition(color);
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .cover {
    width: 4rem;
    height: 4rem;
    border-radius: 0.6rem;
    object-fit: cover;
  }
}
.tag-list {
  .item-tag {
    display: inline-block;
    margin-right: 0.6rem;
    margin-bottom: 0.6rem;
    padding: 0px 0.375rem;
    font-size: 0.875rem;
    line-height: 1.6;
    color: rgb(0, 150, 94);
    background-color: rgba(0, 150, 94, 0.1);
    border-radius: 0.1875rem;
    &:hover {
      background-color: rgba(0, 150, 94, 0.2);
    }
  }
}
</style>