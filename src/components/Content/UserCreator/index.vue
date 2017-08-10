<template lang="html">
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
</template>

<script>
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
  data: function() {
    return {
      is_empty: true,
      firstName: '',
      lastName: '',
      email: '',
      company: ''
    }
  },
  beforeMount() {
    this.$validator.updateDictionary(dict)
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
        alert('Correct them errors!');
      });
    }
  }
}
</script>

<style lang="css" scoped>
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
/*button:not([disabled]):hover {
  background-color: #ff5e62;
  color: #fff;
}*/
button:not([disabled]):focus,
button:not([disabled]):hover {
  background-color: #ff5e62;
  box-shadow: 0px 2px 1px #ff5e62;
  border-bottom: 1px solid #fff;
}
</style>
