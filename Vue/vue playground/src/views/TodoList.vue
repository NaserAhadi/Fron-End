<template>
    <div class="about">
        <AddTodo/>
        <Todos/>
    </div>
</template>

<script>
    import Todos from "../components/Todos";
    import AddTodo from "../components/AddTodo";

    export default {
        components: {AddTodo, Todos}
    }
</script>