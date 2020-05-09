<template>
    <header class="header">
        <h1>Todo List</h1>
        <br>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

.header{
    background-color:#111;
    color:#fff;
    padding:40px;
    text-align:center;
    font-size:1.5em;
}
.header a{
    color:#fff;
    text-decoration: none;
}
.header a:hover{
    color:red;
}

</style>