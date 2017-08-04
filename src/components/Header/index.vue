<template>
  <header class="app-main-header">

    <h1 class="column" title="Vue.js based User Manager">
      <a id="app-main-nav-button" href="#" v-on:click.prevent="toggleSidebarState"></a>
      <Logo/>
      <span>User Manager</span>
    </h1>

    <div class="column">
      <div class="by-cu7ious">
        <a target="_blank" href="//cu7io.us/">
          <AuthorLogo color="#fff"/>
        </a>
      </div>
    </div>

    <div class="column">
      <a class="github-badge" target="_blank" title="More on GitHub" href="//github.com/Cu7ious/">
        <GithubIcon/>
      </a>
    </div>

  </header>
</template>

<script>
import Logo from '../Icons/Logo'
import AuthorLogo from '../Icons/AuthorLogo'
import GithubIcon from '../Icons/GithubIcon'

export default {
  methods: {
    toggleSidebarState (e) {
      this.$store.commit('toggleSidebar', e)
    }
  },
  components: {
    Logo, AuthorLogo, GithubIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-main-header {
  position: fixed;
  z-index: 10;
  display: flex;
  width: 100%;
  height: 55px;
  top: 0;
  background: linear-gradient(to right, #ff5e62, #f96);
  border-bottom: 4px solid #ff5e62;
  box-shadow: 0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28);
}

.app-main-header h1 {
  margin: 0;
}

.app-main-header h1 svg {
  margin: -50px 0 0 53px;
  display: block;
  height: 30px;
}

.app-main-header h1 span {
  font-weight: 100;
  font-style: italic;
  position: absolute;
  top: 14px;
  color: #fff;
  font-size: 24px;
  left: 95px;
}

.app-main-header #app-main-nav-button {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQAAAAB/ecQqAAAAAnRSTlMAAHaTzTgAAAAWSURBVHgBY6AFYP4PBAewUoPbFMoBAE11OPW6yVcZAAAAAElFTkSuQmCC") no-repeat 50%;
  display: inline-block;
  width: 24px;
  height: 24px;
  padding: 16px;
  background-size: 50%;
}

.app-main-header .by-cu7ious {
  text-align: center;
}

.app-main-header .by-cu7ious svg {
  display: inline-block;
  width: 125px;
  margin: 6px 0 0;
}

@media screen and (max-width:700px) {
  .app-main-header .by-cu7ious {
    text-align: right;
  }
  .app-main-header .by-cu7ious svg {
    width: 60%;
  }
}

@media screen and (max-width:500px) {
  .app-main-header .by-cu7ious {
    display: none;
  }
}

.app-main-header .github-badge {
  position: absolute;
  top: 10px;
  right: 15px;
}

.app-main-header .app-main-nav {
  display: none;
}
</style>
