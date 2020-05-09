<template>
    <v-container>
        <v-card class="elevation-1">
            <v-row class="justify-center">
                <v-col
                        v-for="todo in allTodos"
                        v-bind:key="todo.id"
                        :align="alignment"
                        :justify="justify"
                        class="ma-1"
                        cols="12"
                        md="3"
                >
                    <v-card
                            class="pa-8 pt-12 primary darken-2 elevation-12 headline"
                            height="12rem"
                            dark
                    >
                        {{todo.title}}
                        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Todos",
        methods: {
            ...mapActions(['fetchTodos','deleteTodo'])
        },
        computed: mapGetters(['allTodos']),
        created() {
            this.fetchTodos()
        },
        data() {
            return {
                alignment: 'center',
                justify: 'center'
            }
        }
    }
</script>

<style scoped>
    i{
        position: absolute;
        right:15px;
        bottom:15px;
    }
    i:active{
        transform: translateY(1px);
    }
    i:hover{
        color:red;
    }
</style>