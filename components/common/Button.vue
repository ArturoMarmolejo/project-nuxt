<template>
  <a :href="url" class="rounded px-10 py-4 text-white text-sm" :class="color">
    {{ text }}
  </a>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: 'Button',
  props: {
    text: String,
    color: String,
    url: String,
  }
})
</script>