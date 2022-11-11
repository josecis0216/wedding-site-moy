<template>
  <section class="sectionBody">
    <TopHeader />
    <div>
        <b-card
    style="max-width: 40rem;margin: 100px auto;"
    >
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.fullName"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.brideOrGroom"
            id="checkboxes-2"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="bride">I know the bride</b-form-checkbox>
            <b-form-checkbox value="groom">I know the groom</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-card-text ></b-card-text>
        <b-form-group id="input-group-3" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            id="checkboxes-3"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox 
            v-model="form.checked"
            value="1"
            unchecked-value="0"
            >I understand</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-card>
    </div>
    
    <div>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </section>
</template>

<script>
import TopHeader from '@/components/nav/TopHeader.vue'

export default {
  components: {
    TopHeader
  },
  data() {
    return {
      form: {
        fullName: '',
        brideOrGroom: [],
        checked: '0',
      },
      show: true,
    }
  },
  methods: {
    onSubmit(event) {
      if (this.checked === '1') {
        event.preventDefault()
        alert(JSON.stringify(this.form))
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
    background-image: url('https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
}
</style>
