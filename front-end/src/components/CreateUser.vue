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
          <p class="margin-custom">Show active site only</p>
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
            <div class="custom-switch mt-4">
              <label class="switch">
                <input type="checkbox" checked v-model="availability">
                <span class="slider round"></span>
              </label>
              <p>Website Availability Service</p>
            </div>
            <div class="custom-switch mt-4">
              <label class="switch">
                <input type="checkbox" checked v-model="ssl">
                <span class="slider round"></span>
              </label>
              <p>SSL Service</p>
            </div>
            <div class="custom-switch mt-4">
              <label class="switch">
                <input type="checkbox" checked v-model="broken">
                <span class="slider round"></span>
              </label>
              <p>Broken Link Service</p>
            </div>
            <div class="custom-switch mt-4">
              <label class="switch">
                <input type="checkbox" checked v-model="dynamic">
                <span class="slider round"></span>
              </label>
              <p>Is Dynamic Checking Required</p>
            </div>
            <div class="custom-switch mt-4">
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider round"></span>
              </label>
              <p>Raise Incident if Webiste is down</p>
            </div>
            <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-createUser')">Close</b-button>
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
      availability: false,
      dynamic: false,
      ssl: false,
      broken: false,
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
          responsetime: this.responsetime,
          availability: this.availability,
          dynamic: this.dynamic,
          ssl: this.ssl,
          broken: this.broken
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
        this.availability = false
        this.dynamic = false
        this.ssl = false
        this.broken = false
        this.fail = false
      } else {
        this.fail = true
      }
    }
  }
}
</script>

<style>
.custom-table-cont{
  padding: 13px;
  border: 2px rgb(131, 126, 126) solid;
  /* border-radius: 10px; */
  margin-top: 20px;
  /* box-shadow: 0px 4px 10px 0px; */
}
.margin-custom{
  margin-left: 5px;
}
</style>
