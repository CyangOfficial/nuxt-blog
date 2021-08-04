<template>
  <div class="post-loader-wrap">
    <ContentLoader :width="944" :height="320">
      <rect x="0" y="0" rx="3" ry="3" width="528" height="320" />
      <rect x="750" y="28" rx="3" ry="3" width="160" height="18" />
      <rect x="660" y="70" rx="3" ry="3" width="250" height="20" />
      <rect x="660" y="110" rx="3" ry="3" width="70" height="12" />
      <rect x="750" y="110" rx="3" ry="3" width="70" height="12" />
      <rect x="840" y="110" rx="3" ry="3" width="70" height="12" />
      <rect x="570" y="150" rx="3" ry="3" width="340" height="12" />
      <rect x="570" y="170" rx="3" ry="3" width="340" height="12" />
      <rect x="570" y="190" rx="3" ry="3" width="340" height="12" />
      <rect x="570" y="210" rx="3" ry="3" width="340" height="12" />
      <rect x="570" y="230" rx="3" ry="3" width="340" height="12" />
      <rect x="860" y="280" rx="3" ry="3" width="50" height="12" />
    </ContentLoader>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'
export default {
  components: {
    ContentLoader
  },
  data () {
    return {}
  },
  methods: {},
}
</script>
<style lang='scss'>
.post-loader-wrap {
  box-shadow: rgba(150, 150, 150, 0.5) 0px 1px 20px -8px;
  margin-bottom: 3rem;
}
</style>