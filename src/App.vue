<!-- 

【编程猫的邮箱】

主界面文件与启动电路

编程猫的时光邮箱，据说可以给未来送信~（×）
基于VueJS的明信片生成DEMO（√）

2019‎年‎10‎月‎13‎日，‏‎18:32:56

 -->
 
<template>
  <div id="app" v-title data-title="编程猫的信箱">
    <datebutton></datebutton>
    <postcards></postcards>
  </div>
</template>

<script>
import postcards from './widget/postcards'
import datebutton from './widget/ui_datebutton'

export default {
  name: 'App',
  components: {
    postcards,
    datebutton
  }
}
</script>

<style>
body{
  background-color:#4b9874 ;
  text-align: center;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
