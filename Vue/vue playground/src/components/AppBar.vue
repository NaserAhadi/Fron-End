<template>
    <div>
        <v-app-bar
                color="deep-purple"
                dark
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>Vue Play Ground</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-switch @click="toggleTheme"></v-switch>
        </v-app-bar>

        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                style="height: 100vh"
        >
            <v-list

            >
                <v-list-item-group
                        active-class="deep-purple--text text-accent-4"
                >
                    <v-list-item to="/">
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item to="/crypto-currency">
                        <v-list-item-icon>
                            <v-icon>mdi-bitcoin</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Bitcoin</v-list-item-title>
                    </v-list-item>

                    <v-list-item to="/todo-list">
                        <v-list-item-icon>
                            <v-icon>mdi-clipboard-list-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Todo List</v-list-item-title>
                    </v-list-item>

                    <v-list-item to="/album">
                        <v-list-item-icon>
                            <v-icon>mdi-camera</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Album</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        name: "AppBar",
        data: () => ({
            drawer: false,
        }),
        methods:{
            toggleTheme(){
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            }
        }
    }
</script>
