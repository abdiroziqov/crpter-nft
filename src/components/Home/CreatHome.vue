<template>
  <section class="creator bg-[#F4F5F6]">
    <div class="pt-32 container">
      <div
        data-aos="zoom-in-right"
        data-aos-easing="linear"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div class="title md:flex justify-between">
          <div>
            <h3 class="text-2xl text-[#777E91] font-semibold">Popular</h3>
            <Dropdown />
          </div>

          <CustomSelect />
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="2000"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div class="slider mt-16 pb-[144px]">
          <Slider />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Slider from "../Slider.vue";
import Dropdown from "../Dropdown.vue";
import CustomSelect from "../CustomSelect.vue";

CustomSelect;
Dropdown;
Slider;
</script>
