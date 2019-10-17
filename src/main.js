// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(
  "%c %c by Weibo❤咚当家族~ %c\n\n 灵感来自——https://shequ.codemao.cn/community/177092",

  'background: url("https://static.codemao.cn/kitten/HJECIMzzH") no-repeat center 50%; \
  background-size:100%; \
  padding: 130px 130px 10px 0px',

  'background: #3ec4ff; \
  padding: 5px; \
  border-radius:5px; \
  color:#fff',

  ''
)

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
