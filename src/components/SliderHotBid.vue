<template>
  <div
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="700"
    data-aos-once="true"
  >
    <div class="section">
      <div class="slider__title flex items-center justify-between">
        <h3 class="font-bold text-4xl text-[#23262F]">Hot Bid</h3>
        <div class="gap-2 flex">
          <button id="prevEl"  class="cursor-pointer hover:border-2 w-10 h-10 flex items-center justify-center duration-300 solid hover:border-[#E6E8EC] rounded-[40px]">
            <img
              src="@/assets/icon/slider-arrow-left.svg"
              alt="icon"
            />
          </button>
          <button id="nextEl" class="cursor-pointer w-10 h-10 flex justify-center items-center duration-300 hover:border-2 solid hover:border-[#E6E8EC] rounded-[40px]">
            <img
              class="rotate-180"
              src="@/assets/icon/slider-arrow-left.svg"
              alt="icon"
            />
          </button>
        </div>
      </div>
      <div>
        <div class="slider__item mt-16">
          <Swiper
            :slides-per-view="3"
            :space-between="32"
            :navigation="{
              nextEl: '#nextEl',
              prevEl: '#prevEl',
            }"
            :breakpoints="{
              '320': {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              '450': {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              '640': {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              '768': {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              '900': {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              '1024': {
                slidesPerView: 4,
                spaceBetween: 32,
              },
            }"
            :modules="modules"
            class="mySwiper"
          >
            <SwiperSlide>
              <div class="flex-col">
                <div>
                  <img
                    class="rounded-2xl w-full"
                    src="@/assets/image/hotbid-img1.png"
                    alt="image"
                  />
                </div>
                <div class="hotbid__text">
                  <div class="flex justify-between items-center mt-5">
                    <h3 class="subtitle">Black Golden Tiger</h3>
                    <h4
                      class="border-2 border-solid border-[#45B36B] text-center rounded p-2 font-bold text-xs uppercase text-[#45B36B]"
                    >
                      2.45 ETH
                    </h4>
                  </div>
                  <div class="flex justify-between items-center my-3">
                    <div>
                      <img
                        src="@/assets/icon/upload-right-avatars.svg"
                        alt="avatar"
                      />
                    </div>
                    <h3 class="subtitle text-[#353945]">3 in stock</h3>
                  </div>
                  <div
                    class="flex justify-between items-center border-t border-solid border-[#E6E8EC] pt-3"
                  >
                    <div class="flex gap-1 items-center">
                      <div>
                        <img
                          src="@/assets/icon/upload-right-candlestick.svg"
                          alt=""
                        />
                      </div>
                      <h3 class="text-[#777E91] font-normal text-xs">
                        Highest bid
                      </h3>
                      <h4 class="text-[#353945] text-xs font-semibold">
                        0.001 ETH
                      </h4>
                    </div>
                    <div>
                      <img src="@/assets/icon/upload-right-newbid.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="flex-col">
                <div>
                  <img
                    class="rounded-2xl w-full"
                    src="@/assets/image/hotbid-img2.png"
                    alt="image"
                  />
                </div>
                <div class="hotbid__text">
                  <div class="flex justify-between items-center mt-5">
                    <h3 class="subtitle">Black Golden Tiger</h3>
                    <h4
                      class="border-2 border-solid border-[#45B36B] text-center rounded p-2 font-bold text-xs uppercase text-[#45B36B]"
                    >
                      2.45 ETH
                    </h4>
                  </div>
                  <div class="flex justify-between items-center my-3">
                    <div>
                      <img
                        src="@/assets/icon/upload-right-avatars.svg"
                        alt="avatar"
                      />
                    </div>
                    <h3 class="subtitle text-[#353945]">3 in stock</h3>
                  </div>
                  <div
                    class="flex justify-between items-center border-t border-solid border-[#E6E8EC] pt-3"
                  >
                    <div class="flex gap-1 items-center">
                      <div>
                        <img
                          src="@/assets/icon/upload-right-candlestick.svg"
                          alt=""
                        />
                      </div>
                      <h3 class="text-[#777E91] font-normal text-xs">
                        Highest bid
                      </h3>
                      <h4 class="text-[#353945] text-xs font-semibold">
                        0.001 ETH
                      </h4>
                    </div>
                    <div>
                      <img src="@/assets/icon/upload-right-newbid.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="flex-col">
                <div>
                  <img
                    class="rounded-2xl w-full"
                    src="@/assets/image/hotbid-img3.png"
                    alt="image"
                  />
                </div>
                <div class="hotbid__text">
                  <div class="flex justify-between items-center mt-5">
                    <h3 class="subtitle">Black Golden Tiger</h3>
                    <h4
                      class="border-2 border-solid border-[#45B36B] text-center rounded p-2 font-bold text-xs uppercase text-[#45B36B]"
                    >
                      2.45 ETH
                    </h4>
                  </div>
                  <div class="flex justify-between items-center my-3">
                    <div>
                      <img
                        src="@/assets/icon/upload-right-avatars.svg"
                        alt="avatar"
                      />
                    </div>
                    <h3 class="subtitle text-[#353945]">3 in stock</h3>
                  </div>
                  <div
                    class="flex justify-between items-center border-t border-solid border-[#E6E8EC] pt-3"
                  >
                    <div class="flex gap-1 items-center">
                      <div>
                        <img
                          src="@/assets/icon/upload-right-candlestick.svg"
                          alt=""
                        />
                      </div>
                      <h3 class="text-[#777E91] font-normal text-xs">
                        Highest bid
                      </h3>
                      <h4 class="text-[#353945] text-xs font-semibold">
                        0.001 ETH
                      </h4>
                    </div>
                    <div>
                      <img src="@/assets/icon/upload-right-newbid.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="flex-col">
                <div>
                  <img
                    class="w-full"
                    src="@/assets/image/hotbid-img4.png"
                    alt="image"
                  />
                </div>
                <div class="hotbid__text">
                  <div class="flex justify-between items-center mt-5">
                    <h3 class="subtitle">Black Golden Tiger</h3>
                    <h4
                      class="border-2 border-solid border-[#45B36B] text-center rounded p-2 font-bold text-xs uppercase text-[#45B36B]"
                    >
                      2.45 ETH
                    </h4>
                  </div>
                  <div class="flex justify-between items-center my-3">
                    <div>
                      <img
                        src="@/assets/icon/upload-right-avatars.svg"
                        alt="avatar"
                      />
                    </div>
                    <h3 class="subtitle text-[#353945]">3 in stock</h3>
                  </div>
                  <div
                    class="flex justify-between items-center border-t border-solid border-[#E6E8EC] pt-3"
                  >
                    <div class="flex gap-1 items-center">
                      <div>
                        <img
                          src="@/assets/icon/upload-right-candlestick.svg"
                          alt=""
                        />
                      </div>
                      <h3 class="text-[#777E91] font-normal text-xs">
                        Highest bid
                      </h3>
                      <h4 class="text-[#353945] text-xs font-semibold">
                        0.001 ETH
                      </h4>
                    </div>
                    <div>
                      <img src="@/assets/icon/upload-right-newbid.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
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
