<template>
  <div class="block md:hidden">
    <div>
      <nav
        class="container py-8 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <router-link class="flex gap-1 items-center" to="/">
            <img src="@/assets/icon/logo-icon.png" alt="logo" />
            <img src="@/assets/icon/logo-letter.svg" alt="logo" />
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400 duration-300"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <div
            class="divider w-[2px] h-10 bg-[#E6E8EC] rounded-sm hidden md:block"
          ></div>
          <div></div>

          <!-- right bar -->
          <ul class="bars-nav justify-around flex gap-8">
            <li class="text-[#23262F] font-bold text-sm">
              <router-link to="/">Discover</router-link>
            </li>

            <li class="text-[#777E91] font-bold text-sm">
              <router-link to="/">How it work</router-link>
            </li>
          </ul>
          <div class="right_bar relative md:flex gap-6 items-center">
            <div class="flex">
              <div class="flex items-center relative w-full mb-5">
                <input
                  v-model="tacos"
                  type="text"
                  placeholder="Search"
                  class="focus:border-[#3772FF] outline-none w-full reative text-xs font-normal text-[#777E91] border-2 border-solid border-[#E6E8EC] rounded-lg pl-3 pr-[26px] py-[10px]"
                />
                <img
                  :class="tacos ? 'opacity-0' : 'opacity-1'"
                  class="absolute right-2"
                  src="@/assets/icon/search.svg"
                  alt="icon"
                />
                <button
                  @click="clear"
                  class="btn hidden absolute right-3"
                  :class="tacos ? active : ''"
                >
                  X
                </button>
              </div>

              <!-- notification -->
              <div class="notification min-w-[40px]">
                <img src="@/assets/icon/notification.svg" alt="notification" />
              </div>
            </div>
            <!-- notification -->
            <!-- buttons -->
            <div class="buttons md:flex gap-3">
              <div
                class="button_left hover:border-2 border-solid hover:border-[#3772FF] border-[#3772FF] border-2 hover:text-black duration-300 hover:bg-[#FCFCFD] justify-center max-h-10 cursor-pointer flex items-center font-bold text-sm text-[#FCFCFD] py-5 px-4 bg-[#3772FF] rounded-[90px]"
              >
                <button>
                  <router-link to="/upload">Upload</router-link>
                </button>
              </div>
              <!-- <WButton class="w-full mt-5 md:mt-0 justify-center">
                <router-link to="/connect-wallet"> </router-link>
              </WButton> -->

              <router-link
                class="w-full mt-5 md:mt-0 justify-center"
                to="/connect-wallet"
              >
                <WButton class="w-full mt-5 md:mt-0 justify-center"
                  >Connect Wallet</WButton
                >
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>

  <section
    class="hidden md:block relative py-5 border-none md:border-b md:border-solid md:border-[#E6E8EC]"
  >
    <div class="container flex items-center justify-between">
      <!-- left bar -->
      <div class="left_bar flex items-center gap-8">
        <div class="logo">
          <router-link class="flex gap-1 items-center" to="/">
            <img src="@/assets/icon/logo-icon.png" alt="logo" />
            <img src="@/assets/icon/logo-letter.svg" alt="logo" />
          </router-link>
        </div>
        <div class="divider w-[2px] h-10 bg-[#E6E8EC] rounded-sm"></div>
        <div>
          <ul class="bars-nav justify-around flex gap-8">
            <li class="text-[#23262F] font-bold text-sm">
              <router-link to="/">Discover</router-link>
            </li>
            <li class="text-[#777E91] font-bold text-sm">
              <router-link to="/">How it work</router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- right bar -->
      <div class="right_bar relative flex gap-6 items-center">
        <div class="flex items-center relative">
          <input
            v-model="tacos"
            type="text"
            placeholder="Search"
            class="focus:border-[#3772FF] outline-none reative text-xs font-normal text-[#777E91] border-2 border-solid border-[#E6E8EC] rounded-lg pl-3 pr-[26px] py-[10px] duration-300"
          />

          <img
            :class="tacos ? 'opacity-0' : 'opacity-1'"
            class="absolute right-2 duration-300"
            src="@/assets/icon/search.svg"
            alt="icon"
          />

          <button
            @click="clear"
            class="btn hidden absolute right-3 duration-200"
            :class="tacos ? active : ''"
          >
            X
          </button>
        </div>
        <!-- notification -->
        <div class="notification min-w-[40px]">
          <img src="@/assets/icon/notification.svg" alt="notification" />
        </div>
        <!-- notification -->
        <!-- buttons -->
        <div class="buttons flex gap-3 items-center">
          <div
            class="button_left hover:border-2 border-solid hover:border-[#3772FF] hover:text-black duration-300 hover:bg-[#FCFCFD] max-h-10 cursor-pointer flex items-center font-bold border-2 border-[#3772FF] text-sm text-[#FCFCFD] py-5 px-4 bg-[#3772FF] rounded-[90px]"
          >
            <button>
              <router-link to="/upload">Upload</router-link>
            </button>
          </div>
          <WButton>
            <router-link to="/connect-wallet">Connect Wallet </router-link>
          </WButton>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

import WButton from "./WButton.vue";
const showMenu = ref(false);

const tacos = ref("");

const active = "active";
const clear = () => {
  tacos.value = "";
};
</script>

<style scoped>
@media (min-width: 767px) and (max-width: 1024px) {
  .divider,
  .bars-nav {
    display: none !important;
  }
}
.btn.active {
  display: block;
}
</style>
