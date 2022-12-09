<template>
  <button @click="open = true">Open Modal</button>

  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);
</script>

<style scoped>
.modal {
  position: absolute;
  top: 30px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

-----1-1-1-1-1-11-1-1

<!-- -------222222 doc----- -->
<!--\\\ <template>
  <button @click="open = true">Open Modal</button>

<Teleport to="body">
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</Teleport>
</template>

<script>
export default {

}
</script>

<style>

</style>


<template>
  <button @click="open = true">Open Modal</button>

  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</template>



<script setup>
import { ref } from 'vue'
import ModalContent from "@/components/ModalContent"

const open = ref(false)
</script>

<style scoped>
.modal {
  position: absolute;
  top: 30px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
} 
</style> -->
<!-- -------2222 doc------ -->
