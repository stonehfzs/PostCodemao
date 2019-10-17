<!-- 

【编程猫的邮箱】

明信片主要部分

编程猫的时光邮箱，据说可以给未来送信~（×）
基于VueJS的明信片生成DEMO（√）

2019年10月16日 18:30

 -->

<template>
  <div class="postcards" :style="'width:' + curWindowH + 'px;'">
	  <img :src="stampURL" >
      测试大小
  </div>
</template>

<style scoped>
.postcards{
  background-color: #fff ;
}
</style>

<script>
	export default{
    name:"postcards",
		data () {
			return {
				//源码明信片默认大小
				curWindowH: document.documentElement.clientHeight,
				curWindowW: document.documentElement.clientWidth,
				//明信片内容样式
				postContent: "测试",
				postTextSize: 20,
				postTextColor: "#000",
				postBold: false,
				//明信片默认邮票
				stampURL: "https://static.codemao.cn/whale/Skcuc_dQ4?imageMogr2/thumbnail/!200x200r/blur/1x0/quality/100|imageslim"
			}
		},
		watch: {
			curWindowH (v) {
				//监控浏览器高度变化
				if(!this.timer) {
					this.curWindowH = v
					this.timer = true
					let that = this
					setTimeout(function (){
						that.timer = false
					},400)
				}
			},
			curWindowW (v) {
				//同样的，高度变化
				if(!this.timer) {
					this.curWindowW = v
					this.timer = true
					let that = this
					setTimeout(function (){
						that.timer = false
					},400)
				}
			}
		},
		mounted () {
			this.getWindowSiz()
		},
		methods :{
			getWindowSize () {
				//取浏览器窗口大小
				const that = this
				window.onresize = () => {
					return (() => {
						window.curWindowH = document.documentElement.clientHeight
						that.curWindowH = window.curWindowH
						window.curWindowW = document.documentElement.clientWidth
						that.curWindowW = window.curWindowW
					})()
				}
			}
		}
  }
</script>