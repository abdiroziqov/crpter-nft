<template>
  <form class="container md:flex gap-10 pt-16" @submit.prevent>
    <div class="w-full">
      <div>
        <label class="font-['poppins'] font-medium leading-6 text-[#23262F]"
          >Account info</label
        >
      </div>
      <div class="mt-8">
        <label
          class="mb-3 font-['poppins'] font-bold text-xs uppercase text-[#B1B5C4] block"
          >portfolio or websitee</label
        >
        <input
          class="mb-8 w-full font-['poppins'] font-medium outline-none text-sm text-[#777E91] py-3 px-4 focus:border-[#3772FF] border-2 border-solid boder-[#E6E8EC] rounded-xl"
          type="text"
          v-model="inputName"
          placeholder="Enter URL"
        />
      </div>
      <div class="">
        <label
          class="mb-3 font-['poppins'] font-bold text-xs uppercase text-[#B1B5C4] block"
          >Custom url</label
        >
        <input
          class="mb-8 w-full font-['poppins'] font-medium outline-none text-sm text-[#777E91] py-3 px-4 focus:border-[#3772FF] border-2 border-solid boder-[#E6E8EC] rounded-xl"
          type="text"
          v-model="inputUrl"
          placeholder="ui8.net/Your custom URL"
        />
      </div>
      <div class="">
        <label
          class="mb-3 font-['poppins'] font-bold text-xs uppercase text-[#B1B5C4] block"
          >Bio</label
        >
        <textarea
          class="w-full min-h-[96px] font-['poppins'] font-medium outline-none text-sm text-[#777E91] py-3 px-4 focus:border-[#3772FF] border-2 border-solid boder-[#E6E8EC] rounded-xl"
          v-model="inputBio"
          placeholder="About yourselt in a few words"
        ></textarea>
      </div>
    </div>

    <div class="w-full mt-8 md:m-0">
      <div>
        <label class="font-['poppins'] font-medium leading-6 text-[#23262F]"
          >Social</label
        >
      </div>
      <div class="mt-8">
        <label
          class="mb-3 font-['poppins'] font-bold text-xs uppercase text-[#B1B5C4] block"
          >display name</label
        >
        <input
          class="mb-8 w-full font-['poppins'] font-medium outline-none text-sm text-[#777E91] py-3 px-4 focus:border-[#3772FF] border-2 border-solid boder-[#E6E8EC] rounded-xl"
          type="text"
          v-model="inputNames"
          placeholder="Enter your display name"
        />
      </div>
      <div class="relative">
        <label
          class="mb-3 font-['poppins'] font-bold text-xs uppercase text-[#B1B5C4] block"
          >Custom url</label
        >
        <div
          class="flex items-center focus:border-[#3772FF] border-2 border-solid boder-[#E6E8EC] rounded-xl"
        >
          <span class="prefix ml-4">@</span>
          <input
            class="rounded-xl bg-inherit pr-36 w-full font-['poppins'] font-medium outline-none text-sm text-[#777E91] py-3 border-none"
            v-model="inputUrls"
            type="text"
            placeholder="ui8.net/Your custom URL"
          />
          <WButton class="!absolute !right-3 !py-1.5 !pl-2 !pr-3"
            >Verify account</WButton
          >
        </div>
      </div>
      <div
        class="hover:border-[#3772FF] duration-300 relative w-[230px] mt-8 px-4 flex py-3 border-2 border-solid border-[#E6E8EC] rounded-[90px] items-center gap-3"
      >
        <div><img src="@/assets/icon/add-more.png" alt="" /></div>
        <button class="font-bold text-sm text-[#777E91]">
          Add more social account
        </button>
      </div>
    </div>
  </form>

  <div class="container pt-16 pb-10 border-b border-solid border-[#E6E8EC]">
    <h5 class="font-['poppins'] font-regular text-sm text-[#777E91]">
      To update your settings you should sign message through your wallet. Click
      'Update profile' then sign the message
    </h5>
  </div>

  <div class="container flex gap-8 pt-10 pb-16 md:pb-32 items-center">
    <router-link to="">
      <button
        @click="toggleModal"
        class="hover:bg-inherit hover:border-[#3772FF] hover:text-[#23262F] duration-300 font-bold text-[#FCFCFD] px-6 py-3 bg-[#3772FF] border-[#3772FF] border-2 border-solid rounded-[90px]"
      >
        Update Profile
      </button>
    </router-link>
    <div class="flex gap-2 cursor-pointer hover:opacity-75 duration-300" @click="clear">
      <div><img src="@/assets/icon/clear-all.png" alt="" /></div>
      <p class="font-bold text-[#777E91]">Clear all</p>
    </div>
  </div>
</template>

<script setup>
import WButton from "@/components/WButton";
import { ref } from "vue";
const inputName = ref("");
const inputUrl = ref("");
const inputBio = ref("");
const inputNames = ref("");
const inputUrls = ref("");

const clear = () => {
  inputName.value = "";
  inputUrl.value = "";
  inputBio.value = "";
  inputNames.value = "";
  inputUrls.value = "";
};
</script>
