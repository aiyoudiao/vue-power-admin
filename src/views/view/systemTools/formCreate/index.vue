<template>
  <div style="height: calc(100vh - 84px);">
    <iframe width="100%" height="100%" :src="'http://127.0.0.1:8889/form-generator/#/'" frameborder="0"></iframe>
    <!-- <iframe width="100%" height="100%" :src="'http://demo.gin-vue-admin.com:8888/form-generator/#/'" frameborder="0"></iframe> -->
    <!-- <iframe width="100%" height="100%" :src="'https://jakhuang.github.io/form-generator/#/'" frameborder="0"></iframe> -->
  </div>
</template>

<script>
var path = process.env.VUE_APP_BASE_API
export default {
    name:"FormGenerator",
    data(){
      return{
        basePath:path
      }
    },
};
</script>

<style lang="scss">
</style>