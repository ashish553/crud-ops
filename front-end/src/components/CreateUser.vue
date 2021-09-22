<template>
  <div>
    <!-- <form action="http://localhost:8000/api/user" method="post"> -->
    <form>
      <input type="text" name="name" id="name" placeholder="Name" v-model="name">
      <input type="email" name="email" placeholder="Email" v-model="email">
      <button @click="createUsers()">Add This User</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'CreateUser',
  data () {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    createUsers () {
      const newUserData = {
        name: this.name,
        email: this.email
      }
      this.$emit('createUser', newUserData)
    }
  }
}
</script>

<style>

</style>
