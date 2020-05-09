<template>
    <v-app-bar
        app
        color="primary"
        dark
    >
        <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text rounded to="/">Home</v-btn>
        <v-btn text rounded to="/dashboard">Dashboard</v-btn>
        <v-btn text rounded to="/login">Login</v-btn>
        <v-btn text rounded to="/signup">Signup</v-btn>
        <v-btn text rounded to="/about">About</v-btn>
        <v-switch @click="toggleTheme" class="mt-5 ml-4"></v-switch>
    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar",
        methods:{
            toggleTheme(){
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            }
        }
    }
</script>

<style scoped>
    button a{
        color:#fff;
        text-decoration: none;
    }
</style>