<template v-cloak>
  <NavBar /> 
  <router-view/>
</template>

<script>
import { baseURL } from './constants/baseURL';
import axios from 'axios'
import NavBar from './components/NavBar.vue'

  export default {
    components: {
      NavBar
    },
    // methods: {
    //   validate() {
    //     axios.get(`${baseURL}/client/getAll`)
    //       .then((res)=>{
    //         console.log(res)
    //         if(res.data.status == 'Token is Invalid'){
    //           this.$router.push('/login')
    //         }
    //       })
    //   }
    // },
    // created() {
    //   this.validate()
    // }
  }
</script>

<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;

  }

  .main-container {
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }

</style>
