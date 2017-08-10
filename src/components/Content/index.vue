<template>
  <div class="wrapper">
    <div class="panel">
      <h3>{{ title }}</h3>
    </div>
    <div class="user-manager-app">

      <section class="main-block">
        <ul class="tabs-nav">
          <li v-for="tab in tabs"
            :key="tab.id"
            :class="['tab', { 'active': tab.id === activeTab }]"
            @click="makeActive(tab.id)"
          >
            {{ tab.title }}
          </li>
          <div class="tabs-highlighter"
            :style="{
              width: `${highlighterWidth}px`,
              transform: `translate3d(${highlighterPosition}px, 0px, 0px)`
            }"
          >
          </div>
        </ul>

        <div class="tabs-delimiter"></div>

        <ul class="tabs-content">
          <li v-for="tab in tabs"
            :key="tab.id"
            :class="['tab-container', {'active': tab.id === activeTab}]"
          >
            <component :is="tab.content" :key="tab.id"/>
          </li>
        </ul>
      </section>

    </div>
  </div>
</template>

<script>
import UserTable from './UserTable'
import UserCreator from './UserCreator'
import UselessTab from './UselessTab'

export default {
  name: 'home',
  props: ['title'],
  data: function () {
    return {
      activeTab: 0,
      highlighterWidth: 0,
      highlighterPosition: 0,
      tabs: [
        {
          id: 0,
          title: 'List of users',
          content: 'user-table'
        },
        {
          id: 1,
          title: 'User creator',
          content: 'user-creator'
        },
        {
          id: 2,
          title: 'Another tab with long-long-long title and absolutely no purpose',
          content: 'useless-tab'
        },
      ]
    }
  },
  mounted: function () {
    this.setHighlighterVisualParams()
  },
  updated: function () {
    this.setHighlighterVisualParams()
  },
  methods: {
    makeActive (id) {
      this.activeTab = id
      this.tabs.forEach(tab => {
        if (tab.id === id)
          this.$store.commit('setTabName', {name: tab.title})
      })
    },
    setHighlighterVisualParams () {
      const tabsWrapperRect = this.$el.querySelector('.tabs-nav').getBoundingClientRect()
      const tab = this.$el.querySelector('.tab.active')
      const tabRect = tab.getBoundingClientRect()
      this.highlighterPosition = tabRect.left - tabsWrapperRect.left
      this.highlighterWidth = tab.offsetWidth
    }
  },
  components: {
    UserTable, UserCreator, UselessTab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.tabs-nav {
  /*display: table-row;*/
  position: relative;
}
.tabs-nav .tab {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 30px;
  cursor: pointer;
  transition: color .3s cubic-bezier(.645,.045,.355,1);
}
.tabs-nav .tab.active {
  color: #ff5e62;
}
.tabs-highlighter {
  position: absolute;
  top: 28px;
  display: block;
  height: 2px;
  content: " ";
  background-color: #ff5e62;
  transition: transform .3s cubic-bezier(.645,.045,.355,1),
              width .3s cubic-bezier(.645,.045,.355,1);
}

.tabs-delimiter {
  background-color: #ededed;
  height: 1px;
  margin: 10px 0 0;
  width: 100%;
}

.tabs-content {
  padding: 15px 0 0;
}
.tab-container {
  display: none;
}
.tab-container.active {
  display: block;
}

.user-manager-app {
  padding: 55px 0;
  display: block;
  text-align: center;
}

.main-block {
  display: block;
  margin: 0 auto;
  text-align: initial;
  min-width: 40vw;
  max-width: 94vw;
  width: 94vw;
  box-sizing: border-box;
  background-color: hsla(0, 0%, 100%, .8);
  box-shadow: 0 0 4px rgba(0, 0, 0, .05), 0 4px 8px rgba(0, 0, 0, .1);
  padding: 25px 25px 55px;
}

@media screen and (max-width:850px) {
  .user-manager-app {
    display: block;
    padding: 8px 5px;
  }
  .main-block {
    min-width: 70vw
  }
}

@media screen and (max-width:600px) {
  .user-manager-app {
    display: block;
    padding: 8px 5px
  }
  .main-block {
    min-width: 97.3vw
  }
  .user-manager-app ul li {
    font-size: 20px !important;
  }
  .tabs-nav .tab {
    max-width: 100% !important;
    width: 100%;
    overflow: hidden;
    text-align: center;
    padding: 15px 30px;
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0
}

.user-manager-app ul input {
  position: relative;
  height: 55px;
  font-size: 30px;
  font-weight: 100;
  line-height: 40px;
  padding: 0 0 0 60px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  border-top: 0;
  border-right: 0;
  border-left: 0
}

.user-manager-app ul li.recipe {
  position: relative;
  width: 100%;
  min-height: 55px;
  font-size: 30px;
  font-weight: 100;
  line-height: 55px;
  border: 1px solid rgba(0, 0, 0, .1);
  margin: 0 0 10px
}

.user-manager-app ul li.recipe a {
  display: block;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  padding: 3px 25px;
  background: #e0e0e0;
  height: 100%;
  color: #3d4255
}

.user-manager-app ul li.recipe a:after {
  content: "+";
  position: absolute;
  right: 25px
}

.user-manager-app ul li.recipe .toggle-inner {
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
  height: 0;
  transition: all .5s linear;
  padding: 0
}

.user-manager-app ul li.recipe .filters-block {
  display: inline-block;
  overflow: hidden;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
  padding: 0 25px;
  max-height: 55px;
  line-height: 44px;
  height: 55px
}

.user-manager-app ul li.recipe .filters-block button {
  margin: 0 3px;
  padding: 10px;
  border: 0;
  background-color: #d3d3d3;
  cursor: pointer;
  outline: none;
  background-color: #fff;
  transition: all .9s cubic-bezier(.23, 1, .32, 1) 0;
  border-radius: 2px
}

.user-manager-app ul li.recipe .filters-block button:first-child {
  background-color: rgba(0, 112, 255, .25)
}

.user-manager-app ul li.recipe .filters-block button:first-child:focus, .user-manager-app ul li.recipe .filters-block button:first-child:hover {
  background-color: rgba(0, 112, 255, .4);
  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, .15)
}

.user-manager-app ul li.recipe .filters-block button:last-child {
  background-color: rgba(255, 0, 0, .25)
}

.user-manager-app ul li.recipe .filters-block button:last-child:focus, .user-manager-app ul li.recipe .filters-block button:last-child:hover {
  background-color: rgba(255, 0, 0, .4);
  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, .15)
}

.user-manager-app ul li.recipe .header {
  text-align: center;
  font-size: 22px
}

.user-manager-app ul li.recipe .header, .user-manager-app ul li.recipe li {
  display: block;
  padding: 0 50px;
  width: 100%;
  box-sizing: border-box;
  max-height: 55px;
  height: 55px;
  border-bottom: 1px solid #e0e0e0
}

.user-manager-app ul li.recipe li {
  font-size: 18px
}

.user-manager-app ul li.recipe.opened a:after {
  content: "\2013";
  position: absolute;
  right: 25px
}

.user-manager-app ul li.recipe.opened .toggle-inner {
  visibility: visible;
  opacity: 1
}

.user-manager-app ul li.recipe.sortable-chosen {
  cursor: move
}

.user-manager-app ul li.recipe.sortable-ghost {
  opacity: .5;
  border: 2px dashed #000
}

.user-manager-app ul li.no-items a {
  color: #ff5e62;
}

input, textarea {
  outline: none;
  font-family: Roboto, sans-serif;
  box-sizing: border-box;
  width: 100%
}

@media screen and (max-width: 905px) {
  .tabs-nav .tab {
    max-width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
