<template>
  <section>
    <Navbar />
    <Collectible />
    <Footer />
  </section>
</template>

<script setup>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.vue";
import Collectible from "../components/SingleCollect/SingleCollect";

name: "Home"

</script>

<style>
@media (min-width: 320px) and (max-width: 767px) {
  .left-side {
    width: 100%;
  }
}
</style>
