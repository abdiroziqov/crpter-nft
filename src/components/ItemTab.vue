<template>
  <div class="pb-16">
    <TabGroup>
      <TabList
        class="flex gap-8 p-1.5 border-2 border-solid border-[#E6E8EC] rounded-[36px] md:w-[384px] mb-6"
      >
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full  py-2.5 text-sm font-medium leading-5 text-[#777E91] outline-none',
              'text-[#FCFCFD]',
              selected
                ? 'bg-[#353945] rounded-[100px] py-1.5 px-3'
                : 'text-black',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          :class="[
            'rounded-xl',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
          <ul>
            <li v-for="post in posts" :key="post" class="relative rounded-md">
              <div
                class="flex gap-4 items-center p-4 border-b border-solid border-[#E6E8EC]"
              >
                <img
                  class="w-12 object-cover bg-center"
                  :src="post.post_img"
                  alt="image"
                />
                <div>
                  <p
                    class="font-['poppins'] font-normal text-sm text-[#777E91]"
                  >
                    {{ post.title }}
                  </p>
                  <p
                    class="font-['poppins'] font-medium text-sm text-[#23262F]"
                  >
                    {{ post.subtitle }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const categories = ref({
  Info: [
    {
      post_img: require("@/assets/image/avatar.png"),
      title: "Owner",
      subtitle: "Raquel Will",
    },
    {
      post_img: require("@/assets/icon/avatarka.png"),
      title: "Creator",
      subtitle: "Selina Mayert",
    },
  ],
  Owners: [
    {
      id: 1,
      post_img: require("@/assets/image/avatar.png"),
      title: "Creator",
      subtitle: "Selina Mayert",
    },
    {
      id: 2,
      post_img: require("@/assets/icon/avatarka.png"),
      title: "Owner",
      subtitle: "Raquel Will",
    },
  ],
  History: [
    {
      id: 1,
      post_img: require("@/assets/icon/avatarka.png"),
      title: "Owner",
      subtitle: "Raquel Will",
    },
    {
      id: 2,
      post_img: require("@/assets/image/avatar.png"),
      title: "Creator",
      subtitle: "Selina Mayert",
    },
  ],
  Bids: [
    {
      id: 1,
      post_img: require("@/assets/icon/avatarka.png"),
      title: "Creator",
      subtitle: "Selina Mayert",
    },
    {
      id: 2,
      post_img: require("@/assets/image/avatar.png"),
      title: "Owner",
      subtitle: "Raquel Will",
    },
  ],
});
</script>
