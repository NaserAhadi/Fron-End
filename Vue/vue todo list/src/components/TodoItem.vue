<template>
    <div class="todoItem">
        <p v-bind:class="{'isCompleted':myTodo.completed}">
            <input type="checkbox" v-on:change="markComplete" id="checkBox">
            {{myTodo.title}}
        </p>
        <button class="del" v-on:click="$emit('del-btn',myTodo.id)">X</button>
    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        props: ['myTodo'],
        methods:{
            markComplete(){
                this.myTodo.completed = ! this.myTodo.completed
            }
        }
    }
</script>

<style scoped>
    .todoItem {
        background-color: #ccc;
        border-bottom: 1px solid green;
        padding: 20px;
        font-weight: bold;
        font-size: 1.2em;
        text-align: left;
        display:flex;
        justify-content: space-between;
    }

    .isCompleted {
        text-decoration: line-through;
    }

    #checkBox{
        margin:0 2px;
    }

    .del{
        background:red;
        border-radius: 2px;
        color:#fff;
        width:18px;
        border:none;
        text-align:center;
        cursor:pointer;
    }
    .del:active{
        transform: translateY(2px);
    }
</style>