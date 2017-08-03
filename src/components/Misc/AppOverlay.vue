<template lang="html">
  <div id="magnet-overlay" v-on:click="toggleSidebarState"></div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    toggleSidebarState (e) {
      this.$store.commit('toggleSidebar', e)
    }
  }
}
</script>

<style lang="css">
#magnet-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: #000;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
}
</style>
