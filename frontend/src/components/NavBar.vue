<template>
    <div id="nav">
        <router-link to="/" id="home">Home</router-link>
        <router-link to="/client/insert">+Cliente</router-link>
        <router-link :key="store.logged" to="/Login" v-show="!store.logged">Login</router-link>{{store.count}}
        <router-link :key="store.logged" to="/Signup" v-show="!store.logged">Signup</router-link>
        <router-link :key="store.logged" to="/Login" :to="signout" v-on:click="signout" v-show="store.logged">Signout</router-link>
    </div>
</template>

<script>
import { store } from '@/store/store'

export default {
    name: 'NavBar',
    data() {
        return {
            store
        }
    },
    methods: {
        signout() {
            this.store.logged = localStorage.removeItem('token')
        }
    }
}
</script>

<style>
    #nav {
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    #nav a {
        font-size: 2vw 1vh;
        color: yellow;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }
    #nav a:hover {
        color: white;
    }

    #nav #home {
        margin: auto;
        margin-left: 0;
        justify-content: flex-start;
    }
</style>