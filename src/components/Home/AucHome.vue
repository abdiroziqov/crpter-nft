<template>
  <section class="auction my-0 md:my-32">
    <div class="auction container md:flex justify-between gap-32">
      <div
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div class="auction__left mt-20 md:mt-0">
          <img src="@/assets/image/auction_img.jpg" alt="img" />
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div clas="auction__right">
          <div class="title font-bold text-[#23262F] text-6xl text-left mb-5">
            Marco carrillo®
          </div>
          <div class="users flex items-center justify-between text-left">
            <div class="user_left flex items-center gap-2">
              <div>
                <img
                  class="w-[40px] h-[40px]"
                  src="@/assets/image/avatar.png"
                  alt="user-img"
                />
              </div>
              <div>
                <h3>Creator</h3>
                <h4>Enrico Cole</h4>
              </div>
            </div>

            <div class="user_left flex items-center gap-2 text-left">
              <div>
                <img src="@/assets/image/avatar.png" alt="user-img" />
              </div>
              <div>
                <h3>Instant price</h3>
                <h4>3.5 ETH</h4>
              </div>
            </div>
          </div>
          <!-- bottom -->
          <div
            class="currency shadow-[0px_64px_64px_-48px_rgba(31,47,70,0.12)] my-10 rounded-3xl flex flex-col justify-center items-center p-8 bg-[#fcfcfd] border-2 border-solid border-[#e6e8ec]"
          >
            <div class="text-center">
              <h3 class="font-serif font-medium text-base text-[#23262F]">
                Current Bid
              </h3>
              <h4 class="font-bold text-5xl text-[#141416]">1.00 ETH</h4>
              <h5 class="font-serif font-semibold text-2xl text-[#777E91]">
                $3,618.36
              </h5>
            </div>

            <div class="mt-6">
              <h3 class="font-serif text-[#23262F] font-medium text-base">
                Auction ending in
              </h3>
            </div>
            <CountDown />
          </div>
          <div
            class="btn_blue text-center border-2 border-[#3772FF] rounded-[90px] hover:border-2 border-solid hover:border-[#3772FF] hover:text-black duration-300 hover:bg-[#FCFCFD] bg-[#3772FF] w-full px-6 py-4 text-white cursor-pointer font-bold mb-2"
          >
            Place a bid
          </div>
          <div
            class="btn_white text-center rounded-[90px] border-2 border-solid border-[#E6E8EC] w-full px-6 py-4 cursor-pointer font-bold text-[#23262F] hover:border-2 hover:border-solid hover:border-[#3772FF] duration-300"
          >
            View item
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CountDown from "../CountDown";
CountDown;
</script>
