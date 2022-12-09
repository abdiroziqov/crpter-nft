<template>
  <div class="mt-12 md:mt-0 w-full">
    <TabGroup>
      <TabList class="flex flex-wrap gap-5">
        <Tab
          v-for="tab in tabs"
          :key="tab"
          @click="handleClick"
          class="py-1.5 px-3 rounded-[100px]"
          :style="{
            backgroundColor: active ? '#FCFCFD' : '#353945',
            color: active ? '#777E91' : '#FCFCFD',
          }"
          >{{ tab }}</Tab
        >
      </TabList>

      <TabPanels>
        <TabPanel
          class="gap-8 my-8 grid xs:grid-cols-1 xs:justify-center xm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="card in cards"
            :key="card"
            class="flex gap-8 xs:justify-center"
          >
            <div class="flex-col">
              <div>
                <img class="rounded-2xl" :src="card.card_img" alt="image" />
              </div>
              <div class="hotbid__text">
                <div class="flex justify-between items-center mt-5">
                  <h3 class="subtitle">{{ card.subtitle }}</h3>
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
          </div>
        </TabPanel>
        <TabPanel>
          <h3 class="mt-20">
            3Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            reprehenderit voluptatum at dicta vero. Repellat odit voluptates
            harum cumque quibusdam. Illum deserunt corrupti inventore
            praesentium exercitationem ullam illo saepe consectetur.
          </h3></TabPanel
        >
        <TabPanel>
          <h3 class="mt-20">
            2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            reprehenderit voluptatum at dicta vero. Repellat odit voluptates
            harum cumque quibusdam. Illum deserunt corrupti inventore
            praesentium exercitationem ullam illo saepe consectetur.
          </h3></TabPanel
        >
        <TabPanel>
          <h3 class="mt-20">
            1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            reprehenderit voluptatum at dicta vero. Repellat odit voluptates
            harum cumque quibusdam. Illum deserunt corrupti inventore
            praesentium exercitationem ullam illo saepe consectetur.
          </h3>
        </TabPanel>
        <TabPanel>
          <div
            v-for="item in items"
            :key="item"
            class="flex justify-between w-full mt-12 pb-8 border-b border-solid border-[#E6E8EC] gap-14"
          >
            <div class="flex items-center w-full md:w-auto xs:justify-between">
              <div class="flex items-center gap-5">
                <div>
                  <img
                    class="min-w-[88px] min-h-[88px]"
                    :src="item.follower_avatar"
                    alt=""
                  />
                </div>

                <div>
                  <h3 class="font-['poppins'] font-medium text-[#23262F]">
                    Sally Fadel
                  </h3>
                  <p
                    class="font-['poppins'] font-normal text-xs text-[#777E91] mb-0 md:mb-3"
                  >
                    161 followers
                  </p>
                  <button
                    class="bg-inherit border-2 border-solid border-[#E6E8EC] hover:border-[#3772FF] px-3 py-2 rounded-[90px] xs:hidden md:block"
                  >
                    Unfollow
                  </button>
                </div>
              </div>
              <button
                class="bg-inherit border-2 border-solid border-[#E6E8EC] hover:border-[#3772FF] px-3 py-2 rounded-[90px] md:hidden"
              >
                Unfollow
              </button>
            </div>

            <swiper
              :slides-per-view="4"
              :space-between="8"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              :breakpoints="{
                '768': {
                  slidesPerView: 3.1,
                },
                '900': {
                  slidesPerView: 3.2,
                },
                '1090': {
                  slidesPerView: 3.4,
                },
                '1124': {
                  slidesPerView: 3.6,
                },
                '1200': {
                  slidesPerView: 4,
                },
              }"
              class="!w-[472px] hidden md:block m-0"
            >
              <swiper-slide
                v-for="slide in sliders"
                :key="slide"
                class="!w-[112px] !h-[88px]"
              >
                <img class="rounded-xl" :src="slide.slide_img" alt="image" />
              </swiper-slide>
            </swiper>
          </div>
        </TabPanel>

        <TabPanel>
          <div
            v-for="item in items"
            :key="item"
            class="flex justify-between w-full mt-12 pb-8 border-b border-solid border-[#E6E8EC] gap-14"
          >
            <div class="flex items-center w-full md:w-auto xs:justify-between">
              <div class="flex items-center gap-5">
                <div>
                  <img
                    class="min-w-[88px] min-h-[88px]"
                    :src="item.follower_avatar"
                    alt=""
                  />
                </div>

                <div>
                  <h3 class="font-['poppins'] font-medium text-[#23262F]">
                    Sally Fadel
                  </h3>
                  <p
                    class="font-['poppins'] font-normal text-xs text-[#777E91] mb-0 md:mb-3"
                  >
                    161 followers
                  </p>
                  <button
                    class="bg-[#3772FF] border-[#3772FF] hover:bg-inherit hover:border-[#3772FF] border-2 border-solid hover:text-[#23262F] px-3 py-2 text-[#FCFCFD] duration-300 rounded-[90px] xs:hidden md:block"
                  >
                    Follow
                  </button>
                </div>
              </div>
              <button
                class="bg-[#3772FF] border-[#3772FF] hover:bg-inherit hover:border-[#3772FF] border-2 border-solid hover:text-[#23262F] px-3 py-2 text-[#FCFCFD] duration-300 rounded-[90px] md:hidden"
              >
                Follow
              </button>
            </div>

            <swiper
              :slides-per-view="4"
              :space-between="8"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              :breakpoints="{
                '768': {
                  slidesPerView: 3.1,
                },
                '900': {
                  slidesPerView: 3.2,
                },
                '1090': {
                  slidesPerView: 3.4,
                },
                '1124': {
                  slidesPerView: 3.6,
                },
                '1200': {
                  slidesPerView: 4,
                },
              }"
              class="!w-[472px] hidden md:block m-0"
            >
              <swiper-slide
                v-for="slide in sliders"
                :key="slide"
                class="!w-[112px] !h-[88px]"
              >
                <img class="rounded-xl" :src="slide.slide_img" alt="image" />
              </swiper-slide>
            </swiper>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { ref } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const active = ref(false);

const handleClick = () => {
  active.value = !active.value;
};

const tabs = [
  "On Sale",
  "Collectibles",
  "Created",
  "Likes",
  "Following",
  "Followers",
];

const cards = [
  {
    card_img: require("@/assets/image/hotbid-img1.png"),
    subtitle: "Amazing digital art",
  },
  {
    card_img: require("@/assets/image/hotbid-img2.png"),
    subtitle: "Colorful Keyboard",
  },
  {
    card_img: require("@/assets/image/hotbid-img3.png"),
    subtitle: "Black Golden Tiger",
  },
];

const sliders = [
  {
    slide_img: require("@/assets/image/followers-tab-img1.png"),
  },
  {
    slide_img: require("@/assets/image/followers-tab-img2.png"),
  },
  {
    slide_img: require("@/assets/image/followers-tab-img3.png"),
  },
  {
    slide_img: require("@/assets/image/followers-tab-img4.png"),
  },
  {
    slide_img: require("@/assets/image/followers-tab-img2.png"),
  },

  // {
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  // },
  // {
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  // },
  // {
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  // },
  // {
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  //   slide_img: require("@/assets/image/followers-tab-img2.png"),
  // },
];

const items = [
  {
    follower_avatar: require("@/assets/image/follower-avatar1.png"),
  },
  {
    follower_avatar: require("@/assets/image/follower-avatar1.png"),
  },
  {
    follower_avatar: require("@/assets/image/follower-avatar1.png"),
  },
  {
    follower_avatar: require("@/assets/image/follower-avatar1.png"),
  },
  {
    follower_avatar: require("@/assets/image/follower-avatar1.png"),
  },
];
</script>
