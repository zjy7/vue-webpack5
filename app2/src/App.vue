<template>
  <div id="app2">
    <div>这里是app222222</div>
    <App1 name="app2" ref='app1' @mounted='afterComponentMounted' />
    <div>这里是app222222</div>
  </div>
</template>
<script>

export default {
  methods:{
    afterComponentMounted(){}
  },
  components: {
    App1: () => import('app1/App')
  },
  created(){
    console.log('host created...')
  },
  mounted(){
    console.log('host mounted...')
    // 说明 执行在这步的时候，还没有进入 远程组件 beforeCreate、created 的生命周期 
    this.$nextTick(()=>{
      // 拿不到
      console.log(this.$refs.app1)
    })
    setTimeout(()=>{
      console.log(1)
      // 能拿到
      console.log(this.$refs.app1)
    },200)
  }
}

</script>
<style scoped>
#app2{
  border:1px solid green;
}
</style>