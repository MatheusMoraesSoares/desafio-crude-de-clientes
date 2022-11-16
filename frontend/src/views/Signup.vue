<template>
  <Banner/>
    <div class="main-container">
      <SignupForm />
    </div>
  </template>

<script>
  import Banner from '@/components/Banner.vue'
  import SignupForm from '@/components/SignupForm.vue';

  export default {
    name: "Signup",
    components: {
      Banner,
      SignupForm
    }
  }
</script>