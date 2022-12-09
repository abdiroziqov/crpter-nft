<template>
  <div class="container pt-12">
    <div class="flex justify-between items-center">
      <div
        data-aos="fade-up-right"
        data-aos-delay="400"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div class="relative">
          <router-link
            class="flex items-center gap-4 py-3 px-4 border-2 border-solid border-[#E6E8EC] rounded-[90px] font-bold text-sm text-[#23262F]"
            to="/"
          >
            <img src="@/assets/icon/chevron-left.svg" alt="" />
            <button>Back to home</button>
          </router-link>
        </div>
      </div>

      <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="600" data-aos-once="true">
        <div class="hidden md:flex items-center gap-8">
          <router-link class="font-bold text-sm text-[#777E91]" to="/">
            Home
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
          <h3 class="font-bold text-sm text-[#23262F]">Upload Item</h3>
        </div>
      </div>
    </div>

    <div class="mt-20" id="upload">
      <div class="title flex flex-col items-center text-center">
        <h3 class="font-bold text-4xl sm:text-5xl text-[#23262F]">
          Upload item
        </h3>
        <h4 class="font-medium text-sm text-[#777E91] mt-4 max-w-[736px] mb-20">
          Choose
          <span class="text-black">“Single”</span>
          if you waxnt your collectible to be one of a kind or
          <span class="text-black">“Multiple”</span>
          if you want to sell one collectible multiple times
        </h4>
      </div>
      <div class="md:flex items-center text-center justify-center gap-10">
        <div
          data-aos="zoom-in-down"
          data-aos-delay="400"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <div
            class="box1 hover:opacity-90 md:hover:opacity-100 duration-300 border-b border-solid border-[#E6E8EC] pb-7 flex md:flex-col gap-5 items-center md:px-4 md:pt-4 md:pb-6 md:border md:border-solid md:border-[#E6E8EC] md:rounded-2xl"
          >
            <div class="m-0 md:mb-6">
              <img
                class="rounded-[64px] w-16 h-16 md:w-full md:h-full md:rounded-none"
                src="@/assets/image/single1.png"
                alt="img"
              />
            </div>
            <div>
              <router-link
                class="md:hover:bg-[#3772FF] flex items-center gap-5 md:hover:text-white md:hover:border md:hover:border-solid md:hover:border-[#3772FF] transition md:py-3 md:px-4 md:border-2 md:border-solid md:border-[#E6E8EC] md:rounded-[90px] font-bold text-sm text-[#23262F]"
                to="/single-collectible"
                >Create Single
                <div class="right_arrow md:hidden">
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
              </router-link>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in-left"
          data-aos-delay="400"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <div
            class="box2 duration-300 hover:opacity-90 md:hover:opacity-100 border-b border-solid border-[#E6E8EC] pb-7 mt-8 md:m-0 flex md:flex-col gap-5 items-center md:px-4 md:pt-4 md:pb-6 md:border md:border-solid md:border-[#E6E8EC] md:rounded-2xl"
          >
            <div class="m-0 md:mb-6">
              <img
                class="rounded-[64px] w-16 h-16 md:w-full md:h-full md:rounded-none"
                src="@/assets/image/single2.png"
                alt="img"
              />
            </div>
            <div>
              <router-link
                class="md:hover:bg-[#3772FF] flex items-center gap-5 md:hover:text-white md:hover:border md:hover:border-solid md:hover:border-[#3772FF] transition md:py-3 md:px-4 md:border-2 md:border-solid md:border-[#E6E8EC] md:rounded-[90px] font-bold text-sm text-[#23262F]"
                to="/multiple-collectible"
              >
                Create Multiple
                <div class="right_arrow md:hidden">
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
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in-left" data-aos-once="true">
        <div class="mt-8 mb-32 text-xs font-medium text-[#777E91] text-center">
          We do not own your private keys and cannot access your funds without
          your confirmation.
        </div>
      </div>
    </div>
  </div>
</template>
