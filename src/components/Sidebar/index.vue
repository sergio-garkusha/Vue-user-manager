<template lang="html">

  <aside id="main-sidebar">
    <div class="header-section">
      <h2>User Manager</h2>
      <h3>with Vue, Vuex &amp; Vue-router</h3>
      <button v-on:click="toggleSidebarState">⨯</button>
    </div>
    <AppFooter/>
  </aside>

</template>

<script>
import { mapState } from 'vuex'
import AppFooter from './AppFooter'

export default {
  methods: {
    toggleSidebarState (e) {
      this.$store.commit('toggleSidebar', e)
    }
  },
  components: {
    AppFooter
  }
}
</script>

<style lang="css">
.active-left-place #main-sidebar {
  left: 0;
  visibility: visible;
  overflow-y: auto;
}

#main-sidebar {
  width: 400px;
  height: 100%;
  position: fixed;
  top: 0;
  left: -400px;
  background: #fff;
  padding: 30px;
  z-index: 999;
  visibility: hidden
}

#main-sidebar .header-section h2, #main-sidebar .header-section h3 {
  font-weight: 100;
  font-style: italic;
  text-align: center;
  color: #ff5e62;
}

#main-sidebar button {
  position: absolute;
  top: 0;
  right: 15px;
  padding: 0;
  border: 0;
  color: #a9a9a9;
  background-color: transparent;
  font-size: 32px;
  cursor: pointer;
  outline: none;
  transition: color .3s linear
}

#main-sidebar button:hover {
  color: #6b6b6b;
}

@media screen and (max-width:600px) {
  #main-sidebar {
    width: calc(100% - 60px)
  }
}
</style>
