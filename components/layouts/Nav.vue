<template>
  <header class="w-full bg-background">
    <nav class="container py-4 flex mx-auto justify-between">
      <div class="flex items-center gap-6">
        <h1 class="text-2xl text-black font-bold">Logo</h1>
        <NuxtLink class="text-gray-700" to="/">Home</NuxtLink>
        <NuxtLink class="text-gray-700" to="/top-cupones">Top 20</NuxtLink>
        <NuxtLink class="text-gray-700" to="/about/new-page">About Page</NuxtLink>
      </div>
      <div>
        <input placeholder="Buscar" class="px-4 py-2" />
      </div>
    </nav>
  </header>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Nav",
});
</script>
