<template>

    <div id="nav">
        <router-link to="/" id="home">Home</router-link>
        <router-link to="/Login">Login</router-link>
        <router-link to="/Signup">Signup</router-link>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
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