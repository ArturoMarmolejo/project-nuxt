<template>
  <div>
    <h2 class="font-bold text-xl">Tabas</h2>
    <div class="buttons_filter">
      <div v-for="category in categories">
        <button
          class="px-4 py-2 bg-white text-gray-800 w-full sm:w-auto"
          :class="{ active_button_filter: filter === category }"
          @click="changeCategory(category)"
        >
          {{ category }}
        </button>
      </div>
    </div>
    <div v-for="taba of tabaList">
      <CardTabas :item="taba" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import urlApi from "@/constant/api";
import CardTabas from "@/components/CardTabas.vue";

export default Vue.extend({
  name: "TabasComponent",
  components: {
    CardTabas,
  },
  data() {
    return {
      categories: ["Todos", "Top Cupones", "Tecnología", "Restaurantes"],
    };
  },
  props: {
    tabaList: Array,
    filter: String,
  },
  methods: {
    changeCategory(category: string) {
      this.$emit("changeCategory", category);
    },
  },
});
</script>

<style>
.active_button_filter {
  @apply px-4 py-2 bg-orange text-white;
}

.buttons_filter {
  @apply mt-6 flex gap-4 flex-col sm:flex-row;
}

</style>
