<template>
  <div class="-mt-[230px]  max-w-[256px] h-[689px] bg-[#FCFCFD] rounded-2xl p-8 items-center flex flex-col shadow-[0px_40px_32px_-24px_rgba(15,15,15,0.12)]">
    <div>
      <img src="@/assets/icon/prov-avatar.png" alt="" />
    </div>
    <div class="flex flex-col items-center">
      <h3
        class="font-['poppins'] font-semibold text-2xl text-[#23262F] mt-6 mb-1"
      >
        Enrico Cole
      </h3>
      <div class="flex gap-2 items-center mb-5">
        <h4 class="font-bold text-sm text-[#23262F]">0xc4c16a645...b21a</h4>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9881 9.67099C12.0031 9.92049 12.2637 10.0888 12.4754 9.95595C13.7908 9.13066 14.6654 7.66747 14.6654 6.00001C14.6654 3.42268 12.576 1.33334 9.99869 1.33334C8.33123 1.33334 6.86803 2.20788 6.04275 3.5233C5.9099 3.73504 6.07821 3.99555 6.32772 4.01055C9.3116 4.18994 11.8087 6.68967 11.9881 9.67099Z"
            fill="#3772FF"
          />
          <path
            d="M10.6654 10C10.6654 12.5773 8.57603 14.6667 5.9987 14.6667C3.42137 14.6667 1.33203 12.5773 1.33203 10C1.33203 7.42268 3.42137 5.33334 5.9987 5.33334C8.57603 5.33334 10.6654 7.42268 10.6654 10Z"
            fill="#3772FF"
          />
        </svg>
      </div>
      <p
        class="font-['poppins'] font-normal text-xs text-[#777E91] text-center max-w-[186px]"
      >
        A wholesome farm owner in Montana. Upcoming gallery solo show in Germany
      </p>
      <div class="mt-5 mb-12 items-center">
        <router-link class="flex gap-2 items" to="https://ui8.net">
          <i
            ><svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.9987 13.3333C10.9442 13.3333 13.332 10.9455 13.332 7.99998C13.332 5.05446 10.9442 2.66665 7.9987 2.66665C5.05318 2.66665 2.66536 5.05446 2.66536 7.99998C2.66536 10.9455 5.05318 13.3333 7.9987 13.3333ZM7.9987 14.6666C11.6806 14.6666 14.6654 11.6819 14.6654 7.99998C14.6654 4.31808 11.6806 1.33331 7.9987 1.33331C4.3168 1.33331 1.33203 4.31808 1.33203 7.99998C1.33203 11.6819 4.3168 14.6666 7.9987 14.6666Z"
                fill="#777E91"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.16575 12.1177C9.65822 11.1328 10.0013 9.67882 10.0013 7.99998C10.0013 6.32114 9.65822 4.86716 9.16575 3.88222C8.63341 2.81753 8.14467 2.66665 8.0013 2.66665C7.85793 2.66665 7.36919 2.81753 6.83685 3.88222C6.34438 4.86716 6.0013 6.32114 6.0013 7.99998C6.0013 9.67882 6.34438 11.1328 6.83685 12.1177C7.36919 13.1824 7.85793 13.3333 8.0013 13.3333C8.14467 13.3333 8.63341 13.1824 9.16575 12.1177ZM8.0013 14.6666C9.84225 14.6666 11.3346 11.6819 11.3346 7.99998C11.3346 4.31808 9.84225 1.33331 8.0013 1.33331C6.16035 1.33331 4.66797 4.31808 4.66797 7.99998C4.66797 11.6819 6.16035 14.6666 8.0013 14.6666Z"
                fill="#777E91"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.6324 8.66665C14.6542 8.44738 14.6654 8.22498 14.6654 7.99998C14.6654 7.77498 14.6542 7.55258 14.6324 7.33331H1.36495C1.34318 7.55258 1.33203 7.77498 1.33203 7.99998C1.33203 8.22498 1.34318 8.44738 1.36495 8.66665H14.6324Z"
                fill="#777E91"
              />
            </svg>
          </i>
          <p class="font-bold text-sm text-[#23262F]">https://ui8.net</p>
        </router-link>
      </div>
      <div class="flex gap-2 mb-12">
        <h3
          class="font-bold text-sm text-[#FCFCFD] py-3 px-4 bg-[#3772FF] border-[#3772FF] rounded-[90px] hover:bg-inherit hover:text-[#23262F] duration-300 border-2 border-solid cursor-pointer hover:border-[#E6E8EC] "
        >
          Follow
        </h3>
        <div class="min-w-[40px]  cursor-pointer p-2.5 border-2 borer-solid  border-[#E6E8EC] rounded-[40px] hover:border-2 hover:border-[#3772FF] duration-300"
          >
          <img class="min-w-[20px]" src="@/assets/icon/prof-upload.svg" alt="">
        </div>
        <div class="min-w-[40px]  cursor-pointer p-2.5 border-2 borer-solid  border-[#E6E8EC] rounded-[40px]  justify-center flex hover:border-2 hover:border-[#3772FF] duration-300"
          >
          <img class="min-w-[20px]" src="@/assets/icon/more-upload.svg" alt="">
        </div>
      </div>
      <!--  -->
      <div class="flex gap-6 items-center mb-12 ">
        <router-link to="https://twitter.com" class="hover:bg-[#E6E8EC] duration-300 w-7 h-7 justify-center flex rounded-lg">
          <img class="w-5" src="@/assets/icon/twitter-upload.svg" alt="image">
        </router-link>
      <router-link to="https://instagram.com" class="hover:bg-[#E6E8EC] duration-300 w-7 h-7 justify-center flex rounded-lg">
          <img class="w-5" src="@/assets/icon/insta-upload.svg" alt="image">
      </router-link>
       <router-link to="https://facebook.com" class="hover:bg-[#E6E8EC] duration-300 w-7 h-7 justify-center flex rounded-lg">
         <img class="w-5" src="@/assets/icon/face-upload.svg" alt="image">
       </router-link>
      </div>

    <div class="border-t border-solid border-[#E6E8EC] pt-12">
      <h3 class="text font-['poppins']">Member since Mar 15, 2021</h3>
    </div>

    </div>
  </div>
</template>