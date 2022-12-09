<template>
  <Navbar />

  <div class="border-b border-solid border-[#E6E8EC] py-6">
    <div class="container flex justify-between items-center">
      <div
        data-aos="fade-up-right"
        data-aos-delay="400"
        data-aos-duration="600"
      >
        <div class="relative">
          <router-link
            class="flex items-center gap-4 py-3 px-4 border-2 border-solid hover:border-[#3772FF] duration-300 border-[#E6E8EC] rounded-[90px] font-bold text-sm text-[#23262F]"
            to="/"
          >
            <img src="@/assets/icon/chevron-left.svg" alt="" />
            <button>Back to home</button>
          </router-link>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div class="hidden md:flex items-center gap-8">
          <router-link class="font-bold text-sm text-[#777E91]" to="/">
            Home
          </router-link>
          <div>
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.792893 0.792893C0.402369 1.18342 0.402369 1.81658 0.792893 2.20711L3.58579 5L0.792893 7.79289C0.402369 8.18342 0.402369 8.81658 0.792893 9.20711C1.18342 9.59763 1.81658 9.59763 2.20711 9.20711L5.70711 5.70711C6.09763 5.31658 6.09763 4.68342 5.70711 4.29289L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792893 0.792893Z"
                fill="#777E91"
              />
            </svg>
          </div>
          <h3 class="font-bold text-sm text-[#23262F]">Activity</h3>
        </div>
      </div>
    </div>
  </div>

  <div
    class="container md:flex justify-between gap-8 pt-10 md:pt-20 pb-[100px]"
  >
    <div>
      <div>
        <div class="flex justify-between items-center">
          <h3 class="title">Activity</h3>
          <WButton>Mark all as read</WButton>
        </div>
        <Tab />
      </div>
    </div>
    <div
      class="h-[555px] md:h-[565px] p-8 bg-[#FCFCFD] border border-solid border-[#E6E8EC] rounded-3xl shadow-[0px_40px_32px_-24px_rgba(15,15,15,0.12)]"
    >
      <h3 class="text1 font-[popins] mb-8">Filters</h3>
      <div>
        <div
          v-for="items in checkboxes"
          :key="items"
          class="flex gap-3 mb-6 cursor-pointer"
        >
          <input
            id="item"
            type="checkbox"
            name="item"
            value="item"
            v-model="items.item"
            :checked="checked"
          />
          <p
            class="font-['poppins'] font-medium text-sm text-[#141416]"
            for="item"
          >
            {{ items.item }}
          </p>
        </div>
      </div>
      <div
        class="flex gap-3 border-t border-solid border-[#E6E8EC] pt-8 justify-evenly"
      >
        <WButton class="!py-2 !px-3" @click="allCheck">Select All</WButton>
        <WButton class="!py-2 !px-3" @click="unCheck">Unselect All</WButton>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import Navbar from "@/components/Navbar";
import WButton from "@/components/WButton";
import Footer from "@/components/Footer";
import Tab from "@/components/ActivityTab";
import { ref } from "vue";

const checked = ref(false);
const option1 = [];

const notif = [
  {
    img_url: require("@/assets/icon/notif-img1.png"),
    title: "Something went wrong",
    subtitle: "Can't display activity card. Try again later",
    number: "2 days ago",
  },
  {
    img_url: require("@/assets/icon/notif-img2.png"),
    title: "UI8g",
    subtitle: "started following you ",
    number: "2 days ago",
  },
  {
    img_url: require("@/assets/icon/notif-img3.png"),
    title: "ETH received",
    subtitle: "0.08 ETH recived",
    number: "2 days ago",
  },
  {
    img_url: require("@/assets/icon/notif-img4.png"),
    title: "C O I N Z",
    subtitle: "purchased by You for 0.001 ETH from UI8",
    number: "2 days ago",
  },
  {
    img_url: require("@/assets/icon/notif-img5.png"),
    title: "ETH received",
    subtitle: "0.08 ETH recived",
    number: "2 days ago",
  },
  {
    img_url: require("@/assets/icon/notif-img6.png"),
    title: "C O I N Z",
    subtitle: "purchased by You for 0.001 ETH from UI8",
    number: "2 days ago",
  },
  {
    img_url: require("@/assets/icon/notif-img7.png"),
    title: "ETH received",
    subtitle: "0.08 ETH recived",
    number: "2 days ago",
  },
];

const checkboxes = [
  {
    item: "Sales",
  },
  {
    item: "Listings",
  },
  {
    item: "Bids",
  },
  {
    item: "Burns",
  },
  {
    item: "Followings",
  },
  {
    item: "Likes",
  },
  {
    item: "Purchase",
  },
  {
    item: "Transfers",
  },
];

const allCheck = () => {
  checked.value = true;
};
const unCheck = () => {
  checked.value = false;
};
</script>
