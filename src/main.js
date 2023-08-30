/*
 * @Author: yanghaihong 237622938@qq.com
 * @Date: 2023-05-26 20:02:32
 * @LastEditors: yanghaihong 237622938@qq.com
 * @LastEditTime: 2023-05-30 16:33:33
 * @FilePath: \first\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),//渲染函数，将组件App渲染到挂载的元素上
}).$mount('#app')//#app挂载到public主页面上的，打开index.html即可看到（组件App挂载到index.html上）
