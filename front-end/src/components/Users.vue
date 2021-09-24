<template>
  <div class="container">
      <div class="row table-container">
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
          <table class="table table-bordered table-hover table-striped mb-0">
            <thead class="dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in myusers" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.gender }}</td>
                <td><div><button type="button" class="btn btn-danger btn-sm" @click="deleteaUser(user.id)">Delete</button><button type="button" @click="$bvModal.show('bv-modal-example'),setID(user.id,user.name,user.email,user.gender)" class="btn btn-secondary btn-sm">Edit</button></div></td>
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
              <label for="nameInput" class="form-label">Name</label>
              <input type="text" name="name" id="name" class="form-control form-select-sm" placeholder="Steve Jobs" v-model="name">
              <label for="nameInput" class="form-label mt-3">Email</label>
              <input type="text" name="email" id="email" class="form-control form-select-sm" placeholder="steve@appleinc.com" v-model="email">
              <label for="genderInput" class="mt-3 form-label">Gender</label>
              <select name="gender" id="gender" class="form-select form-select-sm" v-model="gender">
                <option selected>Select an option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Others</option>
              </select>
            </div>
            <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
            <b-button class="mt-3" block @click="updateUser()">Update</b-button>
            <b-alert class="mt-4" v-if="fail" :show=5 variant="success"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg> Details Updated Successfully!</b-alert>
          </b-modal>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Users',
  props: ['myusers', 'fail'],
  data () {
    return {
      name: '',
      email: '',
      gender: '',
      id: ''
    }
  },
  methods: {
    deleteaUser (idUser) {
      this.$emit('deleteaUser', idUser)
    },
    setID (id, name, email, gender) {
      this.id = id
      this.name = name
      this.email = email
      this.gender = gender
    },
    updateUser () {
      if (this.name !== '' && this.email !== '' && this.gender !== '') {
        const updatedData = {
          name: this.name,
          email: this.email,
          gender: this.gender,
          id: this.id
        }
        this.$emit('updateUser', updatedData)
        this.name = ''
        this.email = ''
        this.gender = ''
      }
    }
  }
}
</script>

<style>
.my-custom-scrollbar {
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
</style>
