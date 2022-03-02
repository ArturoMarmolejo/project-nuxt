<template>
  <div>
    <div class="bg-white py-20">
      <h1 class="font-bold text-5xl text-center">{{ page.title }}</h1>
      <h2 class="text-3xl text-center mt-2">{{ page.subtitle }}</h2>
    </div>
    <div class="bg-background w-full mb-20">
      <div class="container mx-auto pt-10">
        <TabasComponent
          @changeCategory="changeCategory"
          :tabaList="tabaList"
          :filter="filter"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import urlApi from "@/constant/api";
import { iHome, iHomeComponent, iPage } from "@/types/HomeTypes";
import TabasComponent from "@/components/TabasComponent.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    TabasComponent,
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
    const { data } = await axios.get(urlApi.GET_HOME);
    const { tabs } = data.data;
    const tabaList = [
      ...tabs["Top Cupones"],
      ...tabs["Tecnología"],
      ...tabs["Restaurantes"],
    ];

    return {
      page: data.page,
      data: data.data,
      tabaList,
    };
  },
  data(): any {
    return {
      filter: "Todos",
    };
  },
  methods: {
    changeCategory(category: string) {
      const { tabs } = this.data;
      this.filter = category;

      if (category === "Todos") {
        const tabaList = [
          ...tabs["Top Cupones"],
          ...tabs["Tecnología"],
          ...tabs["Restaurantes"],
        ];
      } else {
        this.tabaList = tabs[category];
      }
    },
  },
  /*
  head() {
    return {
      title: this.page?.seo_title || "",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: this.page?.seo_desc || "",
        },
      ],
    };
  },*/
  mounted() {
    console.log(this.page);
  },
});
</script>
