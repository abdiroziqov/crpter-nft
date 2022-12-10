<template>
  <div class="container">
    <div
      class="flex gap-4 items-center border-b border-solid border-[#E6E8EC] pb-10 mt-16"
    >
      <img class="w-10" src="@/assets/icon/chevron-left1.svg" alt="chevron" />
      <h3 class="font-bold text-2xl text-[#23262f] md:text-5xl">
        Connect your wallet
      </h3>
    </div>
    <!-- <div
      class="frame mt-20 md:flex justify-between items-center mb-16 md:mb-36 gap-10"
    >
      <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="600" data-aos-once="true">
        <div class="wallet-list mb-16 md:margin-0">
          <div class="item flex gap-8 items-center mb-16">
            <div class="p-5 bg-[#9757D7] rounded-[64px]">
              <img src="@/assets/icon/wallet-icons.svg" alt="" />
            </div>
            <h3 class="text1">Formatic</h3>
          </div>

          <div class="item flex gap-8 items-center mb-16">
            <div class="p-5 bg-[#3772FF] rounded-[64px]">
              <img src="@/assets/icon/wallet-icons.svg" alt="" />
            </div>
            <h3 class="text1">Coinbase Wallet</h3>
          </div>

          <div class="item flex gap-8 items-center mb-16">
            <div class="p-5 bg-[#45B36B] rounded-[64px]">
              <img src="@/assets/icon/wallet-icons.svg" alt="" />
            </div>
            <h3 class="text1">MyEtherWallet</h3>
          </div>

          <div class="item flex gap-8 items-center">
            <div class="p-5 bg-[#EF466F] rounded-[64px]">
              <img src="@/assets/icon/wallet-icons.svg" alt="" />
            </div>
            <h3 class="text1">Wallet Connect</h3>
          </div>
        </div>
      </div>

      <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="600" data-aos-once="true">
        <div class="wallet__img">
          <img src="@/assets/image/wallet-hero.png" alt="image" />
        </div>
      </div>
    </div> -->

    <div
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="700"
      data-aos-once="true"
    >
      <div class="tabs gap-16 flex justify-between pb-[120px] container pt-20">
        <pre>{{ index }}</pre>
        <TabGroup>
          <TabList
            class="hidden md:flex md:flex-col active:!border-none gap-10"
          >
            <Tab
              v-for="(item, index) of tabNavItems"
              :key="index"
              class="item flex gap-4 duration-300 items-center mb-16 !outline-none text-green-500"
              :class="{ 'text-red-500': index === activeTab }"
              @click="changeActiveTab(index)"
            >
              <div class="p-5 bg-[#9757D7] rounded-[64px]">
                <img :src="item.icon" alt="icon" />
              </div>
              {{ item.name }}
            </Tab>

            <!-- <Tab class="item flex gap-4 duration-300 hover:opacity-80 items-center mb-16 !outline-none">
              <div class="p-5 bg-[#3772FF] rounded-[64px]">
                <img src="@/assets/icon/wallet-icons.svg" alt="" />
              </div>
              <h3 class="text1">Coinbase Wallet</h3>
            </Tab>

            <Tab class="item flex gap-4 duration-300 hover:opacity-80 items-center mb-16 !outline-none">
              <div class="p-5 bg-[#45B36B] rounded-[64px]">
                <img src="@/assets/icon/wallet-icons.svg" alt="" />
              </div>
              <h3 class="text1">MyEtherWallet</h3>
            </Tab>

            <Tab class="item flex gap-4 duration-300 hover:opacity-80 items-center !outline-none">
              <div class="p-5 bg-[#EF466F] rounded-[64px]">
                <img src="@/assets/icon/wallet-icons.svg" alt="" />
              </div>
              <h3 class="text1">Wallet Connect</h3>
            </Tab> -->
          </TabList>
          <TabPanels>
            <TabPanel>
              <img src="@/assets/image/wallet-hero.png" alt="image" />
            </TabPanel>
            <TabPanel>
              <h3 class="title !text-[40px]">Scan to connect</h3>
              <p class="text font-['poppins'] mt-2 mb-6">
                Powered by UI8.Wallet
              </p>
              <div class="px-[67px] py-[83px] bg-[#F4F5F6] rounded-2xl">
                <div
                  class="p-[77px] bg-[#FCFCFD] rounded-xl border border-solid border-[#E6E8EC] shadow-[0px_64px_64px_-48px_rgba(31,47,70,0.12)]"
                >
                  <img src="@/assets/icon/barcode.png" alt="image" />
                </div>
              </div>
              <router-link to="#">
                <WButton class="mt-6">Don’t have a wallet app?</WButton>
              </router-link>
            </TabPanel>
            <TabPanel>
              <h3 class="title !text-[40px]">Terms of service</h3>
              <p class="text font-['poppins'] max-w-[448px] mt-2 mb-10">
                Please take a few minutes to read and understand
                <span class="text-[#23262F]"> Stacks Terms of Service.</span> To
                continue, you’ll need to accept the terms of services by
                checking the boxes.
              </p>
              <img
                class="h-40 w-[448px] object-cover bg-top rounded-xl"
                src="@/assets/image/wallet-hero.png"
                alt="image"
              />
              <div class="flex gap-3 mt-10 mb-3">
                <input id="check2" name="check2" type="checkbox" />
                <label
                  for="check2"
                  class="font-['poppins'] font-medium text-sm text-[#141416] cursor-pointer"
                  >I am at least 13 year old</label
                >
              </div>

              <div class="flex gap-3">
                <input
                  type="checkbox"
                  id="check1"
                  name="check1"
                  value="check"
                />
                <label
                  for="check1"
                  class="font-['poppins'] font-medium text-sm text-[#141416] cursor-pointer"
                  >I agree Stack terms of service</label
                >
              </div>
              <div class="md:flex gap-2 mt-10">
                <div>
                  <button
                    class="mb-4 md:m-0 w-full py-2.5 px-6 bg-[#3772FF] rounded-[90px] font-bold text-[#FCFCFD] flex gap-3 items-center justify-center border-2 border-[#3772FF] hover:bg-inherit hover:border-2 border-solid hover:border-[#3772FF] hover:text-[#23262F] duration-300"
                  >
                    Cancel
                  </button>
                </div>
                <div>
                  <WButton class="w-full justify-center"
                    >Get started now</WButton
                  >
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <img
                class="w-[448px] h-[324px] object-cover rounded-xl"
                src="@/assets/image/wallet-hero.png"
                alt="image"
              />
              <p class="max-w-[448px] text-center mt-5 text font-['poppins']">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur enim ipsa, non assumenda corporis soluta ex aliquam
                odio, amet dolor animi, perspiciatis nemo. Voluptates harum
                tenetur qui, ex molestias ab!
              </p>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import WButton from "@/components/WButton";
import { reactive, ref } from "vue";

const tabNavItems = reactive([
  {
    name: "Formatic",
    icon: require("@/assets/icon/wallet-icons.svg"),
  },
  {
    name: "CoinbaseWallet",
    icon: require("@/assets/icon/wallet-icons.svg"),
  },
  {
    name: "MyEtherWallet",
    icon: require("@/assets/icon/wallet-icons.svg"),
  },
  {
    name: "WalletConnect",
    icon: require("@/assets/icon/wallet-icons.svg"),
  },
]);

const activeTab = ref(0);

function changeActiveTab(newTab) {
  activeTab.value = newTab;
}
</script>
