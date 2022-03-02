<template>
  <div class="w-full mb-20">
    <div class="container mx-auto pt-10 flex gap-8">
      <div class="w-1/4">
        <div class="grid grid-cols-3 gap-4">
          <img
            v-for="cupon in data.sidebar.shops"
            :src="cupon.logo[0].url"
            class="border h-24 object-contain"
          />
        </div>
        <div>
          <h2 class="font-bold text-lg mt-8">Mejores cupones</h2>
          <p>...</p>
        </div>
      </div>
      <div class="w-3/4">
        <h2 class="font-bold text-3xl">{{ page.title }}</h2>
        <h2 class="text-2xl mb-8">{{ page.subtitle }}</h2>
        <div v-for="taba of data.discounts">
          <CardTabas :item="taba" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CardTabas from "@/components/CardTabas.vue";
import urlApi from "@/constant/api";
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
  name: "TopCupones",
  components: {
    CardTabas,
  },
  head() {
    return {
      title: this.page.seo_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.seo_desc,
        },
      ],
    };
  },
  async asyncData() {
    const { data } = await axios.get(urlApi.GET_CUPONSE_TOP);

    return {
      page: data.page,
      data: data.data,
    };
  },
});
</script>
