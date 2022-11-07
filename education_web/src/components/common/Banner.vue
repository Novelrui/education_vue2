<template>
  <div>
  </div>
</template>

<script>
// import settings from '../../settings'
export default {
  name: 'BannerView',
  data () {
    return {
      banner_list: []
    }
  },
  created () {
    this.$axios.get(`${this.$settings.HOST}/banner/`, {}).then(response => {
      console.log(response.data)
      this.banner_list = response.data
    }).catch(error => {
      console.log(error.response)
    })
  }
}
</script>
