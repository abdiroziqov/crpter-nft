<template>
  <section class="feed mb-32">
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-once="true"
    >
      <div class="container md:flex gap-5">
        <div class="feed__left my-10 md:m-0">
          <div class="w-full mb-10">
            <img class="w-full" src="@/assets/image/feed-left.png" alt="img" />
          </div>
          <div class="desc flex justify-between mt-2">
            <div class="flex gap-4">
              <img
                class="w-12 h-12"
                src="@/assets/image/avatar.png"
                alt="avatar"
              />
              <div>
                <h3 class="text-[#23262F] text-2xl font-semibold">
                  The future of ETH®
                </h3>
                <h4 class="text-[#353945] text-sm font-meidum text-left">
                  18 in stock
                </h4>
              </div>
            </div>
            <div>
              <h3 class="font-normal text-[#777E91] text-xs mb-1">
                Highest bid
              </h3>
              <h4
                class="text-center border-2 border-solid border-[#45B36B] rounded p-1.5 text-[#45B36B] font-bold text-xs"
              >
                1.125 ETH
              </h4>
            </div>
          </div>
        </div>

        <!-- center feed -->
        <div class="card hidden md:block mt-16 md:m-0">
          <div class="flex items-center gap-6 mb-8">
            <div class="img">
              <img src="@/assets/image/feed-center1.png" alt="img" />
            </div>
            <div class="text-left">
              <h3 class="font-medium text-[#23262F]">ETH never die</h3>
              <div class="flex items-center gap-3 my-3">
                <img
                  class="w-6 h-6"
                  src="@/assets/image/avatar.png"
                  alt="user"
                />
                <h4
                  class="border-2 border-solid border-[#45B36B] rounded p-1.5 text-[#45B36B] font-bold text-xs"
                >
                  0.27 ETH
                </h4>
                <h5 class="font-normal text-[#777E91] text-sm">1 of 12</h5>
              </div>
              <router-link to="#">
                <button
                  class="text-sm px-3 py-2 border-2 border-solid border-[E6E8EC] rounded-[90px] hover:text-white hover:border-2 hover:border-solid hover:border-[#3772FF] duration-300 hover:bg-[#3772FF]"
                >
                  Place a bid
                </button>
              </router-link>
            </div>
          </div>
          <!-- 2 -->
          <div class="flex items-center gap-6 mb-8">
            <div class="img">
              <img src="@/assets/image/feed-center2.png" alt="img" />
            </div>
            <div class="text-left">
              <h3 class="font-medium text-[#23262F]">Future coming soon</h3>
              <div class="flex items-center gap-3 my-3">
                <img
                  class="w-6 h-6"
                  src="@/assets/image/avatar.png"
                  alt="user"
                />
                <h4
                  class="border-2 border-solid border-[#45B36B] rounded p-1.5 text-[#45B36B] font-bold text-xs"
                >
                  0.27 ETH
                </h4>
                <h5 class="font-normal text-[#777E91] text-sm">1 of 3</h5>
              </div>
              <router-link to="#">
                <button
                  class="text-sm px-3 py-2 border-2 border-solid border-[E6E8EC] rounded-[90px] hover:text-white hover:border-2 hover:border-solid hover:border-[#3772FF] duration-300 hover:bg-[#3772FF]"
                >
                  Place a bid
                </button>
              </router-link>
            </div>
          </div>
          <!-- 3 -->
          <div class="flex items-center gap-6 mb-8">
            <div class="img">
              <img src="@/assets/image/feed-center1.png" alt="img" />
            </div>
            <div class="text-left">
              <h3 class="font-medium text-[#23262F]">ETH never die</h3>
              <div class="flex items-center gap-3 my-3">
                <img
                  class="w-6 h-6"
                  src="@/assets/image/avatar.png"
                  alt="user"
                />
                <h4
                  class="border-2 border-solid border-[#45B36B] rounded p-1.5 text-[#45B36B] font-bold text-xs"
                >
                  0.27 ETH
                </h4>
                <h5 class="font-normal text-[#777E91] text-sm">1 of 12</h5>
              </div>
              <router-link to="#">
                <button
                  class="text-sm px-3 py-2 border-2 border-solid border-[E6E8EC] rounded-[90px] hover:text-white hover:border-2 hover:border-solid hover:border-[#3772FF] duration-300 hover:bg-[#3772FF]"
                >
                  Place a bid
                </button>
              </router-link>
            </div>
          </div>

          <!-- 3 -->
        </div>
        <div class="border border-solid border-[#E6E8EC]"></div>

        <!-- right  feed-->
        <div class="cretors">
          <h3 class="mb-8">Latest upload from creators 🔥</h3>

          <div>
            <div
              class="flex gap-4 items-center border-b border-solid border-[#E6E8EC] pb-8"
            >
              <div class="craet_img">
                <img src="@/assets/image/feed-right1.png" alt="user" />
              </div>
              <div>
                <h3 class="font-medium text-[#23262F] text-sm">
                  Payton Harris
                </h3>
                <div class="flex gap-1">
                  <p class="font-medium text-xs text-[#353945]">2.456</p>
                  <p class="text-[#777E91] font-normal text-xs">ETH</p>
                </div>
              </div>
            </div>

            <div
              class="flex gap-4 items-center border-b border-solid border-[#E6E8EC] pb-8 mt-5"
            >
              <div class="craet_img">
                <img src="@/assets/image/feed-right2.png" alt="user" />
              </div>
              <div>
                <h3 class="font-medium text-[#23262F] text-sm">Anita Bins</h3>
                <div class="flex gap-1">
                  <p class="font-medium text-xs text-[#353945]">2.456</p>
                  <p class="text-[#777E91] font-normal text-xs">ETH</p>
                </div>
              </div>
            </div>

            <div
              class="flex gap-4 items-center border-b border-solid border-[#E6E8EC] pb-8 mt-5"
            >
              <div class="craet_img">
                <img src="@/assets/image/feed-right3.png" alt="user" />
              </div>
              <div>
                <h3 class="font-medium text-[#23262F] text-sm">
                  Joana Wuckert
                </h3>
                <div class="flex gap-1">
                  <p class="font-medium text-xs text-[#353945]">2.456</p>
                  <p class="text-[#777E91] font-normal text-xs">ETH</p>
                </div>
              </div>
            </div>

            <div>
              <div class="flex gap-4 items-center pb-8 mt-5">
                <div class="craet_img">
                  <img src="@/assets/image/feed-right4.png" alt="user" />
                </div>
                <div>
                  <h3 class="font-medium text-[#23262F] text-sm">
                    Lorena Ledner
                  </h3>
                  <div class="flex gap-1">
                    <p class="font-medium text-xs text-[#353945]">2.456</p>
                    <p class="text-[#777E91] font-normal text-xs">ETH</p>
                  </div>
                </div>
              </div>
              <div>
                <router-link to="#">
                  <button
                    class="flex items-center gap-3 text-[#23262F] font-bold px-4 py-3 border-2 border-solid border-[#E6E8EC] rounded-[90px] hover:border-2 hover:border-solid duration-300 hover:border-[#3772FF]"
                  >
                    Discover more
                    <img
                      src="@/assets/icon/arrow-right.svg"
                      alt="right-arrow"
                    />
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- right feed end  -->
      </div>
    </div>
  </section>
</template>
