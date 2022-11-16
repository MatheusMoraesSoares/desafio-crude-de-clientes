<template>
  <Banner title="clients list"/>
  <div class="main-container">
    <h1>Lista de clientes</h1>
    <ClientsList />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import ClientsList from '@/components/ClientsList.vue';

export default {
  name: "Home",
  components: {
    Banner,
    ClientsList
  }
}
</script>
