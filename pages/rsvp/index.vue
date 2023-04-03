<template>
  <section>
    <TopHeader />
    <div class="sectionBody">
      <b-container>
        <b-row>
          <b-col>
            <b-card style="max-width: 40rem;margin:200px auto 0px auto;">
              <b-form v-if="show" @submit.prevent="onSubmit" @reset="onReset">
                <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
                  <b-form-input id="input-1" v-model="form.fullName" placeholder="Enter name" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" v-slot="{ ariaDescribedby }">
                  <b-form-checkbox-group v-model="form.brideOrGroom" id="checkboxes-2"
                    :aria-describedby="ariaDescribedby">
                    <b-form-checkbox value="bride">I know the bride</b-form-checkbox>
                    <b-form-checkbox value="groom">I know the groom</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>

                <b-card-text></b-card-text>
                <!-- <b-form-group id="input-group-3" v-slot="{ ariaDescribedby }">
                  <b-form-checkbox-group id="checkboxes-3" :aria-describedby="ariaDescribedby">
                    <b-form-checkbox v-model="form.checkedUnderstand" value="1" unchecked-value="0">I understand that kids
                      younger
                      than 12 years old will not be allowed at the reception ceremony</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group> -->
                <b-form-checkbox id="checkbox-accept" v-model="form.checkedUnderstand" name="checkbox-accept"
                  value="accepted" unchecked-value="not_accepted">
                  I understand that kids younger than 12 years old will not be allowed at the reception ceremony
                </b-form-checkbox>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <bottom-footer />

    <div>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </section>
</template>

<script>
import TopHeader from '@/components/nav/TopHeader.vue'
import BottomFooter from '@/components/nav/BottomFooter.vue'

export default {
  components: {
    TopHeader,
    BottomFooter
  },
  data() {
    return {
      form: {
        fullName: '',
        brideOrGroom: [],
        checkedUnderstand: 'not_accepted',
      },
      show: true,
    }
  },
  methods: {
    onSubmit(event) {
      if (this.form.checkedUnderstand === 'accepted') {
        console.log('SUCCESS! Form was submitted')
        this.$store.dispatch('rsvp', this.form).then(() => {
          alert('Thank you for responding, can\'t wait to celebrate with you!')
          this.$router.push('/')
        })
      } else {
        alert(JSON.stringify('Must agree that children 12 and younger are not allowed please. Thank you.'))
      }
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.fullName = ''
      this.form.checked = '0'
      this.form.brideOrGroom = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style scoped>
@media only screen and (max-width: 390px) {
  .sectionBody {
    background-position-y: -6rem;
    background-position-x: -18rem;
  }
}

.sectionBody {
  /* background-image: url('https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=960&h=450&dpr=2'); */
  background-image: url('~/static/wedding-photo-rsvp.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  height: 860px;
}
</style>
