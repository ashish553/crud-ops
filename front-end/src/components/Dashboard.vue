<template>
    <div class="container-fluid pdl-0">

      <!-- <div class="row custom-table-cont">
        <CreateUser @createUser="userCreate($event)"/>
        <Users @hideModal="changeVisible($event)" @deleteaUser="userDelete($event)" @updateUser="userUpdate($event)" v-if="u.length>0" :myusers="u" :duration="checkStatus"/>
      </div> -->
      <div class="row">
        <div class="col-2 pdl-0">
          <div class="nav-bar-body">
            <div class="nav-header">
              <div class="mt-4">
                <img src="../assets/img/health.png" class="icon-size" alt="health logo">
                <p style="display:inline-block" class="mt-3">Website Health Monitoring</p>
              </div>
            </div>
            <hr>
            <div class="nav-user-section">
              <div class='row'>
                <div class="col-3"><img class="user-image" src="../assets/img/userimage.png" alt="profile picture"></div>
                <div class="col-9">
                  <p>Ashish Sharma<br>Role<br>Project Name</p>
                </div>
              </div>
            </div>
            <hr>
            <div class="nav-items">
              <div class="itmes">
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
                  </svg>
                  <p class="nav-items-name">Dashboard</p>
                </a>
              </div>
              <div class="itmes mt-4">
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                  </svg>
                  <p class="nav-items-name">Website Management</p>
                </a>
              </div>
              <div class="itmes mt-4">
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-break" viewBox="0 0 16 16">
                    <path d="M0 10.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zM12 0H4a2 2 0 0 0-2 2v7h1V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7h1V2a2 2 0 0 0-2-2zm2 12h-1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2H2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2z"/>
                  </svg>
                  <p class="nav-items-name align-right">Website Availability Check</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-10">
          <div class="custom-table-cont">
            <CreateUser @createUser="userCreate($event)"/>
            <Users @hideModal="changeVisible($event)" @deleteaUser="userDelete($event)" @updateUser="userUpdate($event)" v-if="u.length>0" :myusers="u" :duration="checkStatus"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import { getAllUsers, createUsers, deleteUser, updateUser } from '../services/userServices'
import CreateUser from './CreateUser.vue'
import Users from './Users.vue'
import Header from './Header.vue'

export default {
  name: 'Dashboard',
  components: {
    CreateUser,
    Users,
    Header
  },
  data () {
    return {
      u: [],
      checkStatus: 0
    }
  },
  methods: {
    getAllUsers () {
      getAllUsers().then(response => {
        this.u = response
      })
    },
    userCreate (data) {
      createUsers(data).then(res => {
        console.log(res)
        this.getAllUsers()
      })
    },
    userDelete (data) {
      deleteUser(data).then(res => {
      })
      this.getAllUsers()
    },
    async userUpdate (data) {
      this.checkStatus = 0
      const statusCode = await updateUser(data).then()
      if (statusCode === 201) {
        this.checkStatus = 1
      }
      this.getAllUsers()
    },
    changeVisible (data) {
      this.checkStatus = data
    }
  },
  mounted () {
    this.getAllUsers()
  }

}
</script>

<style>
.custom-table-cont{
  padding: 10px;
    border: 2px grey solid;
    /* border-radius: 10px; */
    margin-top: 20px;
}
.icon-size{
  width:30px;
}
</style>
