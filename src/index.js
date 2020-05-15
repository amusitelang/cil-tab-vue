import cilTab from './lib/tab/index';

const comment = {
  install: function (Vue) {
    Vue.component(cilTab.name, cilTab)
  }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment)
}

export default comment
