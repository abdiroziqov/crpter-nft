<template>
  <NavbarTwo />
  <div class="container py-14 md:flex justify-between gap-8">
    <div
      class="relative"
      data-aos="fade-right"
      data-aos-delay="400"
      data-aos-duration="600"
      data-aos-once="true"
    >
      <img src="@/assets/image/auction_img.jpg" alt="" />
      <div class="flex gap-2 absolute top-6 left-6">
        <h4
          class="px-2 pt-2 pb-1.5 font-['poppins'] bg-[#23262F] rounded-[4px] font-bold text-xs uppercase text-[#FCFCFD]"
        >
          Art
        </h4>
        <h4
          class="px-2 pt-2 pb-1.5 font-['poppins'] bg-[#9757D7] rounded-[4px] font-bold text-xs uppercase text-[#FCFCFD]"
        >
          Unlockable
        </h4>
      </div>
    </div>
    <div
      data-aos="fade-left"
      data-aos-delay="400"
      data-aos-duration="600"
      data-aos-once="true"
    >
      <div class="mt-5 md:mt-0">
        <h3 class="font-bold text-4xl text-[#23262F]">The amazing art</h3>
        <div class="flex gap-2 items-center mt-2">
          <p
            class="font-bold text-[#45B36B] px-2 pt-2 pb-1.5 rounded-[4px] border-2 border-solid border-[#45B36B]"
          >
            2.5 ETH
          </p>
          <p
            class="font-bold text-[#777E91] px-2 pt-2 pb-1.5 rounded-[4px] border-2 border-solid border-[#E6E8EC]"
          >
            $4,429.87
          </p>
          <p class="font-bold text-[#777E91]">10 in stock</p>
        </div>
        <h5
          class="font-['poppins'] font-normal text-[#777E91] max-w-[384px] py-10"
        >
          This NFT Card will give you Access to Special Airdrops. To learn more
          about UI8 please visit
          <router-link
            class="text-[#23262F] hover:opacity-80"
            to="https://ui8.net"
            >https://ui8.net</router-link
          >
        </h5>
      </div>

      <ItemTab />

      <div
        class="p-6 border border-solid rounded-2xl border-[#E6E8EC] shadow-[0px_64px_64px_-48px_rgba(31,47,70,0.12)]"
      >
        <div class="flex gap-4 mb-8">
          <img
            class="w-12 bg-center object-contain"
            src="@/assets/icon/avatarka.png"
            alt=""
          />
          <div>
            <h3 class="font-['poppins'] font-medium text-[#777E91]">
              Highest bid by
              <span class="font-['poppins'] font-medium text-[#23262F]"
                >Kohaku Tora</span
              >
            </h3>
            <h3 class="font-['poppins'] font-semibold text-2xl text-[#23262F]">
              1.46 ETH
              <span
                class="font-['poppins'] text-2xl font-semibold text-[#777E91]"
                >$2,764.89</span
              >
            </h3>
          </div>
        </div>

        <div class="md:flex gap-2 w-full">
          <router-link to="">
            <button
              @click="toggleModal"
              class="w-full hover:bg-inherit hover:border-[#3772FF] hover:text-[#23262F] duration-300 font-bold text-[#FCFCFD] px-6 py-3 bg-[#3772FF] border-[#3772FF] border-2 border-solid rounded-[90px]"
            >
              Purchase now
            </button>
          </router-link>

          <router-link to="#">
            <WButton class="mt-3 md:m-0 w-full justify-center flex px-6 py-4"
              >Place a bid
            </WButton>
          </router-link>
        </div>

        <div class="font-['poppins'] gap-3 mt-8">
          <h3 class="font-medium text-sm text-[#777E91]">
            Service fee <span class="mx-3 text-[#23262F]">1.5%</span>
            <span class="mr-3">2.563 ETH</span> <span>$4,540.62</span>
          </h3>
        </div>
      </div>
    </div>
  </div>

  <teleport to="#modal" class="modal duration-300" v-if="isOpen">
    <transition name="modals">
      <Modal @close="toggleModal">
        <ModalItem @close="toggleModal" />
      </Modal>
    </transition>
  </teleport>

  <Footer />
</template>

<script setup>
import { ref } from "vue";

import NavbarTwo from "@/components/NavbarTwo";
import ItemTab from "@/components/ItemTab";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal/Modal";
import ModalItem from "@/components/Modal/ModalItem";
import WButton from "@/components/WButton";

import ModalContent from "@/components/Modal/ModalContent";
const isOpen = ref(false);

const toggleModal = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
.modals-enter-active, 
.modals-leave-active {
  transition: opacity 3s ease;
}

.modals-enter-from,
.modals-leave-to {
  opacity: 0;
}

</style>
