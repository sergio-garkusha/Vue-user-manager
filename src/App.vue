<template>
  <div id="app">
    <AppHeader />
    <Home :title="tab_name" />
    <AppSidebar />
    <AppOverlay />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from './components/Header'
import Home from './components/Content/Home'
import AppSidebar from './components/Sidebar'
import AppOverlay from './components/Misc/AppOverlay'

export default {
  computed: mapState([
    'tab_name'
  ]),
  components: {
    AppHeader, AppSidebar, AppOverlay, Home
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,700,400italic,300italic,700italic);

html {
  height: 100%
}

body {
  min-width: 400px;
  font-family: 'Roboto', sans-serif;
  background-color: #e9e9e9;
  padding-top: 55px;
  margin: 0;
  height: 93%;
}

body.active-left-place {
  overflow: hidden;
}

table {
  width: 100%;
  font-size: 0.8em;
  border-collapse: collapse;
}
table a {
  color: #ff5e62;
  text-decoration: none;
  opacity: 1;
  transition: opacity .3s linear;
}
table a:hover {
  opacity: 0.8;
}
table .action-separator {
  height: 0.8em;
  display: inline-block;
  width: 1px;
  background-color: #ccc;
  margin: 0 5px 0;
}

thead th {
  background: #f7f7f7;
  padding: 20px 10px;
  position: relative;
}

tbody tr {
  border-bottom: 1px solid #e9e9e9;
}
tbody td {
  padding: 20px 10px;
}

.column {
  flex: 1;
}

.center {
  text-align: center;
}

.right {
  text-align: right;
}

#magnet-overlay,
#main-sidebar,
.active-left-place #magnet-overlay {
  transition: all .5s ease-in-out;
}

.wrapper {
  min-height: 100%;
  /*color: #3d4255;*/
  color: rgba(0, 0, 10, 0.65);
}

.wrapper .panel {
  display: flex;
  background-color: hsla(0, 0%, 100%, .8);
  min-height: 75px;
  line-height: 40px;
  text-align: center;
}

.wrapper .panel h3 {
  width: 100%;
}

.wrapper .material-buttons {
  position: fixed;
  right: 35px;
  bottom: 20px
}

.wrapper .material-buttons ul {
  list-style: none
}

.wrapper .material-buttons ul li {
  width: 56px;
  height: 53px;
  background: linear-gradient(to right, #ff5e62, #f96);
  color: #fff;
  border-bottom: 4px solid #ff5e62;
  position: relative;
  border-radius: 56px;
  text-align: center;
  font-size: 32px;
  line-height: 56px;
  box-shadow: 0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28);
  cursor: pointer
}

.wrapper .material-buttons ul li:last-child:after {
  content: "+"
}

.wrapper .material-buttons ul li span {
  position: absolute;
  font-size: 12px;
  padding: 2px 8px;
  top: 5px;
  background-color: rgba(43, 43, 43, .67);
  max-height: 20px;
  border-radius: 3px;
  line-height: 21px
}

.wrapper .material-buttons ul li.secondary {
  width: 36px;
  height: 34px;
  border-radius: 36px;
  border-bottom: 3px solid #ff5e62;
  font-size: 22px;
  line-height: 40px;
  margin-left: 10px;
  margin-bottom: 10px
}

.wrapper .material-buttons ul li.secondary#paste-dummy-data span {
  left: -122px
}

.wrapper .material-buttons ul li.secondary#clear-all-data span {
  left: -92px
}

.wrapper .material-buttons ul li#add-new-recipe span {
  top: 15px;
  left: -104px
}

.wrapper .material-buttons ul li:hover:last-child:after {
  content: "\29C9"
}

.modal > div {
  padding: 35px
}

.modal .modal-header h3 {
  margin: 0
}

.modal .modal-header button {
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

.modal .modal-header button:hover {
  color: #6b6b6b
}

.modal .form {
  margin: 30px 0
}

.modal .form label {
  display: block;
  margin: 0 0 5px;
  font-size: 14px
}

.modal .form input, .modal .form textarea {
  border: 0;
  border-bottom: 1px solid #e0e0e0;
  min-height: 30px;
  margin: 10px 0 25px;
  font-size: 14px
}

.modal footer {
  text-align: right
}

.modal footer button {
  display: inline-block;
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

.modal footer button:first-child {
  background-color: rgba(0, 112, 255, .25)
}

.modal footer button:first-child:focus, .modal footer button:first-child:hover {
  background-color: rgba(0, 112, 255, .4);
  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, .15)
}

.active-left-place #main-sidebar {
  left: 0;
  visibility: visible;
  overflow-y: auto;
}

.active-left-place #magnet-overlay {
  visibility: visible;
  z-index: 99;
  opacity: .6
}

.main-footer {
  position: absolute;
  bottom: 90px;
  width: 100%;
  text-align: center;
}

.main-footer p {
  margin-left: -165px;
  font-size: 12px;
  font-style: italic;
  color: #3d4255;
}

.main-footer a {
  text-decoration: none;
}

.main-footer a svg {
  width: 100px;
  bottom: -6px;
  position: absolute;
  margin-left: 5px;
}

.main-footer a svg path {
  transition: all .4s linear;
}

.main-footer a svg:hover path {
  fill: #008bd2;
}

.main-footer a svg:hover path:last-child {
  fill: inherit;
  stroke: #008bd2;
}
</style>
