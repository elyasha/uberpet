import Vue from 'vue'

export default () => {
  Vue.filter('currency', function (value) {
     if (!value) return ''
     return `${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)}`
  })
}

