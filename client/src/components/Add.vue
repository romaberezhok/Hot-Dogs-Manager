<template>
  <div class="container">
    <Alert v-if="alert" :message="alert"/>
    <h1 class="page-header mb-4">Add Hot Dog</h1>
    <form @submit.prevent="addHotDog">
      <div class="card card-body bg-light">
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" placeholder="Title" v-model="hotDog.title">
        </div>
        <div class="form-group">
          <label>Description</label>
          <input type="text" class="form-control" placeholder="Description" v-model="hotDog.description">
        </div>
        <div class="form-group">
          <label>Ingredients</label>
          <input type="text" class="form-control" placeholder="Ingredients" v-model="hotDog.ingredients">
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-2">Submit</button>
    </form>
    
  </div>
</template>

<script>
import axios from 'axios'
import Alert from './Alert'

export default {
  name: 'Add',
  components: {
    Alert
  },
  data() {
    return {
      hotDog: {},
      alert: ''
    }
  },
  methods: {
    addHotDog() {
      if(!this.hotDog.title || !this.hotDog.description || !this.hotDog.ingredients) {
        this.alert = "Please fill in all fields!";
      } else {
        let newHotDog = {
          title: this.hotDog.title,
          description: this.hotDog.description,
          ingredients: this.hotDog.ingredients
        }

        axios.post('http://localhost:3000/api/hotdog/add', newHotDog)
          .then((res) => this.$router.push({path: '/', query: {alert: 'Hot Dog successfully added'}}))
          .catch(err => console.log(err));
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert-success {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

</style>
