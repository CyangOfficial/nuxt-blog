<template>
  <div class="post-detail-container">
    <div class="top-bg w-100">
      <div
        class="post-cover h-100"
        :style="{ backgroundImage: `url(${postCover})` }"
      >
        <!-- <img src="@/assets/images/post-top-bg.jpg" alt="啦啦" /> -->
      </div>
      <header class="post-info">
        <h1 class="post-title">基于 SCSS mixin 的 flex gap polyfill</h1>
        <div class="post-meta">
          <span class="create-time">发表于 2021-09-8</span>
          <span class="pv">浏览量 129</span>
          <span class="like">喜欢 12</span>
        </div>
      </header>
    </div>
    <main class="post-wrap">
      <article>
        <article class="post-main">
          <div class="post-body">
            <h1 class="ql-align-center">
              <span
                class="ql-font-serif"
                style="
                  color: rgb(255, 255, 255);
                  background-color: rgb(240, 102, 102);
                "
              >
              </span>
            </h1>
            <h1 class="ql-align-center">
              <span
                class="ql-font-serif"
                style="
                  color: rgb(255, 255, 255);
                  background-color: rgb(240, 102, 102);
                "
                >I am snow example!
              </span>
            </h1>
            <p><br /></p>
            <p>
              <span class="ql-font-serif"
                >W Can a man still be brave if he's afraid? That is the only
                time a man can be brave.
              </span>
            </p>
            <p><br /></p>
            <p>
              <strong class="ql-size-large ql-font-serif"
                >Courage and folly is </strong
              ><strong
                class="ql-size-large ql-font-serif"
                style="color: rgb(230, 0, 0)"
                >always</strong
              ><strong class="ql-size-large ql-font-serif">
                just a fine line.</strong
              >
            </p>
            <p><br /></p>
            <p>
              <u class="ql-font-serif"
                >There is only one God, and his name is Death. And there is only
                one thing we say to Death: "Not today."</u
              >
            </p>
            <p><br /></p>
            <p><em class="ql-font-serif">Fear cuts deeper than swords.</em></p>
            <p><br /></p>
            <p><br /></p>
            <pre
              class="ql-syntax"
              spellcheck="false"
            ><span class="hljs-keyword">const</span> a = <span class="hljs-number">10</span>; <span class="hljs-keyword">const</span> editorOption = { <span class="hljs-attr">highlight</span>: <span class="hljs-function"><span class="hljs-params">text</span> =&gt;</span> hljs.highlightAuto(text).value }; </pre>
            <p><br /></p>
            <p>
              <span class="ql-font-serif"
                >Every flight begins with a fall.</span
              >
            </p>
            <p><br /></p>
            <p>
              <a
                href="https://surmon.me/"
                rel="noopener noreferrer"
                target="_blank"
                class="ql-size-small ql-font-serif"
                style="color: rgb(230, 0, 0)"
                ><u
                  >A ruler who hides behind paid executioners soon forgets what
                  death is.
                </u></a
              >
            </p>
            <p><br /></p>
            <iframe
              class="ql-video ql-align-center"
              frameborder="0"
              allowfullscreen="true"
              src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"
              height="238"
              width="560"
            ></iframe>
            <p><br /></p>
            <p>
              <span class="ql-font-serif"
                >Hear my words, and bear witness to my vow. Night gathers, and
                now my watch begins. It shall not end until my death. I shall
                take no wife, hold no lands, father no children. I shall wear no
                crowns and win no glory. I shall live and die at my post. I am
                the sword in the darkness. I am the watcher on the walls. I am
                the fire that burns against the cold, the light that brings the
                dawn, the horn that wakes the sleepers, the shield that guards
                the realms of men. I pledge my life and honor to the Night’s
                Watch, for this night and all the nights to come.</span
              >
            </p>
            <p><br /></p>
            <p>
              <span class="ql-font-serif"
                >We are born to suffer, to suffer can make us strong.</span
              >
            </p>
            <p><br /></p>
            <p>
              <span class="ql-font-serif"
                >The things we love destroy us every time.</span
              >
            </p>
          </div>
          <section class="post-context d-flex">
            <nuxt-link to="/post/123" class="nuxt-link prev">
              <div class="post-squares">
                <div class="picture">
                  <img :src="ctxCover.prev" alt="" />
                </div>
                <p class="text-info tit1">PREVIOUS POST</p>
                <p class="text-info tit2">为文章添加一个目录</p>
              </div>
            </nuxt-link>
            <nuxt-link to="/post/456" class="nuxt-link next">
              <div class="post-squares">
                <div class="picture">
                  <img :src="ctxCover.next" alt="" />
                </div>
                <p class="text-info tit1">NEXT POST</p>
                <p class="text-info tit2">为文章添加一个目录</p>
              </div>
            </nuxt-link>
          </section>
        </article>
      </article>
    </main>
  </div>
</template>

<script>

export default {
  data () {
    return {
      postCover: require('@/assets/images/post-top-bg.jpg'),
      ctxCover: {
        prev: require('@/assets/images/ctx1.jpg'),
        next: require('@/assets/images/ctx2.jpg')
      }
    }
  },
  mounted () {
    this.listenTopbg()
  },
  methods: {
    listenTopbg () {
      const bgHeight = document.querySelector('.top-bg').clientHeight
      window.addEventListener('scroll', (ev) => {
        console.log(ev)
      })
    }
  },
}
</script>
<style lang='scss' scoped>
.post-detail-container {
  .top-bg {
    height: 25rem;
    overflow: hidden;
    // display: flex;
    // align-items: center;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.3);
    }
    picture,
    img {
      width: 100%;
      height: auto;
      margin-bottom: 3rem;
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
      -webkit-font-smoothing: antialiased;
    }
    .post-cover {
      background-size: cover;
      background-repeat: no-repeat;
    }
    .post-info {
      width: 45%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 4rem;
      color: $white1;
      text-align: left;
      @include mobile() {
        width: 100%;
        padding: 0 1rem;
      }
      .post-title {
        text-shadow: 2px 2px 10px #000;
        @include mobile() {
          font-size: 1.625rem;
        }
      }
      .post-meta {
        margin-top: 1rem;
        span {
          margin-right: 1rem;
          text-shadow: 2px 2px 10px #000;
        }
      }
    }
  }
  .post-wrap {
    margin-top: 3rem;
    @include mobile() {
      margin-top: 2rem;
    }
    .post-main {
      max-width: 58rem;
      margin: 0 auto;
      @include mobile() {
        padding: 0 1rem;
      }
    }
  }
}
.post-context {
  margin-top: 4rem;
  @include mobile() {
    flex-direction: column;
    margin-top: 2rem;
  }
  .nuxt-link {
    flex: 1;
    // @include mobile() {
    //   flex-grow: 1;
    //   flex: none;
    // }
    .post-squares {
      max-height: 9rem;
      padding: 2rem;
      position: relative;
      overflow: hidden;
      &:hover {
        &::before {
          background: rgba(0, 0, 0, 0.4);
        }
      }
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
      }
      @include mobile() {
        padding: 1rem;
      }
      .picture {
        position: absolute;
        inset: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }
      }
      .text-info {
        position: relative;
        z-index: 5;
        color: #fff;
      }
      .tit1 {
        margin-bottom: 1rem;
      }
      .tit2 {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>