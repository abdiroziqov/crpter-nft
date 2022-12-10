<template>
  <section class="container">
    <div data-aos="fade-down-left" data-aos-once="true">
      <div class="faq__title mt-20">
        <h3
          class="hover:cursor-pointer font-bold text-xs uppercase text-[#777E91]"
        >
          learn how to get started
        </h3>
        <h4 class="text-5xl font-bold text-[#23262F] mt-3 mb-5">
          Frequently asked questions
        </h4>
        <h5 class="font-normal text-[#353945] max-w-[640px] mb-20">
          Join Stacks community now to get free updates and also alot of
          freebies are waiting for you or
          <span class="text-[#3772FF]">
            <router-link to="#">Contact Support</router-link>
          </span>
        </h5>
      </div>
    </div>

    <div
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="700"
      data-aos-once="true"
    >
      <div class="tabs gap-16 grid grid-cols-[1fr,3fr] mb-20">
        <TabGroup>
          <TabList class="flex flex-col !border-none gap-10">
            <Tab
              v-for="(item, index) of tabNavItems"
              :key="index"
              class="tab flex gap-4 items-center font-bold text-sm text-[#777E91] duration-300"
              :class="{ 'text-[#23262F]': index === activeTab }"
              @click="changeActiveTab(index)"
            >
              <img :src="item.icon" alt="icon" />
              {{ item.name }}
            </Tab>
            <!-- <Tab
              class="tab flex gap-4 items-center font-bold text-sm text-[#777E91] focus:text-[#23262F] hover:text-[#23262F] duration-300"
            >
              <img src="@/assets/icon/faq-support.svg" alt="icon" />
              Support</Tab
            >
            <Tab
              class="tab flex gap-4 items-center font-bold text-sm text-[#777E91] focus:text-[#23262F] hover:text-[#23262F] duration-300"
            >
              <img src="@/assets/icon/faq-lighting.svg" alt="icon" />
              Hosting</Tab
            >
            <Tab
              class="tab flex gap-4 items-center font-bold text-sm text-[#777E91] focus:text-[#23262F] hover:text-[#23262F] duration-300"
            >
              <img src="@/assets/icon/faq-pen.svg" alt="icon" />
              Product</Tab
            > -->
          </TabList>
          <TabPanels>
            <TabPanel>
              <Accordion class="w-[735px]"></Accordion>
            </TabPanel>
            <TabPanel>
              <h3 class="font-[poppins] font-medium text-[#23262F]">
                Content 3
              </h3>
              <p class="font-[poppins] font-normal text-[#777E91]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                doloremque corporis aperiam aspernatur, cum sapiente quisquam
                quidem illo reiciendis similique minus vel ad temporibus
                delectus omnis commodi vitae possimus eius placeat iure? Neque
                facere voluptates quam odio maiores omnis ullam. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Illum veniam
                sapiente quo eligendi quam unde ipsam eius ab odio expedita eum
                fugit nulla quibusdam tenetur et animi eos, id quidem? Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Amet expedita
                minima magni sunt nesciunt error, fugiat perspiciatis nam earum
                illum culpa suscipit dolorum adipisci doloremque quaerat. Soluta
                officiis veniam velit dolore nemo porro, quos excepturi
                dignissimos, quasi, eum optio fugit? Numquam ullam dignissimos
                labore? Nobis laboriosam consequatur incidunt quo iste?
              </p>
            </TabPanel>
            <TabPanel>
              <h3 class="font-[poppins] font-medium text-[#23262F]">
                content 3
              </h3>
              <p class="font-[poppins] font-normal text-[#777E91]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, adipisci earum! Molestias eligendi explicabo iusto
                laboriosam. Quibusdam aut accusamus tempore labore? Obcaecati
                reprehenderit rerum id sunt beatae, doloribus harum
                consequuntur. Dignissimos eius recusandae modi quidem alias
                aliquam praesentium autem facere. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus sequi totam similique,
                accusamus reprehenderit aperiam? Libero earum odio hic expedita
                aliquid doloremque aperiam iure id corporis obcaecati
                dignissimos perspiciatis, assumenda quidem dolorem quaerat
                corrupti, et consequuntur. Nesciunt porro sint at doloremque?
                Sed iste neque quas cum ducimus autem consequatur perferendis?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem unde odio natus velit esse, omnis perspiciatis quas
                mollitia quaerat consectetur magnam ipsa eius enim inventore
                quibusdam dolor! Earum architecto sunt incidunt enim cum eius
                est aliquam iste recusandae sint voluptatum nesciunt error animi
                qui cumque officiis, nihil corporis molestiae itaque.
              </p>
            </TabPanel>
            <TabPanel>
              <h3 class="font-[poppins] font-medium text-[#23262F]">
                content 4
              </h3>
              <p class="font-[poppins] font-normal text-[#777E91]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, adipisci earum! Molestias eligendi explicabo iusto
                laboriosam. Quibusdam aut accusamus tempore labore? Obcaecati
                reprehenderit rerum id sunt beatae, doloribus harum
                consequuntur. Dignissimos eius recusandae modi quidem alias
                aliquam praesentium autem facere. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ullam totam cupiditate minima
                molestias aliquid inventore a temporibus assumenda blanditiis
                deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Praesentium aliquam error odit mollitia repudiandae in
                architecto excepturi amet quidem maiores aperiam tempora animi
                ut eveniet, temporibus eligendi hic saepe numquam eaque ex illo
                magni ea quod voluptas. Pariatur, tempore enim, perspiciatis,
                consectetur assumenda ex dolorum amet itaque veritatis nostrum
                nihil iure modi magnam labore dolorem accusantium fugit quasi
                ipsam non. Ratione perspiciatis reiciendis modi eaque dolorum et
                blanditiis fugiat ipsum. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Possimus quod, laboriosam impedit deleniti,
                odio necessitatibus ipsa explicabo qui fuga cupiditate eos,
                velit sint. Reprehenderit tempora animi eum praesentium nulla
                iusto?
              </p>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>

      <div class="md:hidden">
        <Accordion />
      </div>
    </div>

    <div data-aos="fade-right" data-aos-easing="linear" data-aos-once="true">
      <div class="slider_hotbid mb-20 md:mb-32">
        <SliderHotBid />
      </div>
    </div>
  </section>
</template>

<script setup>
import SliderHotBid from "@/components/SliderHotBid";
import Accordion from "@/components/Accordion";
import WButton from "@/components/WButton";
  import { reactive, ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const tabNavItems = reactive([
  {
    name: "General",
    icon: require("@/assets/icon/faq-home.svg"),
  },
  {
    name: "Support",
    icon: require("@/assets/icon/faq-support.svg"),
  },
  {
    name: "Hosting",
    icon: require("@/assets/icon/faq-lighting.svg"),
  },
  {
    name: "Product",
    icon: require("@/assets/icon/faq-pen.svg"),
  },
]);

const activeTab = ref(0);

function changeActiveTab(newTab) {
  activeTab.value = newTab;
}
</script>

<style scoped>
.tab:focus-visible {
  outline: -webkit-focus-ring-color none;
}
@media (min-width: 320px) and (max-width: 767px) {
  .tabs {
    display: none;
  }
}
</style>
