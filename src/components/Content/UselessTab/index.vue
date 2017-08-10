<template lang="html">
  <div class="wrapper">
    <div class="column">
      <p>
        The purpose of this tab is to show the ability of tab's adoption of styles,
        so technically the name of it is correct. However, I may put something
        meaningful here.
      </p>
    </div>
    <div class="column">
      <h4>Credits:</h4>
      <p>

      </p>
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
