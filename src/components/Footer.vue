<template>
  <section class="border-t border-solid border-[#E6E8EC] pt-20">
    <div data-aos="zoom-in-up" data-aos-once="true">
      <div class="container flex-wrap md:flex justify-between gap-5">
        <div
          class="footer__left border-b border-solid border-[#E6E8EC] md:border-none pb-8"
        >
          <div @click="scrollToTop">
            <router-link class="logo flex items-center gap-1" to="/">
              <img src="@/assets/icon/logo-icon.png" alt="" />
              <img src="@/assets/icon/logo.svg" alt="logo" />
            </router-link>
          </div>
          <h3 class="font-normal text-2xl text-[#23262F] mt-8 max-w-[256px]">
            The New Creative Economy.
          </h3>
        </div>
        <div
          class="footer__center mt-8 md:m-0 border-b border-solid border-[#E6E8EC] md:border-none pb-8"
        >
          <div>
            <h5 class="mb-10 text-[#23262F] font-medium">Crypter</h5>
            <ul>
              <li><router-link to="#">Discover</router-link></li>
              <li @click="scrollToTop" class="my-6">
                <router-link to="/connect-wallet">Connect wallet</router-link>
              </li>
              <li @click="scrollToTop">
                <router-link to="/faq">FAQ</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="footer__center mt-8 md:mt-0 border-b border-solid border-[#E6E8EC] md:border-none pb-8"
        >
          <div>
            <h5 class="mb-10 text-[#23262F] font-medium">Info</h5>
            <ul>
              <li><router-link to="#">Download</router-link></li>
              <li class="my-6"><router-link to="#">Demos</router-link></li>
              <li><router-link to="#"> Support</router-link></li>
            </ul>
          </div>
        </div>

        <div class="footer_right mt-8 md:mt-0">
          <h3 class="text-[#23262F] font-medium">Join Newsletter</h3>
          <h4
            class="mt-10 mb-6 font-normal text-sm text-[#23262F] max-w-[300px] font-['poppins']"
          >
            Subscribe our newsletter to get more free design course and resource
          </h4>
          <div class="flex relative items-center mb-12">
            <input
              mail-to="mail.com"
              v-model="tacos"
              class="relative duration-300 pr-12 focus:border-[#3772FF] w-full outline-none border-2 border-solid px-[12px] py-4 border-[#E6E8EC] rounded-[90px] text-[#777E91] text-sm"
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email"
              required
            />
            <img
              :class="tacos ? 'opacity-0' : 'opacity-1'"
              class="duration-500 absolute right-3 p-1 w-8 h-8 bg-[#3772FF] rounded-[100px]"
              src="@/assets/icon/arrow-white.svg"
              alt="icon"
            />
            <button
              @click="clear"
              class="btn duration-300 hidden absolute right-3 p-1 w-8 h-8 bg-[#3772FF] rounded-[100px] text-white"
              :class="tacos ? active : ''"
            >
              X
            </button>
          </div>
        </div>
      </div>
      <div
        class="container footer__bottom flex justify-center md:justify-between border-t border-solid border-[#E6E8EC] py-8"
      >
        <h3 class="font-normal text-xs text-[#777E91]">
          Copyright © 2021 UI8 LLC. All rights reserved
        </h3>
        <div class="hidden gap-4 md:flex">
          <h3 class="font-normal text-xs text-[#23262F]">
            We use cookies for better service.
          </h3>
          <button
            class="font-semibold text-xs text-[#3772FF] hover:opacity-70 duration-300"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const scrollToTop = () => {
  window.scrollTo(0, 0), 800;
};
const tacos = ref("");

const active = "active";
const clear = () => {
  tacos.value = "";
};
</script>

<style>
li {
  font-size: 14px;
  color: #777e91;
  font-weight: 700;
  transition: all 0.5s;
}
li:hover {
  opacity: 0.8;
}
.footer__bottom {
  margin-top: 48px;
}
.btn.active {
  display: block;
  transition: all 0.3s linear;
}
</style>
