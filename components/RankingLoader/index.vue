<template>
  <div class="ranking-loader-wrap">
    <client-only>
      <ContentLoader
        :width="500"
        :height="96"
        :primaryColor="primaryColor"
        :secondaryColor="secondaryColor"
      >
        <rect x="0" y="0" rx="6" ry="6" width="500" height="96" />
        <rect x="30" y="30" rx="0" ry="0" width="75" height="21" />
        <!-- <rect x="750" y="28" rx="3" ry="3" width="160" height="18" /> -->
      </ContentLoader>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isMobile () {
      return this.$store.state.isMobile
    },
    primaryColor () {
      return this.$store.state.blogTheme === 'default-theme' ? '#f3f3f3' : '#2A2C2D'
    },
    secondaryColor () {
      return this.$store.state.blogTheme === 'default-theme' ? '#ecebeb' : '#3e4041'
    }
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>