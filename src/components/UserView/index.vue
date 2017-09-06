<template>
  <div class="wrapper">
    <div class="panel">
      <h3>{{ title }}</h3>
    </div>
    <div class="user-manager-app">

      <section class="main-block">

        <form v-on:submit.prevent="validateBeforeSubmit">
          <div class="column">
            <p>All fields are required</p>
            <p>
              <input
                @keyup="isFormEmpty"
                placeholder="First name"
                v-model="firstName"
                name="firstName"
                v-validate="'required|alpha|min:3'"
                type="text"
              />
              <span v-show="errors.has('firstName')">
                {{ errors.first('firstName') }}
              </span>
            </p>
            <p>
              <input
                @keyup="isFormEmpty"
                placeholder="Last name"
                v-model="lastName"
                name="lastName"
                v-validate="'required|alpha|min:3'"
                type="text"
              >
              <span v-show="errors.has('lastName')">
                {{ errors.first('lastName') }}
              </span>
            </p>
            <p>
              <input
                @keyup="isFormEmpty"
                placeholder="Email"
                v-model="email"
                name="email"
                disabled
                v-validate="'required|email'"
                type="email"
              >
              <span v-show="errors.has('email')">
                {{ errors.first('email') }}
              </span>
            </p>
            <p>
              <input
                @keyup="isFormEmpty"
                placeholder="Company"
                v-model="company"
                name="company"
                v-validate="'required|min:2'"
                type="text"
              >
              <span v-show="errors.has('company')">
                {{ errors.first('company') }}
              </span>
            </p>
            <button v-if="is_empty" disabled type="submit">Create user</button>
            <button v-else="!is_empty" type="submit">Create user</button>
          </div>
          <div class="column">
            <p>Data to be sent to the server: <pre>{&#123; $data &#125;}</pre></p>
          </div>
        </form>

      </section>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

const dict = {
  en: {
    custom: {
      firstName: {
        required: 'This field is required',
        alpha: 'This field may only contain alphabetic characters',
        min: 'This field must be at least 3 characters'
      },
      lastName: {
        required: 'This field is required',
        alpha: 'This field may only contain alphabetic characters',
        min: 'This field must be at least 3 characters'
      },
      email: {
        required: 'This field is required',
        email: 'This field must be a valid email'
      },
      company: {
        required: 'This field is required',
        min: 'This field must be at least 2 characters'
      },
    }
  }
}

export default {
  name: 'user-view',
  computed: {
    firstName: {
      get: function () {
        return this.$store.state.userData.fullName.split(' ')[0]
      },
      set: function (value) {
        this.$store.state.commit
        return value
      },
    },
    lastName: function () {
      return this.$store.state.userData.fullName.split(' ')[1]
    },
    email: function () {
      return this.$store.state.userData.email
    },
    company: function () {
      return this.$store.state.userData.company
    },
  },
  props: ['title'],
  data: function() {
    return {
      is_empty: true
    }
  },
  beforeMount () {
    console.log(this);
    this.$validator.updateDictionary(dict)
  },
  mounted: function () {

  },
  methods: {
    isFormEmpty: function() {
      if (!this.errors.any()
          && this.$data.firstName
          && this.$data.lastName
          && this.$data.email
          && this.$data.company
      ) {
        this.$data.is_empty = false
      } else {
        this.$data.is_empty = true
      }
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert('From Submitted!');
          return;
        }
        alert('Correct the errors!');
      });
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}

form p {
  position: relative;
  margin-bottom: 40px;
}

form p span {
  position: absolute;
  bottom: -20px;
  font-size: .8em;
  color: #ff5e62;
}

.column {
  margin: 30px;
}

input {
  outline: none;
  box-sizing: border-box;
  padding: 15px 20px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  min-width: 250px;
  width: 100%;
  font-size: .95em;
  transition: border-bottom .3s cubic-bezier(.645,.045,.355,1);
}
input[aria-invalid=true],
input[aria-invalid=true]:focus {
  border-bottom: 1px solid #ff5e62;
}
input[aria-invalid=false]:valid {
  border-bottom: 1px solid #e9e9e9;
}
input[aria-invalid=false],
input[aria-invalid=false]:focus {
  border-bottom: 1px solid #61dc04;
}
button {
  outline: none;
  border: none;
  border-bottom: 1px solid #dcdcdc;
  border-radius: 2px;
  background-color: #dcdcdc;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  float: right;
  line-height: 4;
  margin: 4px 0;
  padding: 0 20px;
  text-transform: uppercase;
  white-space: nowrap;
  transition: box-shadow .4s cubic-bezier(.4,0,.2,1), background-color .4s cubic-bezier(.4,0,.2,1);
}
button:not([disabled]) {
  background-color: #ff7c64;
  color: #fff;
}
button:not([disabled]):focus,
button:not([disabled]):hover {
  background-color: #ff5e62;
  box-shadow: 0px 2px 1px #ff5e62;
  border-bottom: 1px solid #fff;
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
