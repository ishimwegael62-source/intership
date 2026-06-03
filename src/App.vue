<script setup>
// import Home from './views/Home.vue'
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router'
import Footer from './Components/footer.vue';
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
  <!-- <Home /> --> 
</template>
