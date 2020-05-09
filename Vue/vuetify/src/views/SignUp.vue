<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>Sign up</h1>
                <v-form ref="signUpForm" v-model="formValidatily">
                    <v-text-field
                            label="Email"
                            type="email"
                            prepend-icon="mdi-email"
                            v-model="email"
                            :rules="emailRules"
                    />
                    <v-autocomplete label="which browser do you use?" :items="browsers"></v-autocomplete>
                    <v-file-input label="Attach your file"></v-file-input>
                    <v-text-field v-model="birthday" readonly label="pick your birthday"></v-text-field>
                    <v-date-picker v-model="birthday"></v-date-picker>
                    <v-checkbox
                            label="Agree to terms & condition - checkbox"
                            v-model="agreeToTerms"
                            :rules="agreeToTermsRules"
                    ></v-checkbox>
                    <v-btn class="mr-4" color="primary" type="submit" :disabled="!valid">Submit</v-btn>
                    <v-btn @click="validationOfForm" color="success" class="mr-4">Validation</v-btn>
                    <v-btn class='mr-4' color="warning" @click="resetValidation">Reset Validation</v-btn>
                    <v-btn color="error" @click="resetForm">Reset</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "SignUp",
        data() {
            return {
                agreeToTerms: false,
                agreeToTermsRules: [
                    value =>
                        !!value ||
                        'you should agree to terms and conditions to sign up',
                ],
                browsers: ['Chrome', "Firefox", 'Safari', 'Edge'],
                birthday: '',
                email: '',
                emailRules: [
                    value => !!value || 'Email is Required.',
                    value => value.indexOf('@') !== 0 || 'User Name is Required.',
                    value => value.indexOf('@') !== -1 || 'Symbol @ does not exist.',
                    value => value.indexOf('.') - value.indexOf('@') > 1 ||
                        'Email should contain valid domain.',
                    value => value.indexOf('.') <= value.length - 3 ||
                        'Email should contain valid domain extension',
                ],
                valid: true,
            }
        },
        methods: {
            resetValidation() {
                this.$refs.signUpForm.resetValidation()
            },
            resetForm() {
                this.$refs.signUpForm.reset()
            },
            validationOfForm() {
                this.$refs.signUpForm.validate()
            }
        }
    }
</script>

<!--
The v-form component has three functions that can be accessed by setting a ref on the component.
A ref allows us to access internal methods on a component, for example,
<v-form ref="form">. this.$refs.form.validate() will validate all inputs and return if they are all valid or not.
this.$refs.form.reset() will clear all inputs and reset their validation errors.
this.$refs.form.resetValidation() will only reset input validation and not alter their state.
-->
