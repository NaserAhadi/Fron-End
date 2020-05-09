<template>
    <v-container>
        <v-row>
            <v-col
                    v-for="item in allImages"
                    :key="item.id"
                    cols="12"
                    md="4"
            >
                <v-card class="elevation-2">
                    <v-container>
                        <v-img :src="item.download_url" width="550" height="400"></v-img>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'


    export default {
        name: "ImageComponent",
        methods: mapActions(['fetchImages']),
        computed: mapGetters(['allImages']),
        created() {
            this.fetchImages()
        }
    }
</script>
