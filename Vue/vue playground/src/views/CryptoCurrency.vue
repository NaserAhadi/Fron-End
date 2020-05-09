<template>
  <v-container>
    <CryptoComponent/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import CryptoComponent from "../components/CryptoComponent";

export default {
  name: 'Home',
  components: {
    CryptoComponent
  }
}
</script>
