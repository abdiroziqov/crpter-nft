<template>
  <section>
    <Swiper
        :slides-per-view="4"
        :space-between="8"
        :breakpoints="{
          '320': {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          '450': {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          '640': {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 8,
          },
        }"
        :modules="modules"
        class="mySwiper"
      >

        


      <SwiperSlide>
        <div class="box p-6 bg-[#F4F5F6] rounded-2xl">
            <div class="w-8 h-8 bg-[#45B36B] rounded-[32px] mb-3"></div>
            <h3 class="font-bold text-sm text-[#23262F]">Crypto Legend - Professor</h3>
        </div>
      </SwiperSlide>
       <SwiperSlide>
        <div class="box p-6 bg-[#F4F5F6] rounded-2xl">
            <div class="w-8 h-8 bg-[#45B36B] rounded-[32px] mb-3"></div>
            <h3 class="font-bold text-sm text-[#23262F]">Crypto Legend - Professor</h3>
        </div>
      </SwiperSlide>
       <SwiperSlide>
        <div class="box p-6 bg-[#F4F5F6] rounded-2xl">
            <div class="w-8 h-8 bg-[#45B36B] rounded-[32px] mb-3"></div>
            <h3 class="font-bold text-sm text-[#23262F]">Crypto Legend - Professor</h3>
        </div>
      </SwiperSlide>
       <SwiperSlide>
        <div class="box p-6 bg-[#F4F5F6] rounded-2xl">
            <div class="w-8 h-8 bg-[#45B36B] rounded-[32px] mb-3"></div>
            <h3 class="font-bold text-sm text-[#23262F]">Crypto Legend - Professor</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
 import 'swiper/css';
export default {
    components: {
      Swiper,
      SwiperSlide,
    },


}
</script>

<style>

</style>