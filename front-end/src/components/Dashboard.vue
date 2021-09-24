<template>
    <div class="container">
      <div class='row'>
        <Header></Header>
        <Users @deleteaUser="userDelete($event)" v-if="u.length>0" :myusers="u"/>
        <CreateUser @createUser="userCreate($event)"/>
      </div>
    </div>
</template>

<script>

import { getAllUsers, createUsers, deleteUser } from '../services/userServices'
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
      u: []
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
        // console.log(data)
      })
      this.getAllUsers()
    }
  },
  mounted () {
    this.getAllUsers()
  }

}
</script>

<style>

</style>
