<template>
    <div class="container">
      <div class='row'>
        <Header></Header>
        <Users @hideModal="changeVisible($event)" @deleteaUser="userDelete($event)" @updateUser="userUpdate($event)" v-if="u.length>0" :myusers="u" :duration="checkStatus"/>
        <CreateUser @createUser="userCreate($event)"/>
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

</style>
