/* eslint-disable vue/require-v-for-key */
<template>
  <div class="container">
    <div class="row">
      <div>
        <table class="table table-hover table-striped">
          <thead class="dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in myusers" :key="user.id">
              <td scope="row">{{ user.id }}</td>
              <td scope="row">{{ user.name }}</td>
              <td scope="row">{{ user.email }}</td>
              <td scope="row"><button type="button" class="btn btn-danger btn-sm" @click="deleteaUser(user.id)">Delete</button><button type="button" class="btn btn-secondary btn-sm">Edit</button></td>
              <!-- <td scope="row">Operation</td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Users',
  props: ['myusers'],
  methods: {
    deleteaUser (idUser) {
      this.$emit('deleteaUser', idUser)
    }
  }
}
</script>

<style>

</style>
