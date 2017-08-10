<template lang="html">
  <table-component
    :data="columns"
    sort-by="id"
    sort-order="asc"
    filter-no-results="There are no rows matching this criteria. Nuff said."
    filter-placeholder="Filter..."
  >
    <table-column show="id" data-type="numeric" label="#ID"/>
    <table-column show="fullName" label="Full Name"/>
    <table-column show="email" label="Email"/>
    <table-column show="company" label="Company"/>
    <table-column show="actions" label="Actions"
      :sortable="false"
      :filterable="false"
    />
  </table-component>
</template>

<script>
import dummyData from './dummy-data'

export default {
  name: 'user-table',
  data: function () {
    return dummyData
  },
  beforeMount: function () {
    this.$data.columns.forEach(column => {
      column.actions = this.createActionLinks(column.id, column.actions)
    })
    window.addEventListener("hashchange", this.handleAction, false)
  },
  methods: {
    createActionLinks (id, links) {
      return `<a href="#edit-${id}">${links[0]}</a>`
      + '<span class="action-separator"></span>'
      + `<a href="#delete-${id}">${links[1]}</a>`
    },
    handleAction (e) {
      const hash = e.newURL.split('#')[1].split('-')
      if (hash[0] === 'edit') {
        location.hash = '/'
        this.handleEditUser(hash[1])
      } else if (hash[0] === 'delete') {
        location.hash = '/'
        this.handleDeleteUser(hash[1])
      }
    },
    handleEditUser (id) {

    },
    handleDeleteUser (id) {
      this.$data.columns.forEach((el, idx, arr) => {
        if (el.id == id) {
          arr.splice(idx, 1)
        }
      })
    }
  }
}
</script>

<style lang="css">
.table-component__filter {
  float: right;
  position: relative;
  margin: 0 0 15px;
  z-index: 2
}
.table-component__filter__field {
  outline: none;
  box-sizing: border-box;
  padding: 10px 20px 10px 10px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #e9e9e9;
  border-left: 0;
  min-width: 250px;
  transition: border-bottom .3s cubic-bezier(.645,.045,.355,1);
}
.table-component__filter__field:focus {
  border-bottom: 1px solid #ff5e62;
}

.table-component__filter__clear {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
}

.table-component__table-wrapper {
  position: relative;
}
.table-component__table__caption {
  position: absolute;
  top: 0;
  right: 265px;
  font-size: 0.88em;
  line-height: 33px;
}
.table-component__message {
  text-align: center;
  padding: 45px 0 0;
  font-size: .8em;
}

.table-component__table-wrapper th[aria-disabled=true] {
  cursor: default;
}
.table-component__table-wrapper th:not([aria-disabled=true]) {
  cursor: pointer;
}

.table-component__th--sort-asc:after {
  content: "";
  position: absolute;
  margin-left: 5px;
  top: 26px;
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  border-bottom: 4px solid;
  border-left: 4px solid rgba(0, 0, 0, 0);
  border-right: 4px solid rgba(0, 0, 0, 0);
}
.table-component__th--sort-desc:after {
  content: "";
  position: absolute;
  border-top: 0;
  margin-left: 5px;
  top: 26px;
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid rgba(0, 0, 0, 0);
  border-left: 4px solid rgba(0, 0, 0, 0);
}
</style>
