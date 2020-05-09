<template>
    <div>
        <h3>Add Todo</h3>
        <form v-on:submit="onSubmit">
            <input type="text" v-model="title" placeholder="Add Something ...">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "AddTodo",
        data(){
          return{
              title:''
          }
        },
        methods: {
            ...mapActions(['addTodo']),
            onSubmit(e){
                e.preventDefault();
                this.addTodo(this.title);
                this.title = ''
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
        box-sizing: border-box;
    }

    input[type='text'] {
        flex: 10;
        padding: 0.6rem;
        font-size: 1.2rem;
        margin-right: 10px;
        border-radius: 3px;
    }

    input[type='submit'] {
        flex: 1.1;
        padding: 0.6rem;
        background: #41b883;
        color: #000;
        border: none;
        font-size: 1.2rem;
        border-radius: 3px;
    }

    input[type='submit']:hover {
        background: coral;
        color: #fff;
    }

    input[type='submit']:active {
        transform: translateY(2px)
    }
</style>