<template>
  <div id="home">
    首页
    <BannerView></BannerView>
  </div>
</template>

<script>
import BannerView from './common/Banner.vue'
export default {
  name: 'HomeView',
  data () {
    return {}
  },
  methods: {
  },
  components: {
    BannerView
  }
}
</script>
