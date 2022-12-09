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
            to="/profile"
          >
            <img src="@/assets/icon/chevron-left.svg" alt="" />
            <button>Back to profile</button>
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
            Profile
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
          <h3 class="font-bold text-sm text-[#23262F]">Edit Profile</h3>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="mt-8 xm:mt-16 md:mt-20">
      <div class="title">Edit profile</div>
      <h5 class="font-['poppins'] text-sm text-[#777E91] mt-4">
        You can set preferred display name, create
        <span class="text-[#23262F]">your profile URL</span> and manage other
        personal settings.
      </h5>
    </div>
    <div class="mt-16 gap-8 flex">
      <div>
        <img class="w-32" src="@/assets/icon/prov-avatar.png" alt="" />
      </div>
      <div>
        <h3 class="font-['poppins'] font-medium text-[#23262F]">
          Profile photo
        </h3>
        <p
          class="font-['poppins'] max-w-[256px] font-normal text-xs text-[#777E91] mt-2 mb-4 leading-5"
        >
          We recommend an image of at least 400x400. Gifs work too 🙌
        </p>
        <WButton>Upload</WButton>
      </div>
    </div>
  </div>
  <EditForm></EditForm>
  <Footer />
</template>

<script setup>
import Navbar from "@/components/NavbarTwo";
import WButton from "@/components/WButton";
import EditForm from "@/components/EditProfileForm";
import Footer from "@/components/Footer";
</script>
