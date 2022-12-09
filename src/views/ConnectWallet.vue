<template>
  <section>
    <Navbar />
    <Wallet/>
    <Footer />
  </section>
</template>

<script setup>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wallet from "../components/Wallet/Wallet";

  components: {
    Navbar;
    Footer;
    Wallet;
};
</script>
