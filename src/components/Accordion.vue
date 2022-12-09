<template>
  <div id="app">
    <accordion :items="myItems" />
  </div>
</template>

<script>
import Accordion from "@/components/BaseAccordion.vue";

export default {
  name: "App",
  components: { Accordion },
  data: () => ({
    myItems: [
      {
        title: "How does it work",
        value:
          "The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. 'Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.'",
        button: "Create Single",
      },
      {
        title: "How to start with Stacks",
        value:
          "The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit.",
        button: "Create Single",
      },
      {
        title: "Dose it suppport Dark Mode",
        value:
          "Stacks: eCommerce Kit. 'Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.",
        button: "Create Single",
      },
      {
        title: "Does it support Auto-Layout",
        value:
          "Stacks: eCommerce Kit. 'Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.",
        button: "Create Single",
      },
      {
        title: "What is Stacks Design System",
        value:
          "The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. 'Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.' ",
        button: "Create Single",
      },
    ],
  }),
};
</script>