<template v-cloak>
    <body>
        <div class="Login-background">
            <form id="Login-form" @submit="login">
                <h1>Login page</h1>
                <div class="input-container">
                    <input type="email" class="login" name="email" v-model="email" placeholder="Email">
                </div>
                <div class="input-container">
                    <input type="password" class="login" name="password" v-model="password" placeholder="Senha">
                </div>
                <div class="input-container">
                    <input type="submit" class="submit-login" value="Login">
                </div>
            </form>
        </div>
    </body>
</template>

<script>
import axios from 'axios';
import { baseURL } from '@/constants/baseURL'

export default {
    name: "LoginForm",
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        login(e) {
            e.preventDefault();
            const data = {email:this.email, password: this.password}

            axios.post(`${baseURL}/user/login`, data)
                .then((res)=> {
                    localStorage.setItem('token', res.data.token)
                    this.$router.push('/')
                })
                .catch((err)=>{
                    console.log(err.response)
                })
        }
    }
}
</script>

<style scoped>
.Login-background {
    background: rgb(198, 198, 198);
    min-width: 30vw;
    min-height: 30vh;
    padding: 2rem;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 1);
    border-radius: 8px
}
body {
    /* min-height: 100vh;
        min-width: 100vw; */
    display: flex;
    /* align-items: center; */
    justify-content: center;
}

.input-container {
    display: flex;
    flex-direction: column;
    margin: 20px;
}

.login {
    font-size: 3vh;
    height: 5vh;
    outline: none;
}

.submit-login {
    background-color: #222;
    color: rgb(202, 39, 39);
    font-weight: bold;
    border: 2px solid #222;
    width: 20vw;
    height: 7vh;
    padding: 17px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
    border-radius: 30%;
}

#Login-form {
    max-width: 30vw;
    margin: 0 auto;
    justify-content: flex-start;
}
#Login-form h1 {
    font-size: 5vw;
}

.submit-login:hover {
    background-color: transparent;
    color: #222;
}
</style>