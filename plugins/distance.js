import Vue from 'vue'

export default () => {
  Vue.filter('time', function (value) {
     if (!value) return ''
     return `${value} km`
  })
}
