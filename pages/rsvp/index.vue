<template>
  <section>
    <top-header />
    <div class="sectionBody body-styles">
      <LoginPage />
    </div>

    <bottom-footer />
  </section>
</template>

<script>
// "@babel/eslint-parser": "^7.19.1",
// "@nuxtjs/eslint-config": "^11.0.0",
import TopHeader from '@/components/nav/TopHeader.vue'
import BottomFooter from '@/components/nav/BottomFooter.vue'
import LoginPage from '@/components/Login/LoginPage.vue'

export default {
  components: {
    TopHeader,
    BottomFooter,
    LoginPage
  },
  data() {
    return {

    }
  },
  created() {
    if(process.client) {
      window.scrollTo(0, 500);
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 500px) {
  .sectionBody {
    background-position-y: 1rem;
    background-position-x: -30rem;
  }
}
</style>
