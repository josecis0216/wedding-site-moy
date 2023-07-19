<template>
    <b-container>
        <b-row>
            <b-col>
                <b-card class="cardBody">
                    <b-form @submit.prevent="onSubmit" @reset="onReset">
                        <b-form-group id="input-group-1" label="Your Full Name:" label-for="input-1">
                            <b-form-input id="inputName" placeholder="Enter full name" required
                                v-model="form.fullName"></b-form-input>
                        </b-form-group>

                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            form: {
                fullName: ""
            }
        }
    },
    created() {
        this.loadGuestList();
    },
    methods: {
        onSubmit(event) {
            const guestList = this.$store.getters.guestList;
            for (const key in guestList) {
                if (guestList[key].fullName.localeCompare(this.form.fullName, undefined, { sensitivity: "base" }) === 0) {
                    // console.log("it is there!" + key);
                    // redirect passing the person's id to /rsvp/confirm:id
                    this.$router.push('/rsvp/' + guestList[key].id);
                }
            }
        },
        onReset(event) {
            this.form.fullName = ""
        },
        async loadGuestList() {
            // this.isLoading = true
            try {
                await this.$store.dispatch('loadGuestList')
            } catch (error) {
                this.error = new Error(error.message || 'Failed to get data')
            }
            // this.isLoading = false
        },
    }
}
</script>

<style>
.card {
    box-shadow: -5px 5px 10px gray;
    margin: 25px auto;
    max-width: 500px;
}
</style>