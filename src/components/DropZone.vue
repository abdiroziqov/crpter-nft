<template>
  <label class="text cursor-pointer" for="dropzoneFile">
    <div
      @dragenter.prevent="toggleActive"
      @dragleave.prevent="toggleActive"
      @dragover.prevent
      @drop.prevent="toggleActive"
      :class="{ 'active-dropzone': active }"
      class="dropzone bg-[#f4f5f6] duration-300 items-center flex text-center justify-center w-full min-h-[182px] rounded-2xl hover:border-2 border-solid border-[#3772FF] dropzoneFile"
    >
      <div class="flex-col items-center flex">
        <div>
          <img src="@/assets/icon/dropzone.svg" alt="" />
        </div>
        <h3 class="mt-2">PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</h3>

        <input type="file" id="dropzoneFile" class="dropzoneFile hidden" />
      </div>
    </div>
  </label>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DropZone",
  setup() {
    const active = ref(false);
    const toggleActive = () => {
      active.value = !active.value;
    };
    return { active, toggleActive };
  },
};
</script>

<style scoped>
.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: #41b883;
}
.active-dropzone label {
  background-color: #fff;
  color: #41b883;
}
</style>
