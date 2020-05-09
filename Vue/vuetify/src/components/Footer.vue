<template>
    <v-footer padless>
        <v-card
                width="100%"
                class="primary lighten-1 text-center "
                flat
                tile
        >
            <v-card-text>
                <v-btn
                        v-for="link in links"
                        :key="link"
                        text
                        rounded
                        class="mx-auto white--text"
                >
                    {{link}}
                </v-btn>
            </v-card-text>
<!--            <v-divider></v-divider>-->
<!--            <v-card-text class="white&#45;&#45;text">-->
<!--                {{new Date().getFullYear()}} - <strong>Vuetify</strong>-->
<!--            </v-card-text>-->
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                links: [
                    'HOME',
                    'ABOUT US',
                    'TEAM',
                    'SERVICES',
                    'BLOG',
                    'CONTACT US'
                ]
            }
        }
    }
</script>

<style scoped>

</style>