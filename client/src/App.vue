<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-5" >
      <router-link to="/" class="navbar-brand ml-4">Hot Dogs' Manager</router-link>
      <router-link to="/add" class="add">Add Hot Dog</router-link>
    </nav>

    <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style scoped>



.add {
  display: block;
  position: absolute;
  right: 4%;
  color: #fff;

}

</style>
