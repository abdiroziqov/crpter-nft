<template>
  <div
    class="w-full min-w-[200px] justify-between py-2 pl-2 pr-4 border-2 border-solid border-[#E6E8EC] rounded-xl inline-flex items-center cursor-pointer gap-4 uppercase relative"
    @click="is_open = !is_open"
  >
    <h3 class="font-['poppins'] font-medium text-sm text-[#23262F]">
      {{ selected }}
    </h3>
    <img
      class="p-1 w-8 h-8 border-2 border-solid border-[E6E8EC] rounded-[100px]"
      src="@/assets/icon/chevron-gray.svg"
      alt="chevron"
      :class="{ active: is_open }"
    />
    <transition name="dropdown-menu">
      <ul
        class="z-50 p-2 border-2 border-solid bg-white border-[#E6E8EC] rounded-xl shadow-[0px_64px_64px_-48px_rgba(31,47,70,0.12)] absolute top-16 w-full"
        v-if="is_open"
      >
        <li
          class="p-2 hover:bg-[#F4F5F6] duration-300 rounded-lg"
          v-for="item in items"
          :key="item"
          @click="selected = item"
        >
          {{ item }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: ["Recently added", "Last day added", "Tomorrow add"],
    },
  },
  data() {
    return {
      selected: this.items[0],
      is_open: false,
    };
  },
};
</script>

<style scoped>
img {
  transition: 0.5s;
}
img.active {
  transform: rotate(180deg);
}
.dropdown-menu-enter-active,
.dropdown-menu-leave-active {
  transition: 0.5s ease;
}

.dropdown-menu-enter-from,
.dropdown-menu-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>

<!-- <script setup>
import { ref } from "vue";
const is_open = ref(false);

const items = ["ru", "eng", "uzb"];

// defineProps({
//    items: {
//        type: Array,
//        default : ["ru" ,"eng", "uzb"]
//      }
// })
</script> -->
