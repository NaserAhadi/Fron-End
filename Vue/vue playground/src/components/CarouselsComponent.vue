<template>
    <v-carousel
            cycle
            height="800"
            hide-delimiter-background
            show-arrows-on-hover
            class="elevation-2"
    >
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
        >
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        name: "CarouselsComponent",
        data() {
            return {
                items: [
                     {src:'https://picsum.photos/id/0/5616/3744'},
                    {src:'https://picsum.photos/id/10/2500/1667'},
                    {src:'https://picsum.photos/id/1000/5626/3635'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>