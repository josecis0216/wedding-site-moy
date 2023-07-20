<template>
  <div>
    <top-header />
    <!-- <base-dialogue
      :show="!!error"
      title="An error occured!!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialogue> -->
    <base-card>
      <header>
        <h2>Guest Information</h2>
      </header>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <div v-else-if="hasGuests && !isLoading">
        <h4></h4>
        <request-item
          v-for="req in guestList"
          :key="req.name"
          :name="req.name"
        ></request-item>
      </div>
      <h3 v-else>You don't have any guests in your list!</h3>
    </base-card>
    <bottom-footer />
  </div>
</template>

<script>
import TopHeader from '@/components/nav/TopHeader.vue'
import BottomFooter from '@/components/nav/BottomFooter.vue'
import RequestItem from '@/components/Login/GuestItem.vue'
import BaseCard from '@/components/UI/BaseCard.vue'
// import BaseDialogue from '@/components/UI/BaseDialogue.vue'
import BaseSpinner from '@/components/UI/BaseSpinner.vue'
export default {
  components: {
    TopHeader,
    BottomFooter,
    RequestItem,
    BaseCard,
    // BaseDialogue,
    BaseSpinner,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    }
  },
  computed: {
    guestList() {
      const guestList = this.$store.getters.guestList
      const guestId = this.$route.params.id
      console.log(guestList.find((x) => x.id === guestId).guests)
      return guestList.find((x) => x.id === guestId).guests
    },
    hasGuests() {
      const guestList = this.$store.getters.guestList
      const guestId = this.$route.params.id
      return guestList.find((x) => x.id === guestId).guests && guestList.find(x => x.id === guestId).guests.length > 0;
    }
  },
  created() {
    this.loadGuestList()
  },
  methods: {
    async loadGuestList() {
      this.isLoading = true
      try {
        await this.$store.dispatch('loadGuestList')
      } catch (error) {
        this.error = new Error(error.message || 'Failed to get guest list')
      }
      this.isLoading = false
    },
    // handleError() {
    //     this.error = null;
    // }
  },
}
</script>
