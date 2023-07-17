<template>
    <b-container>
        <b-row>
            <b-col>
                <b-card>
                    <b-form @submit.prevent="onSubmit" @reset="onReset">
                        <b-form-group id="input-group-1" label="Your Full Name:" label-for="input-1">
                            <b-form-input id="inputName" placeholder="Enter full name" required></b-form-input>
                        </b-form-group>
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

        },
        onReset(event) {
            this.form.fullName = ""
        }
    }
}
</script>