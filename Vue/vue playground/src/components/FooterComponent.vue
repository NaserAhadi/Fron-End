<template>
    <v-footer>
        <v-row>
            <v-col cols="2" md="5"></v-col>
            <v-col cols="5" md="5">{{new Date().getFullYear()}} - Vuetify</v-col>
            <v-spacer></v-spacer>
            <v-col cols="5" md="2">&copy;Naser Ahadi</v-col>
        </v-row>
    </v-footer>
</template>

<script>
    export default {
        name: "FooterComponent"
    }
</script>

<style scoped>

</style>