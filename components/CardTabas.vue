<template>
  <div class="card_tabas" :ket="item.id">
    <div class="card_container">
      <div class="card_container_content">
        <img class="card_image" :src="item.shop.logo[0].url" />
        <div>
          <span class="card_code">{{ item.type == 1 ? item.preview : item.code }}</span>
          <h2 class="card_title">
            {{ item.title }}
          </h2>
          <div class="flex gap-4 mt-4">
            <span class="card_category" v-if="item.verified === 1">Verificado</span>
            <span class="card_category" v-if="item.exclusive === 1">Eclusivo</span>
          </div>
        </div>
      </div>
      <div>
        <Button
          :url="item.shop.url"
          :color="item.type === 1 ? 'bg-orange' : 'bg-blue_marine'"
          :text="item.type === 1 ? 'Ver oferta' : 'Ver cupón'"
        />
      </div>
    </div>
    <div class="card-line"></div>

    <div class="w-full px-10 p-6">
      <button @click="changeShowDetails" class="flex items-center">
        Ver más
        <div v-if="!showDetails">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div v-if="showDetails">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </button>
      <div class="text-md text-gray-700" v-if="showDetails">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de
        texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el
        año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
        desconocido usó una galería de textos y los mezcló de tal manera que logró hacer
        un libro de textos especimen.
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/common/Button.vue";
import Vue from "vue";

export default Vue.extend({
  name: "CardsTab",
  components: {
    Button,
  },
  data() {
    return {
      showDetails: false,
    };
  },
  props: {
    item: Object,
  },
  methods: {
    changeShowDetails() {
      this.showDetails = !this.showDetails;
    },
  },
});
</script>

<style>
.card_tabas {
  @apply shadow bg-white w-full mt-4;
}
.card_container {
  @apply w-full flex flex-col sm:justify-between sm:flex-row items-center px-10 p-6;
}
.card_container_content {
  @apply flex gap-10 w-full sm:w-3/5 mb-12 sm:mb-0 flex-col-reverse sm:flex-row;
}
.card_image {
  @apply h-auto sm:h-40 w-full sm:w-40 object-contain;
}
.card_code {
  @apply text-orange text-xs font-semibold;
}
.card_title {
  @apply text-black mt-2 text-2xl;
}
.card_category {
  @apply bg-gray-200 px-4 py-2 rounded-full text-xs;
}
.card-line {
  @apply w-full h-px bg-gray-200;
}
</style>
