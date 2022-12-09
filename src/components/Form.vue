<template>
  <div class="form">
    <div class="subttile">
      Item Details
    </div>
    <div class="form__line flex items-start justify-between mt-8">
      <div class="form__column w-full flex flex-col">
        <label class="formlabel mb-3">Item name</label>
        <input
          class="form__input focus:border-[#3772FF]"
          type="text"
          placeholder="e. g.  ''Redeemable Bitcoin Card with logo'' "
        />
      </div>
    </div>

    <div class="form__line flex items-start justify-between mt-8">
      <div class="form__column w-full flex flex-col">
        <label class="formlabel mb-3">Description</label>
        <input
          class="form__input focus:border-[#3772FF]"
          type="text"
          placeholder="e. g.  ''After purchasing you will able to recived the logo..''"
        />
      </div>
    </div>
    <div
      class="form__line md:flex gap-5 items-start justify-between mt-8 pb-10 border-b border-solid border-[#E6E8EC]"
    >
      <div class="form__column w-full flex flex-col">
        <label class="formlabel mb-3">Royalties</label>
        <FormDropdown class="hover:border-[#3772FF]"></FormDropdown>
      </div>

      <div class="form__column w-full flex flex-col my-5 md:my-0">
        <label class="formlabel mb-3">Size</label>
        <input
          class="form__input w-full focus:border-[#3772FF]"
          type="text"
          placeholder="e. g. Size"
        />
      </div>

      <div class="form__column w-full flex flex-col">
        <label class="formlabel mb-3">Propertie</label>
        <input
          class="form__input w-full focus:border-[#3772FF]"
          type="text"
          placeholder="e. g. Propertie"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import FormDropdown from "@/components/FormDropdown.vue";
FormDropdown;
</script>

<style></style>
