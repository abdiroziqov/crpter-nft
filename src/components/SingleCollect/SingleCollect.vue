<template>
  <div class="container">
    <div class="justify-between flex mt-8 md:mt-32 gap-5">
      <div class="left-side">
        <div class="title__single justify-between md:flex items-center">
          <h3 class="title max-w-[469px] mb-4 md:m-0">
            Create single collectible
          </h3>
          <WButton class="max-h-10 flex items-center gap-3">
            <img
              class="block md:hidden"
              src="@/assets/icon/chevron-left.svg"
              alt="icon"
            />
            Switch to Multiple</WButton
          >
        </div>
        <div class="upload__begin">
          <div>
            <h3 class="subtitle mt-10">Upload file</h3>
            <h4 class="text mt-1">Drag or choose your file to upload</h4>
          </div>
          <div class="upload__feild mt-4 mb-10">
            <DropZone @drop.prevent="drop" @change="selectedFile" />
          </div>
        </div>

        <div>
          <Form />
          <div class="mt-10">
            <div>
              <div class="flex justify-between">
                <h3 class="subtitle">
                  Put on sale
                </h3>
                <ToggleSwitch />
              </div>
              <h3 class="text mt-1">You’ll receive bids on this item</h3>
            </div>

            <div class="mt-8">
              <div class="flex justify-between">
                <h3 class="subtitle">
                  Instant sale price
                </h3>
                <ToggleSwitch />
              </div>
              <h3 class="text mt-1">
                Enter the price for which the item will be instantly sold
              </h3>
            </div>

            <div class="mt-8">
              <div class="flex justify-between">
                <h3 class="subtitle">
                  Unlock once purchased
                </h3>
                <ToggleSwitch />
              </div>
              <h3 class="text mt-1">
                Content will be unlocked after successful transaction
              </h3>
            </div>

            <div class="mt-8 mb-6">
              <div class="flex justify-between">
                <h3 class="subtitle">
                  Choose collection
                </h3>
                <ToggleSwitch />
              </div>
              <h3 class="text mt-1">
                Choose an exiting collection or create a new one
              </h3>
            </div>
          </div>
          <div class="slider-box mb-10">
            <Slider />
          </div>
          <div class="block md:flex items-center md:justify-between mb-16">
            <div>
              <button
                class="w-full py-3 px-6 bg-[#3772FF] rounded-[90px] font-bold text-[#FCFCFD] flex gap-3 items-center justify-center border-2 border-[#3772FF] hover:bg-inherit hover:border-2 border-solid hover:border-[#3772FF] hover:text-[#23262F] duration-300"
              >
                Create item
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.39364 4.84331C9.66418 4.59357 10.086 4.61044 10.3357 4.88099L12.4895 7.21429C12.7253 7.46967 12.7253 7.86329 12.4895 8.11867L10.3357 10.452C10.086 10.7226 9.66419 10.7394 9.39364 10.4897C9.12309 10.24 9.10622 9.81821 9.35595 9.54766L10.477 8.33315L3.99967 8.33315C3.63148 8.33315 3.33301 8.03467 3.33301 7.66648C3.33301 7.29829 3.63148 6.99982 3.99967 6.99982L10.477 6.99982L9.35596 5.78536C9.10622 5.51482 9.12309 5.09305 9.39364 4.84331Z"
                    fill="#FCFCFD"
                  />
                </svg>
              </button>
            </div>
            <div>
              <WButton
                class="block md:hidden w-full mt-3 mb-16 md:m-0 justify-center"
                >Preview</WButton
              >
              <div class="loader hidden md:block cursor-pointer">
                <h4 class="flex gap-3 items-center">
                  Auto saving
                  <div><img src="@/assets/icon/load-more.png" alt="" /></div>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="right-side h-[670px] bg-[#fcfcfd] shadow-[0px_64px_64px_-48px_rgba(31,47,70,0.12)] rounded-2xl p-12 hidden md:block"
      >
        <h3 class="font-semibold text-2xl text-[#23262F]">Preview</h3>
        <div class="my-6">
          <img src="@/assets/image/upload-right-img.png" alt="image" />
        </div>
        <div class="flex justify-between items-center">
          <h3 class="subtitle">Black Golden Tiger</h3>
          <h4
            class="border-2 border-solid border-[#45B36B] rounded p-2 font-bold text-xs uppercase text-[#45B36B]"
          >
            2.45 ETH
          </h4>
        </div>
        <div class="flex justify-between items-center my-3">
          <div>
            <img src="@/assets/icon/upload-right-avatars.svg" alt="avatar" />
          </div>
          <h3 class="subtitle text-[#353945]">3 in stock</h3>
        </div>
        <div
          class="flex justify-between items-center border-t border-solid border-[#E6E8EC] pt-3"
        >
          <div class="flex gap-1 items-center">
            <div>
              <img src="@/assets/icon/upload-right-candlestick.svg" alt="" />
            </div>
            <h3 class="text-[#777E91] font-normal text-xs">Highest bid</h3>
            <h4 class="text-[#353945] text-xs font-semibold">0.001 ETH</h4>
          </div>
          <div>
            <img src="@/assets/icon/upload-right-newbid.svg" alt="" />
          </div>
        </div>
        <div class="flex gap-2.5 items-center mt-12">
          <div>
            <img src="@/assets/icon/upload-right-closeshape.svg" alt="" />
          </div>
          <h3 class="font-bold text-[#777E91]">Clear all</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WButton from "../WButton";
import DropZone from "../DropZone";
import Form from "../Form";
import ToggleSwitch from "../ToggleSwitch";
import Slider from "@/components/UploadSlider";
</script>
 

 <style >
    .loader:hover img{
  animation: loader 1.5s linear infinite;
}
@keyframes loader {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}
 </style>