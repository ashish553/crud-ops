<template>
  <div>
      <div class="row table-container mt-2">
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
          <table class="table table-bordered table-striped mb-0 align-center">
            <thead class="dark">
              <tr>
                <th>Id</th>
                <th>Project Name</th>
                <th>Site Name</th>
                <th>Site URL</th>
                <th>Normal(%)</th>
                <th>Disruption(%)</th>
                <th>Response Time(ms)</th>
                <th>Is Dynamic Testing required</th>
                <th>Website Availability Service</th>
                <th>SSL Service</th>
                <th>Broken Link Service</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in myusers" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.projectname }}</td>
                <td>{{ user.sitename }}</td>
                <td>{{ user.siteurl }}</td>
                <td>{{ user.normal }}</td>
                <td>{{ user.disruption }}</td>
                <td>{{ user.responsetime }}</td>
                <td>
                  <img v-if="user.dynamic" src="../assets/img/check.png" alt="true">
                  <img v-if="!user.dynamic" src="../assets/img/cancel.png" alt="false">
                </td>
                <td>
                  <img v-if="user.availability" src="../assets/img/check.png" alt="true">
                  <img v-if="!user.availability" src="../assets/img/cancel.png" alt="false">
                </td>
                <td>
                  <img v-if="user.ssl" src="../assets/img/check.png" alt="true">
                  <img v-if="!user.ssl" src="../assets/img/cancel.png" alt="false">
                </td>
                <td>
                  <img v-if="user.brokenlink" src="../assets/img/check.png" alt="true">
                  <img v-if="!user.brokenlink" src="../assets/img/cancel.png" alt="false">
                </td>
                <td><div><button type="button" class="btn btn-danger btn-sm" @click="deleteaUser(user.id)">Delete</button><button type="button" @click="$bvModal.show('bv-modal-example'),setID(user.id,user.projectname,user.sitename,user.gender,user.siteurl,user.normal,user.disruption,user.responsetime,user.availability,user.ssl,user.brokenlink,user.dynamic),hideModal()" class="btn btn-secondary btn-sm">Edit</button></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class='row'>
        <div>
          <b-modal id="bv-modal-example" hide-footer>
            <template #modal-title>
              Edit Details
            </template>
            <div class="d-block">
              <label for="projectnameInput" class="form-label">Project Name</label>
              <input type="text" name="projectname" id="projectname" class="form-control form-select-sm" placeholder="Steve Jobs" v-model="projectname">
              <label for="nameInput" class="form-label mt-3">Sitename</label>
              <input type="text" name="sitename" id="sitename" class="form-control form-select-sm" placeholder="steve@appleinc.com" v-model="sitename">
              <label for="genderInput" class="mt-3 form-label">Gender</label>
              <select name="gender" id="gender" class="form-select form-select-sm" v-model="gender">
                <option selected>Select an option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Others</option>
              </select>
              <label for="siteURL" class="mt-3 form-label">Site URL</label>
              <input type="text" id="siteurl" class="form-control form-select-sm" v-model="siteurl">
              <label for="normal" class="form-label mt-3">Normal(%)</label>
              <input type="number" class="form-control form-select-sm" v-model="normal">
              <label for="disruption" class="form-label mt-3">Disruption(%)</label>
              <input type="number" class="form-control form-select-sm" v-model="disruption">
              <label for="responsetime" class="form-label mt-3">Response Time(ms)</label>
              <input type="number" class="form-control form-select-sm" v-model="responsetime">
              <div class="custom-switch mt-4">
                <label class="switch">
                  <input type="checkbox" checked v-model="dynamic">
                  <span class="slider round"></span>
                </label>
                <p>Is Dynamic Checking Required</p>
              </div>
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
                  <input type="checkbox" checked>
                  <span class="slider round"></span>
                </label>
                <p>Raise Incident if Webiste is down</p>
              </div>
                <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close</b-button>
                <b-button class="mt-3" block @click="updateUser()">Update</b-button>
              </div>
            <b-alert class="mt-4 align-center alert-success" :show="duration" variant="success" fade><b-icon icon="check-circle-fill" aria-hidden="true"></b-icon> Details Updated Successfully!</b-alert>
          </b-modal>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Users',
  props: ['myusers', 'duration'],
  data () {
    return {
      projectname: '',
      sitename: '',
      siteurl: '',
      gender: '',
      id: '',
      normal: '',
      disruption: '',
      responsetime: '',
      availability: false,
      dynamic: false,
      ssl: false,
      broken: false,
      modalVisibility: 0
    }
  },
  methods: {
    deleteaUser (idUser) {
      this.$emit('deleteaUser', idUser)
    },
    setID (id, projectname, sitename, gender, siteurl, normal, disruption, responsetime, availability, ssl, broken, dynamic) {
      this.id = id
      this.projectname = projectname
      this.sitename = sitename
      this.gender = gender
      this.siteurl = siteurl
      this.normal = normal
      this.disruption = disruption
      this.responsetime = responsetime
      this.availability = availability
      this.ssl = ssl
      this.dynamic = dynamic
      this.broken = broken
    },
    updateUser () {
      if (this.projectname !== '' && this.sitename !== '' && this.siteurl !== '' && this.gender !== '') {
        const updatedData = {
          projectname: this.projectname,
          siteurl: this.siteurl,
          sitename: this.sitename,
          gender: this.gender,
          id: this.id,
          normal: this.normal,
          disruption: this.disruption,
          responsetime: this.responsetime,
          availability: this.availability,
          dynamic: this.dynamic,
          ssl: this.ssl,
          broken: this.broken
        }
        this.$emit('updateUser', updatedData)
        // this.projectname = ''
        // this.sitename = ''
        // this.gender = ''
      }
    },
    hideModal () {
      this.$emit('hideModal', this.modalVisibility)
    }
  }
}
</script>

<style>
/* .my-custom-scrollbar {
position: relative;
height: 300px;
overflow: auto;
}
.table-wrapper-scroll-y {
display: block;
height: 350px
}
.section::-webkit-scrollbar-track {
    background-color: darkgrey;
}
.table-container{
  border-radius: 6px;
  border: 5px #c5c1c1 solid;
  background-color: #d7ecff;
  box-shadow: 0px 4px 10px 0px;
}
.table-hover{
  --bs-table-hover-bg: #aef1bd !important;
}
.container{
  text-align: -webkit-center;
  width:90%;
  margin-top:10px
}
.box-header{
  padding: 10px;
} */
/* #bv-modal-example___BV_modal_content_{
  height: 680px !important;
} */
.alert-success{
  top: -620px;
  max-width: 288px;
  margin: auto;
  padding: 3px !important;
}
.table-container th{
  color: white;
  background-color: rgb(7, 7, 36);
  /* border: 2px #b1adad solid;
  background-color: #d7ecff; */
  /* box-shadow: 0px 4px 10px 0px; */
}
/* .table-hover{
  --bs-table-hover-bg: #aef1bd !important;
} */
.my-custom-scrollbar {
position: relative;
height: 300px;
overflow: auto;
}

.table-wrapper-scroll-y {
display: block;
height: 600px;
}

.table-striped>tbody>tr:nth-of-type(odd) {
    --bs-table-accent-bg: rgb(226, 223, 219);
    color: var(--bs-table-striped-color);
}
img{
  max-width: 30px;
  /* text-align: center; */
}
td{
  vertical-align: middle;
}
</style>
