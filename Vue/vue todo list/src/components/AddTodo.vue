<template>
    <form v-on:submit="addTodo">
        <input type="text" v-model="title" placeholder="Add Something ...">
        <input type="submit" value="Submit" class="btn">
    </form>
</template>

<script>
    // import uuid from 'uuid'
    export default {
        name: "AddTodo",
        data() {
            return {
                title: '',
            }
        },
        methods: {
            addTodo(e){
                e.preventDefault();
                const newTodo = {
                    // id:Math.floor(Math.random()*100+4),
                    title:this.title,
                    completed:false
                };

                // send to up component by emit
                this.$emit('add-todo',newTodo);
                this.title = '';
            }
        }
    }

</script>

<style scoped>
    form {
        display: flex;
    }

    input[type='text'] {
        flex: 10;
        padding: 10px;
        border-radius: 0;
    }

    input[type='submit'] {
        flex: 2
    }
</style>