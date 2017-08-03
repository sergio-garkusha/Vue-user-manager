// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
// import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    is_sidebar_visible: false,
    tab_name: 'List of Users'
  },
  mutations: {
    toggleSidebar (state, e) {
      document.body.classList.toggle('active-left-place')
      state.is_sidebar_visible = !state.is_sidebar_visible
    },
    setTabName (state, payload) {
      state.tab_name = payload.name
    }
  }
})

const vm = new Vue({
  el: '#root',
  store,
  // router,
  template: '<App/>',
  components: { App }
})

;(() => {
  document.addEventListener('keyup', toggleSidebarState, false)
  function toggleSidebarState (e) {
    if (e.type === 'keyup' && e.keyCode === 27) {
      if (document.body.classList.length) {
        store.commit('toggleSidebar', e)
      }
    }
  }
})()

window.store = store
