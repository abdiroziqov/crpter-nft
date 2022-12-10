<template>
  <section class="accordion mb-32">
    <div
      class="accordion__item border-t border-solid border-[#E6E8EC]"
      v-for="(item, i) in items"
      :key="`accordion-item-${i}`"
    >
      <div
        class="accordion__title text-[#23262F] font-medium flex justify-between items-center cursor-pointer pt-[32px] pb-10 duration-500"
        :class="{ accordion__title_active: activeIndex === i }"
        @click="activeIndex = activeIndex === i ? null : i"
      >
        <span>{{ item.title }}</span>
        <span
          class="accordion__arrow"
          :class="{ accordion__arrow_active: activeIndex === i }"
        >
        </span>
      </div>
      <div class="accordion__value text-[#777E91]" v-show="i === activeIndex">
        {{ item.value }}
      </div>
      <router-link to="/single-collectible">
        <WButton class="accordion__button mt-6 mb-9" v-show="i === activeIndex">
          {{ item.button }}
        </WButton>
      </router-link>
    </div>
  </section>
</template>

<script>
import WButton from "@/components/WButton";
export default {
  components: {
    WButton,
  },
  name: "Accordion",
  props: { items: { type: Array, required: true } },
  data: () => ({ activeIndex: null }),
};
</script>
<style>
.accordion__arrow {
  position: relative;
  width: 24px;
  height: 24px;
}
.accordion__arrow:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 9px;
  height: 9px;
  border-width: 1px 1px 0 0;
  border-color: #777e91;
  transform: rotate(135deg) translate(0, -50%);
  transform-origin: top;
  transition: transform 0.3s ease-out;
}
.accordion__arrow_active:after {
  transform: rotate(-45deg) translate(0, -50%);
}
</style>
