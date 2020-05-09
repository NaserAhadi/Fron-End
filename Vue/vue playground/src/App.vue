<template>
    <v-app>
        <AppBar/>
        <v-content>
            <router-view/>
        </v-content>
        <v-divider></v-divider>
        <FooterComponent/>
    </v-app>
</template>

<script>

    import AppBar from './components/AppBar'
    import FooterComponent from "./components/FooterComponent";

    export default {
        name: 'App',

        components: {FooterComponent, AppBar},

        data: () => ({
            //
        }),
    };
</script>
