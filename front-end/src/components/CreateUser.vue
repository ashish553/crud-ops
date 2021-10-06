<template>
  <div>
    <div class='row'>
      <div class="align-left col-md-6 col-6 col-sm-6">
        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          Show active site only
        </b-form-checkbox>
      </div>
      <div class="align-right col-md-6 col-6 col-sm-6">
        <button @click="$bvModal.show('bv-modal-createUser')" class="btn btn-secondary btn-sm">Add</button>
      </div>
    </div>
    <hr>
    <div class='row'>
      <div>
        <b-modal id="bv-modal-createUser" hide-footer>
          <template #modal-title>
            Add new Site
          </template>
          <div class="d-block">
            <label for="nameInput" class="form-label">Project Name</label>
            <input type="text" name="name" id="name" class="form-control form-select-sm" placeholder="Steve Jobs" v-model="name">
            <label for="nameInput" class="form-label mt-3">Sitename</label>
            <input type="text" name="sitename" id="sitename" class="form-control form-select-sm" placeholder="steve@appleinc.com" v-model="sitename">
            <label for="genderInput" class="mt-3 form-label">Gender</label>
            <select name="gender" id="gender" class="form-select form-select-sm" v-model="gender">
              <option selected>Select an option</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Others</option>
            </select>
            <label for="genderInput" class="mt-3 form-label">Site URL</label>
            <input type="text" id="siteurl" class="form-control form-select-sm" v-model="siteurl">
            <label for="normal" class="mt-3 form-label">Normal</label>
            <input type="number" class="form-control form-select-sm" v-model="normal">
            <label for="disruption" class="mt-3 form-label">Normal</label>
            <input type="number" class="form-control form-select-sm" v-model="disruption">
            <label for="responseTime" class="mt-3 form-label">Response Time (ms)</label>
            <input type="number" class="form-control form-select-sm" v-model="responsetime">
            <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-createUser')">Close Me</b-button>
            <b-button class="mt-3" block @click="createUsers()">Add</b-button>
          </div>
            <!-- <b-alert class="mt-4 align-center" :show="duration" variant="success" fade><b-icon icon="check-circle-fill" aria-hidden="true"></b-icon> Details Updated Successfully!</b-alert> -->
        </b-modal>
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
      sitename: '',
      gender: '',
      siteurl: '',
      normal: '',
      disruption: '',
      responsetime: '',
      fail: false
    }
  },
  // props: ['name','sitename','gender',],
  methods: {
    createUsers () {
      if (this.name !== '' && this.sitename !== '' && this.gender !== '' && this.siteurl !== '') {
        const newUserData = {
          projectname: this.name,
          sitename: this.sitename,
          siteurl: this.siteurl,
          gender: this.gender,
          normal: this.normal,
          disruption: this.disruption,
          responsetime: this.responsetime
        }
        this.fail = false
        this.$emit('createUser', newUserData)
        this.name = ''
        this.siteurl = ''
        this.sitename = ''
        this.disruption = ''
        this.gender = ''
        this.normal = ''
        this.responsetime = ''
      } else {
        this.fail = true
      }
    }
  }
}
</script>

<style>
.custom-table-cont{
  padding: 10px;
  border: 2px rgb(131, 126, 126) solid;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0px 4px 10px 0px;
}
</style>
