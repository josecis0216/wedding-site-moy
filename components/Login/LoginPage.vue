<template>
    <b-container>
        <b-row>
            <b-col>
                <b-card class="cardBody">
                    <b-form @submit.prevent="onSubmit" @reset="onReset">
                        <b-form-group id="input-group-1" label="Your Full Name:" label-for="input-1">
                            <b-form-input id="inputName" placeholder="Enter full name" required></b-form-input>
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
    methods: {
        onSubmit(event) {
            this.loadGuestList();
            console.log(this.$store.guestList);
            // if (this.$store.getters.guestList.includes(this.form.fullName)) {
            //     console.log('Success! It is there!');
            // }
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