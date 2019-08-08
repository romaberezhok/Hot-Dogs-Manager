<template>
  <div class="container">
    <Alert v-if="alert" :message="alert"/>
    <h1 class="page-header mb-4">Manage Hot Dogs </h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Desription</th>
          <th>Ingredients</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hotDog in hotDogs" :key="hotDog.id">
          <td>{{hotDog.title}}</td>
          <td>{{hotDog.description}}</td>
          <td>{{hotDog.ingredients}}</td>
          <td><router-link :to="'/hotdog/'+ hotDog._id" class="btn btn-info">View</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import Alert from './Alert'

export default {
  name: 'HotDogs',
  components: {
    Alert
  },
  data() {
    return {
      hotDogs: [],
      alert: ''
    }
  },
  created() {
    if(this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.getHotDogs();
  },
  methods: {
    async getHotDogs() {
      try{
        const hotDogs = await axios.get('http://localhost:3000/api/hotdogs');
        this.hotDogs = hotDogs.data;
      } catch(err) {
        console.log(err);
      }
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
