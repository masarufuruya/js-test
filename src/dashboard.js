import $ from 'jquery'
import Clock from './common/Clock'
import Vue from 'vue'

$(function() {
  if ($('body').hasClass('js-dashboard-page')) {
    const clock = new Clock()
    alert(clock.nowTime())
    
    new Vue({
      el: '#app',
      data: {
        text: "Hello World"
      }
    })
  }
});
