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
        <h4>{{ invitedGuestName }}</h4>

        <b-form @submit.prevent="onSubmit" @reset="onReset">
          <b-form-group label="Confirm these guests are attending with you:" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group id="checkbox-group-1" v-model="form.guests" :aria-describedby="ariaDescribedby"
              name="guest-name">
              <guest-item v-for="req in guestListLoaded" :key="req.name" :name="req.name"></guest-item>
            </b-form-checkbox-group>
          </b-form-group>

          <b-form-group id="input-group-check" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group v-model="form.brideOrGroom" id="checkboxes-2" :aria-describedby="ariaDescribedby">
              <b-form-checkbox value="bride">I know the bride</b-form-checkbox>
              <b-form-checkbox value="groom">I know the groom</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

      </div>
      <h3 v-else>You don't have any guests in your list!</h3>
    </base-card>
    <bottom-footer />
  </div>
</template>

<script>
import TopHeader from '@/components/nav/TopHeader.vue'
import BottomFooter from '@/components/nav/BottomFooter.vue'
import GuestItem from '@/components/Login/GuestItem.vue'
import BaseCard from '@/components/UI/BaseCard.vue'
// import BaseDialogue from '@/components/UI/BaseDialogue.vue'
import BaseSpinner from '@/components/UI/BaseSpinner.vue'
export default {
  components: {
    TopHeader,
    BottomFooter,
    GuestItem,
    BaseCard,
    // BaseDialogue,
    BaseSpinner,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      guestList: this.$store.getters.guestList,
      guestId: this.$route.params.id,
      form: {
        fullName: '',
        guests: [],
        brideOrGroom: [],
      }
    }
  },
  computed: {
    guestListLoaded() {
      // console.log(guestList.find((x) => x.id === guestId).guests)
      return this.guestList.find((x) => x.id === this.guestId).guests
    },
    hasGuests() {
      return this.guestList.find((x) => x.id === this.guestId).guests && this.guestList.find(x => x.id === this.guestId).guests.length > 0;
    },
    invitedGuestName() {
      return this.guestList.find((x) => x.id === this.guestId).fullName
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
    onSubmit(event) {
      this.form.fullName = this.invitedGuestName;
      // console.log(this.form);
      this.$store.dispatch('rsvp', this.form).then(() => {
        this.$router.push('/confirmation');
      });
    },
    onReset(event) {
      this.selected = []
    }
    // handleError() {
    //     this.error = null;
    // }
  },
}
</script>
