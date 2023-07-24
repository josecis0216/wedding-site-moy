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
  methods: {
    loadScroll() {
      window.scrollTo(0, 500);
      // console.log(window.scrollY);
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('load', this.loadScroll);
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
