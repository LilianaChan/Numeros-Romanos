<template>
  <v-app class="main">


    <v-content>
      <NumeroRomano/>
    </v-content>
  </v-app>
</template>

<script>
import NumeroRomano from './components/NumeroRomano'

export default {
  name: 'App',
  components: {
    NumeroRomano
  },
  data () {
    return {
      //
    }
  }
}
</script>
