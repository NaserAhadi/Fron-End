<template>
    <v-container>
        <CarouselsComponent/>
        <br><br>
        <v-card>
                <v-card-title class="elevation-2 pa-10">
                    This project is my vue play ground, in this project I used vuex,vue router and vuetify plugins.
                    In this project I fetch data by axios and for now I have three component that I fetch data from Api,
                    they are todo list,crypto currency and album.
                    I'll work on this and completion that so it is good practice in vue for me and I'll use it as a cheat sheet.
                </v-card-title>
        </v-card>
        <br><br>
    </v-container>

</template>

<script>
    import CarouselsComponent from "../components/CarouselsComponent";
    export default {
        name: "Home",
        components: {CarouselsComponent}
    }
</script>

<style scoped>

</style>