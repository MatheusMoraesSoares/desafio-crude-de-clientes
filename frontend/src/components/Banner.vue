<template>
    <div id="main-banner">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: "Banner",
    data() {
        return {
            title: 'Clients list'
        }
    }
}
</script>

<style scoped>
#main-banner {
    background-image: url('https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png');
    background-position: 0 -250px;
    background-size: cover;
    height: 50vh;
    align-items: center;
    justify-content: flex-start;
}

#main-banner h1 {
    color: white;
    text-align: center;
    font-size: 6vh;
    padding: 2vh 4vw;
}
</style>