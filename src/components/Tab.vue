<template>
  <TabGroup>
    <TabList
      class="hidden md:block justify-end gap-3 font-bold text-sm text-[#777E91] duration-300 border-none mt-3 mb-14"
    >
      <Tab
        class="tab px-3 py-1.5 hover:bg-[#353945] rounded-[100px] hover:text-white duration-300 border-none"
        >All items</Tab
      >
      <Tab
        class="tab px-3 py-1.5 hover:bg-[#353945] rounded-[100px] hover:text-white duration-300 border-none"
        >Art</Tab
      >
      <Tab
        class="tab px-3 py-1.5 hover:bg-[#353945] rounded-[100px] hover:text-white duration-300"
        >Game</Tab
      >
      <Tab
        class="tab px-3 py-1.5 hover:bg-[#353945] rounded-[100px] hover:text-white duration-300"
        >Photography</Tab
      >
      <Tab
        class="tab px-3 py-1.5 hover:bg-[#353945] rounded-[100px] hover:text-white duration-300"
        >Music</Tab
      >
      <Tab
        class="tab px-3 py-1.5 hover:bg-[#353945] rounded-[100px] hover:text-white duration-300"
        >Video</Tab
      >
    </TabList>

    <TabPanels>
      <TabPanel>
        <div class="grids flex justify-center md:justify-end gap-5">
          <div
            v-for="card in cards"
            :key="card"
            class="flex-col flexing p-3 rounded-3xl shadow-[0px_64px_64px_-48px_rgba(31,47,70,0.12)]"
          >
            <div>
              <img
                class="rounded-2xl w-[232px]" 
                src="@/assets/image/hotbid-img1.png"
                alt="image"
              />
            </div>
            <div class="hotbid__text">
              <div class="flex justify-between items-center mt-5">
                <h3 class="subtitle">{{ card.CTitle }}</h3>
                <h4
                  class="green_border border-2 border-solid border-[#45B36B] text-center rounded p-2 font-bold text-xs uppercase text-[#45B36B]"
                >
                  {{ card.CDegree }}
                </h4>
              </div>
              <div class="flex justify-between items-center my-3">
                <div>
                  <img
                    src="@/assets/icon/upload-right-avatars.svg"
                    alt="avatar"
                  />
                </div>
                <h3 class="subtitle text-[#353945]">{{ card.CNumber }}</h3>
              </div>
              <div
                class="flex justify-between items-center border-t border-solid border-[#E6E8EC] pt-3"
              >
                <div class="flex gap-1 items-center">
                  <div>
                    <img
                      src="@/assets/icon/upload-right-candlestick.svg"
                      alt=""
                    />
                  </div>
                  <h3 class="text-[#777E91] font-normal text-xs">
                    {{ card.CBid }}
                  </h3>
                  <h4 class="text-[#353945] text-xs font-semibold">
                    {{ card.CEth }}
                  </h4>
                </div>
                <div>
                  {{ card.CFire }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div class="grids flex justify-center md:justify-end gap-5">
          <div
            v-for="card in cards"
            :key="card"
            class="flex-col flexing p-3 rounded-3xl shadow-[0px_64px_64px_-48px_rgba(31,47,70,0.12)]"
          >
            <div>
              <img
                class="rounded-2xl w-[232px]"
                src="@/assets/image/hotbid-img2.png"
                alt="image"
              />
            </div>
            <div class="hotbid__text">
              <div class="flex justify-between items-center mt-5">
                <h3 class="subtitle">{{ card.CTitle }}</h3>
                <h4
                  class="green_border border-2 border-solid border-[#45B36B] text-center rounded p-2 font-bold text-xs uppercase text-[#45B36B]"
                >
                  {{ card.CDegree }}
                </h4>
              </div>
              <div class="flex justify-between items-center my-3">
                <div>
                  <img
                    src="@/assets/icon/upload-right-avatars.svg"
                    alt="avatar"
                  />
                </div>
                <h3 class="subtitle text-[#353945]">{{ card.CNumber }}</h3>
              </div>
              <div
                class="flex justify-between items-center border-t border-solid border-[#E6E8EC] pt-3"
              >
                <div class="flex gap-1 items-center">
                  <div>
                    <img
                      src="@/assets/icon/upload-right-candlestick.svg"
                      alt=""
                    />
                  </div>
                  <h3 class="text-[#777E91] font-normal text-xs">
                    {{ card.CBid }}
                  </h3>
                  <h4 class="text-[#353945] text-xs font-semibold">
                    {{ card.CEth }}
                  </h4>
                </div>
                <div>
                  {{ card.CFire }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div class="grids flex justify-center md:justify-end gap-5">
          <div
            v-for="card in cards"
            :key="card"
            class="flex-col flexing p-3 rounded-3xl shadow-[0px_64px_64px_-48px_rgba(31,47,70,0.12)]"
          >
            <div>
              <img
                class="rounded-2xl w-[232px]"
                src="@/assets/image/hotbid-img3.png"
                alt="image"
              />
            </div>
            <div class="hotbid__text">
              <div class="flex justify-between items-center mt-5">
                <h3 class="subtitle">{{ card.CTitle }}</h3>
                <h4
                  class="green_border border-2 border-solid border-[#45B36B] text-center rounded p-2 font-bold text-xs uppercase text-[#45B36B]"
                >
                  {{ card.CDegree }}
                </h4>
              </div>
              <div class="flex justify-between items-center my-3">
                <div>
                  <img
                    src="@/assets/icon/upload-right-avatars.svg"
                    alt="avatar"
                  />
                </div>
                <h3 class="subtitle text-[#353945]">{{ card.CNumber }}</h3>
              </div>
              <div
                class="flex justify-between items-center border-t border-solid border-[#E6E8EC] pt-3"
              >
                <div class="flex gap-1 items-center">
                  <div>
                    <img
                      src="@/assets/icon/upload-right-candlestick.svg"
                      alt=""
                    />
                  </div>
                  <h3 class="text-[#777E91] font-normal text-xs">
                    {{ card.CBid }}
                  </h3>
                  <h4 class="text-[#353945] text-xs font-semibold">
                    {{ card.CEth }}
                  </h4>
                </div>
                <div>
                  {{ card.CFire }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div class="grids flex justify-center md:justify-end gap-5">
          <div
            v-for="card in cards"
            :key="card"
            class="flex-col flexing p-3 rounded-3xl shadow-[0px_64px_64px_-48px_rgba(31,47,70,0.12)]"
          >
            <div>
              <img
                class="rounded-2xl w-[232px]"
                src="@/assets/image/hotbid-img4.png"
                alt="image"
              />
            </div>
            <div class="hotbid__text">
              <div class="flex justify-between items-center mt-5">
                <h3 class="subtitle">{{ card.CTitle }}</h3>
                <h4
                  class="green_border border-2 border-solid border-[#45B36B] text-center rounded p-2 font-bold text-xs uppercase text-[#45B36B]"
                >
                  {{ card.CDegree }}
                </h4>
              </div>
              <div class="flex justify-between items-center my-3">
                <div>
                  <img
                    src="@/assets/icon/upload-right-avatars.svg"
                    alt="avatar"
                  />
                </div>
                <h3 class="subtitle text-[#353945]">{{ card.CNumber }}</h3>
              </div>
              <div
                class="flex justify-between items-center border-t border-solid border-[#E6E8EC] pt-3"
              >
                <div class="flex gap-1 items-center">
                  <div>
                    <img
                      src="@/assets/icon/upload-right-candlestick.svg"
                      alt=""
                    />
                  </div>
                  <h3 class="text-[#777E91] font-normal text-xs">
                    {{ card.CBid }}
                  </h3>
                  <h4 class="text-[#353945] text-xs font-semibold">
                    {{ card.CEth }}
                  </h4>
                </div>
                <div>
                  {{ card.CFire }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div class="grids flex justify-center md:justify-end gap-5">
          <div
            v-for="card in cards"
            :key="card"
            class="flex-col flexing p-3 rounded-3xl shadow-[0px_64px_64px_-48px_rgba(31,47,70,0.12)]"
          >
            <div>
              <img
                class="rounded-2xl w-[232px]"
                src="@/assets/image/hotbid-img1.png"
                alt="image"
              />
            </div>
            <div class="hotbid__text">
              <div class="flex justify-between items-center mt-5">
                <h3 class="subtitle">{{ card.CTitle }}</h3>
                <h4
                  class="green_border border-2 border-solid border-[#45B36B] text-center rounded p-2 font-bold text-xs uppercase text-[#45B36B]"
                >
                  {{ card.CDegree }}
                </h4>
              </div>
              <div class="flex justify-between items-center my-3">
                <div>
                  <img
                    src="@/assets/icon/upload-right-avatars.svg"
                    alt="avatar"
                  />
                </div>
                <h3 class="subtitle text-[#353945]">{{ card.CNumber }}</h3>
              </div>
              <div
                class="flex justify-between items-center border-t border-solid border-[#E6E8EC] pt-3"
              >
                <div class="flex gap-1 items-center">
                  <div>
                    <img
                      src="@/assets/icon/upload-right-candlestick.svg"
                      alt=""
                    />
                  </div>
                  <h3 class="text-[#777E91] font-normal text-xs">
                    {{ card.CBid }}
                  </h3>
                  <h4 class="text-[#353945] text-xs font-semibold">
                    {{ card.CEth }}
                  </h4>
                </div>
                <div>
                  {{ card.CFire }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div class="grids flex justify-center md:justify-end gap-5">
          <div
            v-for="card in cards"
            :key="card"
            class="flex-col flexing p-3 rounded-3xl shadow-[0px_64px_64px_-48px_rgba(31,47,70,0.12)]"
          >
            <div>
              <img
                class="rounded-2xl w-full md:w-[232px]"
                src="@/assets/image/hotbid-img3.png"
                alt="image"
              />
            </div>
            <div class="hotbid__text">
              <div class="flex justify-between items-center mt-5">
                <h3 class="subtitle">{{ card.CTitle }}</h3>
                <h4
                  class="green_border border-2 border-solid border-[#45B36B] text-center rounded p-2 font-bold text-xs uppercase text-[#45B36B]"
                >
                  {{ card.CDegree }}
                </h4>
              </div>
              <div class="flex justify-between items-center my-3">
                <div>
                  <img
                    src="@/assets/icon/upload-right-avatars.svg"
                    alt="avatar"
                  />
                </div>
                <h3 class="subtitle text-[#353945]">{{ card.CNumber }}</h3>
              </div>
              <div
                class="flex justify-between items-center border-t border-solid border-[#E6E8EC] pt-3"
              >
                <div class="flex gap-1 items-center">
                  <div>
                    <img
                      src="@/assets/icon/upload-right-candlestick.svg"
                      alt=""
                    />
                  </div>
                  <h3 class="text-[#777E91] font-normal text-xs">
                    {{ card.CBid }}
                  </h3>
                  <h4 class="text-[#353945] text-xs font-semibold">
                    {{ card.CEth }}
                  </h4>
                </div>
                <div>
                  {{ card.CFire }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </TabPanels>
  </TabGroup>
    <div class="mt-8 mb-16 md:mb-[137px] justify-center cursor-pointer hover:border-[#3772FF] duration-300 items-center gap-3 flex px-4 py-3 border-2 border-solid border-[#E6E8EC] rounded-[90px]">
    <img class="loader" src="@/assets/icon/load-more.png" alt="icon">
    <h3 class="font-bold text-sm text-[#23262F]">Load more</h3>
    </div>

  <div></div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const cards = [
  {
    CTitle: "Amazing digital art",
    CDegree: "2.45 ETH",
    CNumber: "3 in stock",
    CBid: "Highest bid",
    CEth: "0.001 ETH",
    CFire: "New bid 🔥",
  },
  {
    CTitle: "Amazing digital art",
    CDegree: "2.45 ETH",
    CNumber: "3 in stock",
    CBid: "Highest bid",
    CEth: "0.001 ETH",
    CFire: "New bid 🔥",
  },
  {
    CTitle: "Amazing digital art",
    CDegree: "2.45 ETH",
    CNumber: "3 in stock",
    CBid: "Highest bid",
    CEth: "0.001 ETH",
    CFire: "New bid 🔥",
  },
  {
    CTitle: "Amazing digital art",
    CDegree: "2.45 ETH",
    CNumber: "3 in stock",
    CBid: "Highest bid",
    CEth: "0.001 ETH",
    CFire: "New bid 🔥",
  },
  {
    CTitle: "Amazing digital art",
    CDegree: "2.45 ETH",
    CNumber: "3 in stock",
    CBid: "Highest bid",
    CEth: "0.001 ETH",
    CFire: "New bid 🔥",
  },
  {
    CTitle: "Amazing digital art",
    CDegree: "2.45 ETH",
    CNumber: "3 in stock",
    CBid: "Highest bid",
    CEth: "0.001 ETH",
    CFire: "New bid 🔥",
  },
  {
    CTitle: "Amazing digital art",
    CDegree: "2.45 ETH",
    CNumber: "3 in stock",
    CBid: "Highest bid",
    CEth: "0.001 ETH",
    CFire: "New bid 🔥",
  },
  {
    CTitle: "Amazing digital art",
    CDegree: "2.45 ETH",
    CNumber: "3 in stock",
    CBid: "Highest bid",
    CEth: "0.001 ETH",
    CFire: "New bid 🔥",
  },
  {
    CTitle: "Amazing digital art",
    CDegree: "2.45 ETH",
    CNumber: "3 in stock",
    CBid: "Highest bid",
    CEth: "0.001 ETH",
    CFire: "New bid 🔥",
  },
];
</script>

<style>
@media (min-width: 768px) and (max-width: 3800px) {
  .grids {
    display: grid;
    grid-template-columns: auto auto auto;
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  .grids {
    flex-wrap: wrap;
  }
  .flexing {
    flex: 0 0 40%;
  }
}
@media (min-width: 320px) and (max-width: 550px) {
  .grids {
    flex-direction: column;
  }
}
.loader{
  animation: loader 1.5s linear infinite;
}
@keyframes loader {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}
</style>
