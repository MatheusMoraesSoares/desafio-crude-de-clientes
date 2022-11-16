<template>
  <Banner />
  <div class="main-container">
    <LoginForm />
  </div>
</template>

<script>
  import Banner from '@/components/Banner.vue'
  import LoginForm from '@/components/LoginForm.vue'

  export default {
    name: "Login",
    components: {
      Banner,
      LoginForm
    }
  }
</script>
