<template>
  <section>
    <Navbar />
    <HTitle />
    <Ahome />
    <FeedHome />
    <CreatHome />
    <HotBid class="container pt-32"></HotBid>
    <Crypto />
    <Footer />
  </section>
</template>

<script setup>
import WButton from "@/components/WButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HotBid from "@/components/SliderHotBid";
import Ahome from "@/components/Home/AucHome";
import FeedHome from "@/components/Home/FeedHome";
import HTitle from "@/components/Home/HomeTitle";
import CreatHome from "@/components/Home/CreatHome";
import Crypto from "@/components/Home/HomeEarn";
</script>
