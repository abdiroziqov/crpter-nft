<template>
<div class="w-full md:w-[256px] h-12 inline-flex items-center relative justify-between cursor-pointer border-2 border-solid border-[#E6E8EC] py-2 pl-2 pr-4 bg-[FCFCFD] rounded-xl"
@click="is_open = !is_open"
>
  <span class="text-sm text-[#23262F] font-medium">{{ selected }}</span>
  <img 
  class="p-1 w-8 h-8 border-2 border-solid border-[E6E8EC] rounded-[100px]"
  src="@/assets/icon/chevron-gray.svg" alt="chevron"
    :class="{ active: is_open}"
  >
  <transition name="dropdown_menu">
  <ul class="absolute text-center top-[60px] left-0 bg-white w-full rounded-xl z-10" v-show="is_open">
    <li
    class="border-b border-solid border-[#E6E8EC] p-4 rounded-xl"
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
            default: ['Today', 'Tomorrow', 'Last day']
        }
    },
    data() {
        return {
            selected: this.items[0],
            is_open: false,
            }
    },
}
</script>

<style scoped>
img{
    transition: 0.5s
}
img.active{
    transform: rotate(180deg);
}
.dropdown-menu-enter-active,
.dropdown-menu-leave-active {
  transition: 0.5s ease;
}

.dropdown-menu-enter-from,
.dropdown-menu-leave-to {
  transform: translateY(5px);
  opacity: 0;
}
</style>

