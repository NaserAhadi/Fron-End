<template>
    <v-container>
        <v-card>
            <v-form v-on:submit="onSubmit">
                <v-row class="justify-center">
                    <h1 class="mt-4">Add Item To Do</h1>
                </v-row>
                <v-row class="mx-auto">
                    <v-col cols="1"></v-col>
                    <v-col cols="7" class="ml-12">
                        <v-text-field v-model="title" label="Add Item" outlined></v-text-field>
                    </v-col>
                    <v-col cols="1" class="ml-3">
                        <v-btn  type="submit" color="primary" class="pa-7 subtitle-1">Submit</v-btn>
                    </v-col>
                    <v-col cols="2" class="ml-4">
                        <FilterTodos/>
                    </v-col>
                </v-row>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
    import {mapActions} from 'vuex'
    import FilterTodos from "./FilterTodos";


    export default {
        name: "AddTodo",
        components: {FilterTodos},
        data(){
            return{
                title:''
            }
        },
        methods: {
            ...mapActions(['addTodo']),
            onSubmit(event){
                event.preventDefault();
                this.addTodo(this.title);
                this.title = ''
            }
        }
    }
</script>

<style scoped>

</style>