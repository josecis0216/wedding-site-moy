<template>
  <section>
    <TopHeader />
    <div class="sectionBody">
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
