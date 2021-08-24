import Vue from 'vue'

export default () => {
  Vue.filter('minutes', function (value) {
     if (!value) return ''
     return `${value} min`
  })
}
