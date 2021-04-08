<template>
  <div id="app">
    注：红框内是App1
    <el-button type='primary' @click='clickBtn'>App1 button</el-button>
    <div>这里是app1</div>
    <Header name="app1"/>
    <div>这里是app1</div>
    注：红框内是App1
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header
  },
  methods:{
    clickBtn(){
      this.$message.success('111')
    }
  },
  beforeCreate(){
    console.log('remote before create...')
  },
  created(){
    console.log('remote created...')
  },
  mounted(){
    console.log('remote mounted...')
  }
}

</script>
<style scoped>
#app{
  border:1px solid red;
}
</style>