<template>
  <div>
    <!-- <form action="http://localhost:8000/api/user" method="post"> -->
    <div class="row form-group justify-content-center mb-2">
      <div class="col-md-4 col-sm-4 col-10">
        <label for="nameInput" class="form-label">Name</label>
        <input type="text" name="name" id="name" class="form-control form-select-sm" placeholder="Steve Jobs" v-model="name">
      </div>
    </div>
    <div class="row form-group justify-content-center">
      <div class="col-md-4 col-sm-4 col-10">
        <label for="emailInput" class="form-label">Email</label>
        <input type="email" name="email" id="email" class="form-control form-select-sm" placeholder="steve@apple.com" v-model="email">
      </div>
    </div>
    <div class="row form-group justify-content-center mt-4">
      <div class="col-md-4 col-sm-4 col-10">
        <label for="genderInput" class="form-label">Gender</label>
        <select name="gender" id="gender" class="form-select form-select-sm" v-model="gender">
          <option selected>Select an option</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Others</option>
        </select>
      </div>
    </div>
    <div class="row justify-content-center mt-4">
      <div class="col-md-4 col-sm-4 col-5 align-center">
        <button class="btn btn-primary" @click="createUsers()">Add</button>
      </div>
    </div>
    <!-- <form>
      <input type="text" name="name" id="name" placeholder="Name" v-model="name">
      <input type="email" name="email" placeholder="Email" v-model="email">
      <button @click="createUsers()">Add This User</button>
    </form> -->
  </div>
</template>

<script>

export default {
  name: 'CreateUser',
  data () {
    return {
      name: '',
      email: '',
      gender: ''
    }
  },
  methods: {
    createUsers () {
      const newUserData = {
        name: this.name,
        email: this.email,
        gender: this.gender
      }
      this.$emit('createUser', newUserData)
    }
  }
}
</script>

<style>

</style>
