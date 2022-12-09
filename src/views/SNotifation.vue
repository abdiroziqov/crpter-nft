<template>
  <Navbar />
  <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="600" data-aos-once="true">
    <div class="mt-20 md:mt-32 mb-24 flex justify-center">
      <img src="@/assets/image/search-img-hero.png" alt="image" />
    </div>
  </div>

  <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="600" data-aos-once="true">
    <div class="text-center flex items-center flex-col">
      <h3 class="title max-w-[736px]">
        Sorry, we couldn’t find any results for this search.
      </h3>
      <h4 class="font-['popins'] font-normal text-[#777E91] mt-2 mb-6">
        Maybe give one of these a try?
      </h4>
      <div class="flex relative items-center mb-12 min-w-[300px] max-w-full">
        <input
          class="relative w-full outline-none border-2 border-solid px-[12px] py-4 border-[#E6E8EC] rounded-[90px] text-[#777E91] text-sm"
          placeholder="Enter your email"
          type="email"
          required
        />
        <img
          class="absolute right-3 p-1 w-8 h-8 bg-[#3772FF] rounded-[100px]"
          src="@/assets/icon/arrow-white.svg"
          alt="icon"
        />
      </div>
    </div>
  </div>

  <div data-aos="zoom-out-up" data-aos-delay="400" data-aos-duration="600" data-aos-once="true">
    <div class="mt-24 container">
      <h3 class="text1 font-['popins'] text-center mb-12">Explore more</h3>

      <Swiper
        :slides-per-view="4"
        :space-between="20"
        :breakpoints="{
          '320': {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          '450': {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          '640': {
            slidesPerView: 2.6,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 2.8,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 3.4,
            spaceBetween: 20,
          },
          '1200': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide>
          <div
            class="duration-300 hover:bg-white hover:shadow-[0px_24px_24px_-16px_rgba(15,15,15,0.2)] flex w-full gap-3 p-2.5 border border-solid border-[#E6E8EC] rounded-[76px]"
          >
            <img src="@/assets/icon/search-notif1.png" alt="icon" />
            <div>
              <h3 class="text-[#141416] font-medium font-['popins']">
                Artwork
              </h3>
              <h4 class="text font-['popins']">138 items</h4>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            class="duration-300 hover:bg-white hover:shadow-[0px_24px_24px_-16px_rgba(15,15,15,0.2)] flex w-full gap-3 p-2.5 border border-solid border-[#E6E8EC] rounded-[76px]"
          >
            <img src="@/assets/icon/search-notif2.png" alt="icon" />
            <div>
              <h3 class="text-[#141416] font-medium font-['popins']">
                Artwork
              </h3>
              <h4 class="text font-['popins']">138 items</h4>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            class="hover:bg-white duration-300 hover:shadow-[0px_24px_24px_-16px_rgba(15,15,15,0.2)] flex w-full gap-3 p-2.5 border border-solid border-[#E6E8EC] rounded-[76px]"
          >
            <img src="@/assets/icon/search-notif3.png" alt="icon" />
            <div>
              <h3 class="text-[#141416] font-medium font-['popins']">
                Artwork
              </h3>
              <h4 class="text font-['popins']">138 items</h4>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            class="mb-[136px] duration-300 hover:bg-white hover:shadow-[0px_24px_24px_-16px_rgba(15,15,15,0.2)] flex w-full gap-3 p-2.5 border border-solid border-[#E6E8EC] rounded-[76px]"
          >
            <img src="@/assets/icon/search-notif4.png" alt="icon" />
            <div>
              <h3 class="text-[#141416] font-medium font-['popins']">
                Artwork
              </h3>
              <h4 class="text font-['popins']">138 items</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

Swiper;
SwiperSlide;

Navbar;
Footer;
</script>

<style></style>
