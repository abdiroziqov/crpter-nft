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
          <div @click="showMenu = !showMenu" class="flex md:hidden gap-5">
            <div class="notification__menu">
              <div class="notification min-w-[40px]">
                <img src="@/assets/icon/notification.svg" alt="notification" />
              </div>
              <div
                class="notification__body z-40 w-[90%] absolute top-20 left-[5%] pt-10 pb-8 px-4 bg-[#FCFCFD] shadow-[0px_6px_64px_-48px_rgba(31,47,70,0.4)] rounded-[24px]"
              >
                <div class="flex justify-between mb-4">
                  <h3 class="font-bold text-3xl text-[#23262F]">
                    Notification
                  </h3>
                  <button
                    class="hover:border-2 border-solid hover:border-[#3772FF] border-[#3772FF] border-2 hover:text-black duration-300 hover:bg-[#FCFCFD] justify-center max-h-10 cursor-pointer flex items-center font-bold text-sm text-[#FCFCFD] py-5 px-4 bg-[#3772FF] rounded-[90px]"
                  >
                    See all
                  </button>
                </div>

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
                      <h3
                        class="font-medium md:text1 font-['popins'] text-[#141416]"
                      >
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
              </div>
            </div>

            <div>
              <img src="@/assets/icon/avatarka.png" alt="" />
            </div>
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
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
                  class="btn hidden absolute right-4"
                  :class="tacos ? active : ''"
                >
                  X
                </button>
              </div>
            </div>
            <!-- buttons -->
            <div class="buttons md:flex gap-3">
              <div
                class="button_left hover:border-2 border-solid hover:border-[#3772FF] border-[#3772FF] border-2 hover:text-black duration-300 hover:bg-[#FCFCFD] justify-center max-h-10 cursor-pointer flex items-center font-bold text-sm text-[#FCFCFD] py-5 px-4 bg-[#3772FF] rounded-[90px]"
              >
                <button>
                  <router-link to="/upload">Upload</router-link>
                </button>
              </div>

              <router-link
                class="w-full mt-5 md:mt-0 justify-center"
                to="/connect-wallet"
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
            class="focus:border-[#3772FF] outline-none reative text-xs font-normal text-[#777E91] border-2 border-solid border-[#E6E8EC] rounded-lg pl-3 pr-[26px] py-[10px]"
          />
          <img
            :class="tacos ? 'opacity-0' : 'opacity-1'"
            class="absolute right-2"
            src="@/assets/icon/search.svg"
            alt="icon"
          />
          <button
            @click="clear"
            class="btn hidden absolute right-4"
            :class="tacos ? active : ''"
          >
            X
          </button>
        </div>
        <!-- notification -->

        <div @click="showMenu = !showMenu" class="">
          <div class="notification__menu">
            <div class="notification min-w-[40px]">
              <img
                src="@/assets/icon/notification.svg"
                alt="notification.img"
              />
            </div>
            <div class="bg-inherit">
              <div
                class="notification__body z-40 w-[396px] h-[528px] absolute top-12 duration-300 left-[5%] pt-10 pb-8 px-8 bg-[#FCFCFD] shadow-[0px_6px_64px_-48px_rgba(31,47,70,0.4)] rounded-[24px]"
              >
                <div class="flex justify-between mb-4">
                  <h3 class="font-bold text-3xl text-[#23262F]">
                    Notification
                  </h3>
                  <button
                    class="hover:border-2 border-solid hover:border-[#3772FF] border-[#3772FF] border-2 hover:text-black duration-300 hover:bg-[#FCFCFD] justify-center max-h-10 cursor-pointer flex items-center font-bold text-sm text-[#FCFCFD] py-5 px-4 bg-[#3772FF] rounded-[90px]"
                  >
                    See all
                  </button>
                </div>

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
                      <h3
                        class="font-medium md:text1 font-['popins'] text-[#141416]"
                      >
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
              </div>
            </div>
          </div>
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
          <div>
            <router-link
              to="#"
              class="gap-3 flex items-center py-1 pr-3 pl-1 border-2 border-solid border-[#E6E8EC] rounded-[90px]"
            >
              <img src="@/assets/icon/avatarka.png" alt="icon" />
              <div class="flex gap-1">
                <p class="font-bold text-sm text-[#23262F]">7.00698</p>
                <p class="font-bold text-sm text-[#45B36B]">ETH</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import WButton from "./WButton.vue";

const showMenu = ref(false);
const upHere = ref(false);

const tacos = ref("");

const active = "active";
const clear = () => {
  tacos.value = "";
};

const posts = [
  {
    img_url: require("@/assets/icon/notif-img1.png"),
    title: "C O I N Z",
    subtitle: "Can't display activity card.",
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
];
</script>

<style scoped>
@media (min-width: 767px) and (max-width: 1024px) {
  .divider,
  .bars-nav {
    display: none !important;
  }
}

.notification__body {
  display: none;
}

.notification__menu:hover .notification__body {
  display: block;
}
.btn.active {
  display: block;
}
</style>
