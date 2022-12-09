<template>
  <Navbar />
  <section class="container">
    <div
      data-aos="fade-down"
      data-aos-delay="400"
      data-aos-duration="600"
      data-aos-once="true"
    >
      <div class="relative">
        <input
          class="w-full bg-inherit focus:border-[#3772FF] relative border-2 rounded-xl pl-4 pr-6 py-3.5 mb-6 md:mb-12 md:py-2 md:pl-4 md:pr-2 items-center mt-16 md:border-t-0 md:border-x-0 md:rounded-none md:mt-20 flex justify-between md:!border-b border-solid border-[#E6E8EC] md:pb-10 outline-none"
          type="text"
          placeholder="Type your keywords"
        />

        <div class="absolute top-4 right-1.5 md:top-0 md:right-0">
          <img
            class="hidden md:block p-3 bg-[#3772FF] rounded-[100px]"
            src="@/assets/icon/search-white.svg"
            alt="icon"
          />
          <img
            class="block md:hidden"
            src="@/assets/icon/search.svg"
            alt="icon"
          />
        </div>
      </div>
    </div>
  </section>

  <div class="container">
    <div class="gap-8 justify-between md:flex">
      <div
        data-aos="fade-rigt"
        data-aos-delay="500"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <div>
          <SDropdown />
          <div class="mt-14">
            <label
              class="font-['popins'] font-bold text-xs uppercase text-[#B1B5C4] mb-3.5"
              >Price Range</label
            >
            <PriceSlider />
            <div
              class="flex justify-between font-['poppins'] font-medium text-sm text-[#23262F] mb-6"
            >
              <p>0.01 ETH</p>
              <p>10 ETH</p>
            </div>
          </div>

          <div class="mt-6 pt-6 border-t border-solid border-[#E6E8EC]">
            <label
              class="font-['popins'] font-bold text-xs uppercase text-[#B1B5C4] mb-4"
              >likes</label
            >
            <SDropdown class="mt-3" :items="arr" />
          </div>
          <div>
            <h3
              class="font-['popins'] font-bold text-xs uppercase text-[#B1B5C4] my-4"
            >
              Open
            </h3>
            <SDropdown :items="arrs" />
          </div>
          <div class="border-b border-solid border-[#E6E8EC] pb-6">
            <h3
              class="font-['popins'] font-bold text-xs uppercase text-[#B1B5C4] my-4"
            >
              Creator
            </h3>
            <SDropdown :items="creator" />
          </div>
          <div class="flex gap-2.5 mt-6 items-center cursor-pointer">
            <img src="@/assets/icon/search-filter.png" alt="icon" />
            <h3 class="font-bold text-sm text-[#23262F]">Reset filter</h3>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <div>
          <Tab />
        </div>
      </div>

      <!-- <Example :items="arr" /> -->
    </div>
  </div>
  <Footer />
</template>

<script setup>
import SDropdown from "@/components/SearchDropdown";
import Navbar from "@/components/Navbar";
import Tab from "@/components/Tab";
import Footer from "@/components/Footer";
import PriceSlider from "@/components/PriceRangeSlider";

const arr = ["Most liked", "Less liked", "Norm liked"];
const arrs = ["Colors", "All colors", "Black", "Green", "Pink", "Purple"];
const creator = ["Verified only", "Verified one", "Verified two"];
</script>
