<template>
  <div>
    <div class="row form-group justify-content-center mb-2">
      <div class="col-md-4 col-sm-4 col-10">
        <label for="nameInput" class="form-label mt-4">Name</label>
        <input type="text" name="name" id="name" class="form-control form-select-sm" placeholder="Steve Jobs" v-model="name">
        <label for="emailInput" class="form-label mt-3">Email</label>
        <input type="email" name="email" id="email" class="form-control form-select-sm" placeholder="steve@apple.com" v-model="email">
        <label for="genderInput" class="form-label mt-3">Gender</label>
        <select name="gender" id="gender" class="form-select form-select-sm" v-model="gender">
          <option selected>Select an option</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Others</option>
        </select>
        <div class="align-center mt-3">
          <button class="btn btn-primary align-center" @click="createUsers()">Add</button>
        </div>
        <div class="mt-4">
          <div v-if="fail" class="align-center alert alert-danger d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
            <div>
              Please enter all field correctly
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CreateUser',
  data () {
    return {
      name: '',
      email: '',
      gender: '',
      fail: false
    }
  },
  methods: {
    createUsers () {
      if (this.name !== '' && this.email !== '' && this.data !== '') {
        const newUserData = {
          name: this.name,
          email: this.email,
          gender: this.gender
        }
        this.fail = false
        this.$emit('createUser', newUserData)
      } else {
        this.fail = true
      }
    }
  }
}
</script>

<style>

</style>
