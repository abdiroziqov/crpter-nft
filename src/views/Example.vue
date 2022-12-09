<!-- <template>
  <center>
    <h1 style="text-align: center; color: green;">
      GeeksforGeeks
    </h1>
    <strong>
      Vue.js Form Input Value Binding with Checkbox option
    </strong>
    <br />
  </center>
  <center>
    <input
      v-model="tutorials"
      type="checkbox"
      value="Data Structures"
      name="ds"
    />
    <label for="ds">Data Structures</label><br />
    <input v-model="tutorials" type="checkbox" value="Algorithms" name="al" />
    <label for="al">Algorithms</label><br />
    <input
      v-model="tutorials"
      type="checkbox"
      value="Machine Learning"
      name="ml"
    />
    <label for="ml">Machine Learning</label>
    <p>Tutorials: {{ tutorials }}</p>
  </center>
</template>

<script>
export default {
  data() {
    return {
      tutorials: [],
    };
  },
};
</script> -->

<!-- <div v-for="item in ischeckboxes" :key="item">
    <input type="checkbox" value="option1" v-model="checkedNames" />
    <label class="text-red-500" for="Option1">{{ item.icheck }}</label>

  </div>
    <p @click="checkedNames">click</p>
  here: {{ checkedNames }} -->

<!-- import { ref } from "vue"; -->

<!-- const ischeckboxes = [
  {
    icheck: "option1"
  },
   {
    icheck: "option2"
  },
   {
    icheck: "option3"
  }
] -->
<!-- Frontend masters begin -->

<!-- <template>
  <span v-for="option in options" :key="option">
    <input
      v-model="checkedNames"
      :id="option.value"
      :value="option.value"
      type="checkbox"
    />
    <label for="option.value"> {{ option.value }} </label>
  </span>
  <br />
  <span>Cheked names: {{ checkedNames }} </span>
</template>

<script setup>
import { ref } from "vue";
const checkedNames = ref([]);
const options = [
  { value: "John" },
  { value: "Paul" },
  { value: "Pete" },
  { value: "Ringo" },
  { value: "George" },
];
</script>

<style></style> -->

<!-- Frontend masters end -->

<template>
  <h3>What is your favourite color</h3>
  <textarea v-model="tacos"></textarea> <br />
  <button @click="clear" class="hidden" :class="[tacos ? activeClass : '']">
    Leet us know
  </button>

  <div class="relative">
    <div class="flex relative">
      <input type="email" v-model="email" placeholder="email" />
      <button
        @click="clears"
        class="hidden absolute right-0"
        :class="email ? active : ''"
      >
        x
      </button>
    </div>
  </div>

  <!-- <div class="quantity">
    <button class="inc" @click="counter > 0 ? (counter -= 1) : 0">-</button>
    <span class="quant-text">Quantitiy: {{ counter }}</span>
    <button class="inc" @click="counter += 1">+</button>
  </div> 
  <button class="submit" @click="">Submit</button>-->
</template>

<script setup>
import { ref } from "vue";
const tacos = ref("");
const email = ref("");

const counter = 0;

const active = "active";
const clears = () => {
  email.value = "";
};

const activeClass = "active";
const clear = () => {
  tacos.value = "";
};
</script>

<style>
button.active {
  background: orangered;
  display: block;
}
span.active {
  background: green;
  display: block;
}
</style>
