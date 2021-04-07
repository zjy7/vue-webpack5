<template>
  <div id="app">
    <div>这里是app222222</div>
    <Header name="app2"/>
    <div>这里是app222222</div>
  </div>
</template>
<script>

export default {
  components: {
    Header: () => import('app1/App')
  }
}

</script>
