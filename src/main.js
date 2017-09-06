import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
import VeeValidate from 'vee-validate'

import { TableComponent, TableColumn } from 'vue-table-component'

Vue.config.productionTip = false

Vue.component('table-component', TableComponent)
Vue.component('table-column', TableColumn)

Vue.use(VeeValidate)
Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    title: {
      namespaced: true,
      tab_name: 'List of Users'
    },
    user: {
      id: null,
      fullName: '',
      email: '',
      company: ''
    }
  },
  state: {
    is_sidebar_visible: false
  },
  mutations: {
    toggleSidebar (state, e) {
      document.body.classList.toggle('active-left-place')
      state.is_sidebar_visible = !state.is_sidebar_visible
    },
    setTabName (state, payload) {
      state.tab_name = payload.name
    },
    setUserPageData (state, payload) {
      state.userData = payload
    }
  }
})

new Vue({
  el: '#root',
  store,
  router,
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

if (process.env.NODE_ENV !== 'production') {
  window.store = store
}
