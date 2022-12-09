<template>
  <div>
    <VueSimpleRangeSlider
      class="min-w-[256px] w-full"
      :min="0"
      :max="10"
      v-model="state.number"
    />
  </div>
</template>
<script>
import VueSimpleRangeSlider from "vue-simple-range-slider";
import "vue-simple-range-slider/css";
import { reactive, defineComponent } from "vue";
export default defineComponent({
  // register the component
  components: { VueSimpleRangeSlider },
  setup() {
    const state = reactive({ range: [1, 10], number: 10 });
    return { state };
  },
});
</script>
