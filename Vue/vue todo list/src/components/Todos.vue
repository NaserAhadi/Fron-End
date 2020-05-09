<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in myTodos">
            <TodoItem v-bind:myTodo="todo" v-on:del-btn="$emit('del-btn',todo.id)"/>
        </div>
    </div>
</template>

<script>
    import TodoItem from './TodoItem.vue'

    export default {
        name: "Todos",
        components:{
          TodoItem
        },
        props:['myTodos']
    }
</script>

<style scoped>

</style>