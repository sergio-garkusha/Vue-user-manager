<template lang="html">
  <footer>
    <p>Designed &amp; coded with &hearts;
      <a target="_blank" href="//cu7io.us/">
        <AuthorLogo color="#3d4255"/>
      </a>
    </p>
  </footer>
</template>

<script>
import AuthorLogo from '../Icons/AuthorLogo'
export default {
  components: {
    AuthorLogo
  }
}
</script>

<style lang="css" scoped>
footer {
  position: absolute;
  bottom: 90px;
  width: 100%;
  text-align: center;
}

footer p {
  margin-left: -165px;
  font-size: 12px;
  font-style: italic;
  color: #3d4255;
}

footer a {
  text-decoration: none;
}

footer a svg {
  width: 100px;
  bottom: -6px;
  position: absolute;
  margin-left: 5px;
}

footer a svg path {
  transition: all .4s linear;
}

footer a svg:hover path {
  fill: #008bd2;
}

footer a svg:hover path:last-child {
  fill: inherit;
  stroke: #008bd2;
}
</style>
