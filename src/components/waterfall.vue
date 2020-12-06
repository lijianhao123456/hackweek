<template>
  <waterfall :line-gap="200" :watch="items">
    <!-- each component is wrapped by a waterfall slot -->
    <waterfall-slot
      v-for="(item, index) in items"
      :width="item.width"
      :height="item.height"
      :order="index"
      :key="item.id"
    >
      <Navigation />
    </waterfall-slot>
  </waterfall>
</template>

<script>
import Waterfall from "vue-waterfall/lib/waterfall";
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot";
import Navigation from "./navigation.vue";

export default {
  data() {
    return {
      items: [
        {
          width: "100",
          height: "200",
          id: "2",
        },
      ],
    };
  },
  components: {
    Waterfall,
    WaterfallSlot,
    Navigation,
  },
};
</script>