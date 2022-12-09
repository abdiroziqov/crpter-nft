<!-- <template>
  <div
    v-for="user in users"
    :key="user"
    class="container border border-solid border-green flex gap-4"
  >
    <h1>{{ user.name }}</h1>
    <h3>{{ user.family }}</h3>
    <h4>{{ user.email }}</h4>
  </div>

  <div class="container flex gap-5 items-center pt-8">
    <input
      class="border border-solid"
      :value="name"
      @input="name = $event.target.value"
      type="text"
      placeholder="Your name"
    />
    <input
      class="border border-solid"
      :value="number"
      @input="number = $event.target.value"
      type="text"
      placeholder="your age"
    />
    <button
      class="text-white bg-blue-700 p-3 rounded-full hover:opacity-70 duration-300"
    >
      Submit
    </button>
  </div>

  <div
    v-for="useimage in userimage"
    :key="useimage"
    class="container flex gap-5"
  >
    <h3>{{ useimage.id }}</h3>
    <img :src="useimage.url" alt="noimage" />
    <h3>{{ useimage.title }}</h3>
    <h3>{{ useimage.des }}</h3>
  </div>

  <section>
   <div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
</section>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: "John",
          family: "newbie",
          email: "JohnNewbie@gmail.com",
        },
        {
          name: "Mike",
          family: "newbie",
          email: "JohnNewbie@gmail.com",
        },
        {
          name: "sammi",
          family: "newbie",
          email: "JohnNewbie@gmail.com",
        },
      ],
      userimage: [
        {
          id: "1",
          url: "@/assets/image/auction_img.jpg",
          title: "1lorem lorem lorem lorem lorem lorem",
          des: "some1 text",
        },
        {
          id: "2",
          url: "@/assets/image/auction_img.jpg",
          title: "2lorem lorem lorem lorem lorem lorem",
          des: "some2 text",
        },
        {
          id: "3",
          url: "@/assets/image/auction_img.jpg",
          title: "3lorem lorem lorem lorem lorem lorem",
          des: "some3 text",
        },
      ],
      name: "",
      number: "",
    };
  },
};
</script>


 -->



<!-- <template>
  <div>
    <span
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      Hover me to show the message!
    </span>
    <span v-if="hover">This is a secret message.</span>
  </div>
</template>

<script>
  export default {
  data() {
    return {
      hover: false,
    };
  }
}
</script> -->

<!-- <script setup >
  import { ref } from "vue";
 const  hover = ref(false),
 
</script> -->


<template>
  <div class="w-full max-w-md px-2 py-16 sm:px-0">
    <TabGroup>
      <TabList class="flex-col space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          :class="[
            'rounded-xl bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
          <ul>
            <li
              v-for="post in posts"
              :key="post.id"
              class="relative rounded-md p-3 hover:bg-gray-100"
            >
              <h3 class="text-sm font-medium leading-5">
                {{ post.title }}
              </h3>

              <ul
                class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"
              >
                <li>{{ post.date }}</li>
                <li>&middot;</li>
                <li>{{ post.commentCount }} comments</li>
                <li>&middot;</li>
                <li>{{ post.shareCount }} shares</li>
              </ul>

              <a
                href="#"
                :class="[
                  'absolute inset-0 rounded-md',
                  'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                ]"
              />
            </li>
          </ul>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const categories = ref({
  Recent: [
    {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: '2h ago',
      commentCount: 3,
      shareCount: 2,
    },
  ],
  Popular: [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12,
    },
  ],
  Trending: [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
      date: '2d ago',
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: '4d ago',
      commentCount: 1,
      shareCount: 2,
    },
  ],
})
</script>