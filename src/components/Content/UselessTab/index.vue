<template lang="html">
  <div class="wrapper">
    <div class="column">
      <p>
        The purpose of this tab is to show the ability of tab's adoption of styles,
        so technically the name of it is correct. However, I may put something
        meaningful here later.
      </p>
    </div>
    <div class="column">
      <h4>Credits:</h4>
      <ul>
        <li><a href="//ru.vuejs.org/">vue</a></li>
        <li><a href="//vuex.vuejs.org/">vuex</a></li>
        <li><a href="//router.vuejs.org/">vue-router</a></li>
        <li><a href="//github.com/spatie/vue-table-component">vue-table-component</a></li>
        <li><a href="//vee-validate.logaretm.com/index.html#about">vee-validate</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'useless-tab'
}
</script>

<style lang="css" scoped>
.wrapper {
  display: flex;
}

.column {
  margin: 30px;
}
.column:last-child {
  margin: 30px 200px 30px 30px;
}

.column > :first-child {
  margin-top: 10px;
}

.column > :first-child::first-letter {
  margin-left: 15px;
}
</style>
