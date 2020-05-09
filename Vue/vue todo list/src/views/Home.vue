<template>
    <div id="app">
        <AddTodo v-on:add-todo="addTodo"/>
        <Todos v-bind:myTodos="todos" v-on:del-btn="deleteTodo"/>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import Todos from '../components/Todos.vue'
    import AddTodo from '../components/AddTodo.vue'
    import axios from 'axios'

    export default {
        name: 'Home',
        components: {
            // HelloWorld,
            Todos,
            AddTodo
        },
        data() {
            return {
                todos: []
            }
        },
        methods: {
            deleteTodo(id) {
                axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
                    // eslint-disable-next-line no-unused-vars
                    .then(response => this.todos = this.todos.filter(todo => todo.id !== id))
                    .catch(error => console.log(error));
            },
            addTodo(newTodo) {
                const {title, completed} = newTodo;

                axios.post('https://jsonplaceholder.typicode.com/todos', {
                    title,
                    completed
                })
                    .then(response => this.todos = [...this.todos, response.data])
                    .catch(error => console.log(error));
            }
        },
        // created Description below the style tag
        created() {
            axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _limit: 5
                },
            })
                .then(response => this.todos = response.data)
                .catch(error => console.log(error));
            console.log('created called')
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.3em;
    }

    .btn {
        background: #333;
        color: #fff;
        cursor: pointer;
        border: none
    }

    .btn:hover {
        background: #444;
        color: red;
    }

</style>
<!--
created() : since the processing of the options is finished you have access to reactive data properties and change them
if you want. At this stage DOM has not been mounted or added yet. So you cannot do any DOM manipulation here.
Created is generally used for fetching data from backend API and setting it to data properties.

mounted(): called after the DOM has been mounted or rendered. Here you have access to the DOM elements and
DOM manipulation can be performed
-->