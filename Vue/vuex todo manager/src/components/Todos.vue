<template>
    <div>
        <h3>Todos</h3>
        <div class="legend">
            <span>Double click to mark as complete</span>
            <span>
                <span class="incomplete-box"></span> = Incomplete
            </span>
            <span>
                <span class="complete-box"></span> = Complete
            </span>
        </div>
        <div class="todos">
            <div
                v-for="todo in allTodos"
                v-bind:key="todo.id"
                v-on:dblclick="onDblClick(todo)"
                v-bind:class="{'is-complete':todo.completed}"
                class="todo"
            >
                {{todo.title}}
                <i v-on:click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Todos",
        methods: {
            ...mapActions(['fetchTodos', 'deleteTodo','updateTodo']),
            onDblClick(todo){
                const updTodo = {
                    id: todo.id,
                    title:todo.title,
                    completed: !todo.completed
                };

                this.updateTodo(updTodo)
            }
        },
        computed: mapGetters(['allTodos']),
        created() {
            this.fetchTodos()
        }
    }
</script>

<style scoped>
    .todos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem
    }

    .todo {
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 3px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }

    i {
        position: absolute;
        right: 10px;
        bottom: 10px;
        color: #fff;
        cursor: pointer;
    }

    i:active {
        transform: translateY(1px)
    }

    .legend {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }

    .incomplete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #41b883;
    }

    .complete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #333;
    }

    .is-complete{
        background: #333;
        color:#fff;
    }

    @media (max-width: 650px) {
        .todos {
            grid-template-columns: 1fr;
        }

        .legend {
            display: flex;
            flex-direction: column;
        }
    }
</style>