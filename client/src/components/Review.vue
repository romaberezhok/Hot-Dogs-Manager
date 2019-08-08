<template>
    <div class="container">
        <div class="wrapper">
            <router-link to="/" class="back">Back</router-link>
            <div>
                <router-link :to="'/update/' + hotDog._id" class="btn btn-primary edit">Edit</router-link>
                <button @click="deleteHotDog(hotDog._id)" class="btn btn-danger delete">Delete</button>
            </div>
        </div>
        <div class="jumbotron">
            <h1 class="display-4">{{hotDog.title}}</h1>
            <p class="lead">{{hotDog.description}}</p>
            <hr class="my-4">
            <p>Ingredients: {{hotDog.ingredients}}</p>
        </div>
    </div>
    

</template>

<script>
import axios from 'axios'

export default {
    name: 'Review',
    data() {
        return {
            hotDog: {}
        }
    },
    created() {
        this.getHotDog(this.$route.params.id);
    },
    methods: {
        async getHotDog(id) {
            try{
                const hotDog = await axios.get('http://localhost:3000/api/hotdog/'+id);
                this.hotDog = hotDog.data;
            } catch(err) {
                console.log(err);
            }
        },
        async deleteHotDog(id) {
            try{
                const deletehotDog = await axios.delete('http://localhost:3000/api/hotdog/'+id);
                this.$router.push({path: '/', query: {alert: 'Hot Dog deleted'}});
            } catch(err) {
                console.log(err);
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.back {
    color: #000;
    display: block;
    margin-top: -1em;
    margin-bottom: 2em;
}

.wrapper {
    display: flex;
    justify-content: space-between;
}

.delete, .edit {
    margin-top: -1em;
    margin-bottom: 1em;
    margin-left: 0.5em;
    transform: translateY(-25%);
}



</style>
