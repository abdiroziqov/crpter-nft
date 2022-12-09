<template>
  <Navbar />
  <div class="container">
    <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="600" data-aos-once="true">
      <div class="mt-20 md:mt-32 mb-24 flex justify-center">
        <img src="@/assets/image/search-img-hero.png" alt="image" />
      </div>
    </div>
    <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="600" data-aos-once="true">
      <div class="text-center flex items-center flex-col mb-16">
        <h3 class="title max-w-[736px]">
          404 page - Not Found 
        </h3>
        <h4 class="font-['popins'] font-normal text-[#777E91] mt-4 mb-6">
          Oppps something went wrong man 
        </h4>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
</script>

<style></style>
