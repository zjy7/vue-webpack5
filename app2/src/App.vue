<template>
  <div id="app2">
    <div>这里是app222222</div>
    <App1 name="app2"/>
    <div>这里是app222222</div>
  </div>
</template>
<script>

export default {
  components: {
    App1: () => import('app1/App')
  }
}

</script>
<style scoped>
#app2{
  border:1px solid green;
}
</style>