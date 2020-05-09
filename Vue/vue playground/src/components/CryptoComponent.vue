<template>
    <v-container>
        <v-data-table
                v-if="cryptoGetters.data"
                :headers="headers"
                :items="cryptoGetters.data.coins"
                :items-per-page="10"
                @click:row="onDialog"
                class="elevation-2"
        >
            <template v-slot:item.iconUrl="{ item }">
                <v-img :src="item.iconUrl" height="40px" width="40px"></v-img>
            </template>

            <template v-slot:item.price="{ item }">
                <v-chip color="green" dark>{{parseFloat(item.price).toFixed(2)}}</v-chip>
            </template>

            <template v-slot:item.change="{ item }">
                <v-chip v-if="item.change > 0" color="primary" dark>{{item.change}}
                    <v-icon>mdi-chevron-up</v-icon>
                </v-chip>
                <v-chip v-else color="red" dark>{{item.change}}
                    <v-icon>mdi-chevron-down</v-icon>
                </v-chip>
            </template>
        </v-data-table>

        <p v-else> loading .... </p>

        <v-dialog v-model="dialog" width="500" persistent>
            <v-card>
                <v-card-title class="headline grey lighten-2">Description</v-card-title>
                <v-container>
                    <v-card-text class="pa-2 text-justify text-center">{{currentItem}}</v-card-text>
                </v-container>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" @click="dialog=false" text>close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <br><br>

        <template>
            <v-row v-if="cryptoGetters.data">
                <v-col
                        v-for="item in cryptoGetters.data.coins"
                        :key="item.id"
                        cols="12"
                        md="3"
                >
                    <v-card class="elevation-2">
                        <v-container>
                            <v-row align="center">
                                <v-col cols="3"></v-col>
                                <v-col cols="9">
                                    <v-img :src="item.iconUrl" width="200" height="200"></v-img>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="1"></v-col>
                                <v-col cols="7">{{item.name}}</v-col>
                                <v-col cols="1"></v-col>
                                <v-col cols="3">{{parseFloat(item.price).toFixed(2)}}</v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </template>
    </v-container>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "CryptoComponent",
        methods: {
            ...mapActions(['fetchCrypto']),
            onDialog(event) {
                this.dialog = true;
                this.currentItem = event.description
            }
        },
        computed: mapGetters(['cryptoGetters']),
        created() {
            this.fetchCrypto()
        },
        data() {
            return {
                dialog: false,
                currentItem: '',
                headers: [
                    {text: 'Icon', value: 'iconUrl'},
                    {text: 'Symbol', value: 'symbol'},
                    {text: 'Name', value: 'name'},
                    {text: 'Price', value: 'price'},
                    {text: 'Change', value: 'change'},
                    {text: 'Rank', value: 'rank'},
                ]
            }
        },
    }
</script>
