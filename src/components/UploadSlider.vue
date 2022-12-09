<template>
  <div class="w-[728px]">
    <swiper
      :slides-per-view="3.2"
      :space-between="8"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="slide in sliders"
        :key="slide"
        class="p-6 bg-[#F4F5F6] rounded-2xl w-40 h-32 hover:opacity-60"
      >
        <p
          :style="{ 'background-color': slide.hex }"
          class="w-8 h-8 rounded-[32px] mb-3"
        ></p>
        <h3 class="font-bold text-sm text-[#23262F]">{{ slide.title }}</h3>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const sliders = [
  {
    hex: "#23262F",
    title: "Create collection",
  },
  {
    hex: "#45B36B",
    title: "Crypto Legend - Professor",
  },
  {
    hex: "#EF466F",
    title: "Crypto Legend - Professo",
  },
  {
    hex: "#3772FF",
    title: " Crypto Legend - Professor",
  },
];
</script>