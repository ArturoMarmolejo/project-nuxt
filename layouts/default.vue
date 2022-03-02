<template>
  <div>
    <Nav />
    <div>
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue';
import Nav from '@/components/layouts/Nav.vue';
import Footer from '@/components/layouts/Footer.vue';

export default Vue.extend({
  layout: 'default',
  components: {
    Nav,
    Footer,
  }
})

</script>