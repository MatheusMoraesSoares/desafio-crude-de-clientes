<template>
  <div class="main-container">
    <h1>Lista de clientes</h1>
    <ClientsList />
  </div>
</template>

<script>
import ClientsList from '@/components/ClientsList.vue';

export default {
  name: "Home",
  components: {
    ClientsList
  }
}
</script>
