<template>
    <section>
        <TopHeader />
        <div class="sectionBody body-styles">
            <b-container>
                <b-row>
                    <b-col>
                        <b-card style="max-width: 40rem; margin: 50px auto">
                            <b-form v-if="show" @submit.prevent="onSubmit" @reset="onReset">
                                <b-form-group id="input-group-1" label="Guest Name:" label-for="input-1">
                                    <b-form-input id="input-1" v-model="form.fullName" placeholder="Enter guest name"
                                        required></b-form-input>
                                </b-form-group>

                                <b-button pill variant="outline-success" @click="showAddGuests" v-show="!showGuests">Add
                                    Guest</b-button>

                                <b-form-group v-for="(guest, k) in form.guests" :key="k" v-show="showGuests">
                                    <b-form-input type="text" class="form-control" placeholder="Guest Name"
                                        v-model="guest.name"></b-form-input>
                                    <span>
                                        <b-button pill variant="outline-danger" @click="remove(k)"
                                            v-show="k || (!k && form.guests.length > 1)">Remove</b-button>
                                        <b-button pill variant="outline-success" @click="add(k)"
                                            v-show="k == form.guests.length - 1">Add
                                            Guest</b-button>
                                    </span>
                                </b-form-group>


                                <b-form-group id="input-group-check" v-slot="{ ariaDescribedby }">
                                    <b-form-checkbox-group v-model="form.brideOrGroom" id="checkboxes-2"
                                        :aria-describedby="ariaDescribedby">
                                        <b-form-checkbox value="bride">Guest of the bride</b-form-checkbox>
                                        <b-form-checkbox value="groom">Guest of the groom</b-form-checkbox>
                                    </b-form-checkbox-group>
                                </b-form-group>

                                <b-card-text></b-card-text>

                                <b-button type="submit" variant="primary">Submit</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <bottom-footer />

        <!-- <div>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div> -->
    </section>
</template>
  
<script>
// SET NODE_OPTIONS=--openssl-legacy-provider && 
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
                guests: [{
                    name: ''
                }],
            },
            show: true,
            showGuests: false
        }
    },
    methods: {
        showAddGuests() {
            this.showGuests = true
        },

        add() {
            this.form.guests.push({
                name: ''
            })
            console.log(this.form.guests)
        },

        remove(index) {
            this.form.guests.splice(index, 1)
            console.log(this.form.guests)
        },

        onSubmit(event) {
            console.log('SUCCESS! Form was submitted')
            this.$store.dispatch('addToGuestList', this.form).then(() => {
                alert('You have successfully added a guest!');
                // this.$router.push('/');
                this.clearForm();
            })
        },
        clearForm() {
            // clear form text boxes
            this.form.fullName = ''
            this.form.brideOrGroom = []
            this.form.guests = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            });
        },
        onReset(event) {
            event.preventDefault()
            this.clearForm();
        },
    },
}
</script>
  
<style scoped>
.sectionBody {
    /* background-image: url('https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=960&h=450&dpr=2'); 
    background-image: url('~/static/wedding-photo-rsvp.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 860px;*/
}

@media only screen and (max-width: 500px) {
    .sectionBody {
        background-position-y: 1rem;
        background-position-x: -30rem;
    }
}
</style>
  