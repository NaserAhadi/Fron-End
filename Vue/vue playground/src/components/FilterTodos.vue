<template>
    <v-row>
        <select v-on:change="filterTodos($event)">
            <option class="option" value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="20">20</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </v-row>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "FilterTodos",
        methods: {
            ...mapActions(['filterTodos']),
        }
    }
</script>

<style scoped>
    select{
        background: #333;
        color:#fff;
        padding:0.8rem;
        width:5rem;
        border-radius: 3px;
        text-align: center;
        font-size: 1.2rem;
    }
</style>