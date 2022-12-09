<template>
  <section class="free_cypto">
    <div class="container md:flex justify-between items-center py-20">
      <div class="items-center flex flex-col md:block md:items-end">
        <h3 class="text-[#777E91] uppercase font-bold">
          Save your time with Stacks
        </h3>
        <h4
          class="text-[#23262F] text-center md:text-left text-5xl md:text-6xl font-bold mt-3 mb-5"
        >
          Earn free crypto with Crypter
        </h4>
        <h5 class="text-[#777E91] font-normal">
          A creative agency that lead and inspire
        </h5>
        <div class="flex gap-4 mt-10">
          <router-link
            class="px-6 py-4 items:center hover:bg-white hover:text-black border border-solid border-[#3772FF] bg-[#3772FF] hover:border hover:border-solid hover:border-[#3772FF] duration-300 rounded-[90px] font-bold text-white"
            to="#"
            >Earn Now</router-link
          >
          <WButton>
            <router-link to="#">Discover more</router-link>
          </WButton>
        </div>
      </div>
      <div class="mt-10 md:mt-0">
        <img src="@/assets/image/free-crypto-img.png" alt="image" />
      </div>
    </div>
  </section>
</template>

<script setup>
import WButton from "@/components/WButton";

WButton;
</script>
