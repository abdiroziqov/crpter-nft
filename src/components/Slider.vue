<template>
  <section class="bg-[#F4F5F6]">
    <Swiper
      :slides-per-view="5"
      :space-between="32"
      :navigation="{
        nextEl: '#nextEl',
        prevEl: '#prevEl',
      }"
      :breakpoints="{
        '320': {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        '450': {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        '640': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        '1024': {
          slidesPerView: 5,
          spaceBetween: 32,
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide>
        <div class="slider-item p-6 gap-1 bg-[#FCFCFD] rounded-xl">
          <div class="flex justify-between border-b border-solid pb-6">
            <div class="flex bg-[#3772FF] gap-1 rounded-3xl py-1 px-2">
              <img src="@/assets/icon/award.svg" alt="icon" />
              <p class="font-semibold text-[#FCFCFD] text-xs">
                #1
              </p>
            </div>
            <div class="flex gap-3">
              <div>
                <img
                  class="icon_img"
                  src="@/assets/icon/plus-square.svg"
                  alt="icon"
                />
              </div>
              <div>
                <img
                  class="icon_img"
                  src="@/assets/icon/arrow-corner.svg"
                  alt="icon"
                />
              </div>
            </div>
          </div>
          <div class="slider-img flex flex-col items-center mt-6">
            <div class="slider__img">
              <img src="@/assets/image/slider-img1.png" alt="image" />
            </div>
            <h3 class="my-3 text-sm font-medium">Edd Harris</h3>
            <div class="flex gap-1">
              <p class="font-medium text-xs text-[#353945]">2.456</p>
              <p class="text-[#777E91] font-normal text-xs">ETH</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="slider-item p-6 gap-1 bg-[#FCFCFD] rounded-xl">
          <div class="flex justify-between border-b border-solid pb-6">
            <div class="flex bg-[#9757D7] gap-1 rounded-3xl py-1 px-2">
              <img src="@/assets/icon/donut.svg" alt="icon" />
              <p class="font-semibold text-[#FCFCFD] text-xs">
                #2
              </p>
            </div>
            <div class="flex gap-3">
              <div>
                <img
                  class="icon_img"
                  src="@/assets/icon/plus-square.svg"
                  alt="icon"
                />
              </div>
              <div>
                <img
                  class="icon_img"
                  src="@/assets/icon/arrow-corner.svg"
                  alt="icon"
                />
              </div>
            </div>
          </div>
          <div class="slider-img flex flex-col items-center mt-6">
            <div class="slider__img">
              <img
                class="w-16"
                src="@/assets/image/slider-img2.png"
                alt="image"
              />
            </div>
            <h3 class="my-3 text-sm font-medium">Odell Hane</h3>
            <div class="flex gap-1">
              <p class="font-medium text-xs text-[#353945]">2.456</p>
              <p class="text-[#777E91] font-normal text-xs">ETH</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="slider-item p-6 gap-1 bg-[#FCFCFD] rounded-xl">
          <div class="flex justify-between border-b border-solid pb-6">
            <div class="flex bg-[#45B36B] gap-1 rounded-3xl py-1 px-2">
              <img src="@/assets/icon/lighting.svg" alt="icon" />
              <p class="font-semibold text-[#FCFCFD] text-xs">
                #3
              </p>
            </div>
            <div class="flex gap-3">
              <div>
                <img
                  class="icon_img"
                  src="@/assets/icon/plus-square.svg"
                  alt="icon"
                />
              </div>
              <div>
                <img
                  class="icon_img"
                  src="@/assets/icon/arrow-corner.svg"
                  alt="icon"
                />
              </div>
            </div>
          </div>
          <div class="slider-img flex flex-col items-center mt-6">
            <div>
              <img src="@/assets/image/slider-img3.png" alt="image" />
            </div>
            <h3 class="my-3 text-sm font-medium">Marlle Kuphall</h3>
            <div class="flex gap-1">
              <p class="font-medium text-xs text-[#353945]">2.456</p>
              <p class="text-[#777E91] font-normal text-xs">ETH</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="slider-item p-6 gap-1 bg-[#FCFCFD] rounded-xl">
          <div class="flex justify-between border-b border-solid pb-6">
            <div class="flex bg-[#23262F] gap-1 rounded-3xl py-1 px-2">
              <img src="@/assets/icon/donut.svg" alt="icon" />
              <p class="font-semibold text-[#FCFCFD] text-xs">
                #4
              </p>
            </div>
            <div class="flex gap-3">
              <div>
                <img
                  class="icon_img"
                  src="@/assets/icon/plus-square.svg"
                  alt="icon"
                />
              </div>
              <div>
                <img
                  class="icon_img"
                  src="@/assets/icon/arrow-corner.svg"
                  alt="icon"
                />
              </div>
            </div>
          </div>
          <div class="slider-img flex flex-col items-center mt-6">
            <div class="slider__img">
              <img src="@/assets/image/slider-img4.png" alt="image" />
            </div>
            <h3 class="my-3 text-sm font-medium">Payton Kunde</h3>
            <div class="flex gap-1">
              <p class="font-medium text-xs text-[#353945]">2.456</p>
              <p class="text-[#777E91] font-normal text-xs">ETH</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <div class="gap-2 flex justify-center mt-8">
        <button
          id="prevEl"
          class="cursor-pointer hover:border-2 w-10 h-10 flex justify-center items-center duration-300 border-solid hover:border-[#E6E8EC] rounded-[40px]"
        >
          <img src="@/assets/icon/slider-arrow-left.svg" alt="icon" />
        </button>
        <button
          id="nextEl"
          class="cursor-pointer w-10 h-10 flex justify-center items-center duration-300 hover:border-2 border-solid hover:border-[#E6E8EC] rounded-[40px]"
        >
          <img
            class="rotate-180"
            src="@/assets/icon/slider-arrow-left.svg"
            alt="icon"
          />
        </button>
      </div>
      <SwiperSlide>
        <div class="slider-item p-6 gap-1 bg-[#FCFCFD] rounded-xl">
          <div class="flex justify-between border-b border-solid pb-6">
            <div class="flex bg-[#777E91] gap-1 rounded-3xl py-1 px-2">
              <img src="@/assets/icon/donut.svg" alt="icon" />
              <p class="font-semibold text-[#FCFCFD] text-xs">
                #5
              </p>
            </div>
            <div class="flex gap-3">
              <div>
                <img
                  class="icon_img"
                  src="@/assets/icon/plus-square.svg"
                  alt="icon"
                />
              </div>
              <div>
                <img
                  class="icon_img"
                  src="@/assets/icon/arrow-corner.svg"
                  alt="icon"
                />
              </div>
            </div>
          </div>
          <div class="slider-img flex flex-col items-center mt-6">
            <div class="slider__img">
              <img src="@/assets/image/slider-img5.png" alt="image" />
            </div>
            <h3 class="my-3 text-sm font-medium">Payton Buckridge</h3>
            <div class="flex gap-1">
              <p class="font-medium text-xs text-[#353945]">2.456</p>
              <p class="text-[#777E91] font-normal text-xs">ETH</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

Swiper;
SwiperSlide;

const modules = [Navigation];
</script>

<style>
@media (min-width: 768px) and (max-width: 1400px) {
  .swiper-button-disabled {
    display: block;
  }
}
</style>
