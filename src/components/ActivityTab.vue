<template>
  <div class="w-full py-16">
    <TabGroup>
      <TabList class="flex space-x-1 rounded-xl p-1 w-[308px]">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-[100px] py-1.5 px-3 text-sm font-bold leading-5 text-[#777E91] outline-none',
              selected
                ? 'bg-[#353945] shadow text-[#FCFCFD]'
                : ' hover:bg-white/[0.12] text-[#777E91]',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-8">
        <TabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          :class="['max-w-[640px]', 'outline-none']"
        >
          <div
            v-for="post in posts"
            :key="post.id"
            class="py-4 pr-5 pl-4 flex items-center gap-6 hover:bg-[#F4F5F6] rounded-[20px] duration-300 mb-5 justify-between"
          >
            <div class="flex gap-6">
              <div>
                <img
                  class="min-w-[64px] w-16"
                  :src="post.img_url"
                  alt="image"
                />
              </div>

              <div>
                <h3 class="font-medium md:text1 font-['popins'] text-[#141416]">
                  {{ post.title }}
                </h3>
                <h4
                  class="font-['popins'] font-normal text-[#353945] text-xs md:text-base"
                >
                  {{ post.subtitle }}
                </h4>
                <h5
                  class="font-['popins'] font-semibold text-xs text-[#777E91]"
                >
                  {{ post.number }}
                </h5>
              </div>
            </div>
            <div class="w-3 h-3 p-1 bg-[#3772FF] rounded-2xl"></div>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import WButton from "@/components/WButton";

const categories = ref({
  Activity: [
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
  ],
  Following: [
    {
      img_url: require("@/assets/icon/notif-img5.png"),
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
  ],
  Allactivity: [
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
  ],
});
</script>
