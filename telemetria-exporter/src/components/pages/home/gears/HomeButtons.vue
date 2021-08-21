<template>
  <div class="home-buttons row justify-content-center">
    <div class="col d-flex align-items-center justify-content-center">
      <eagle-button class="button" to="/database">DATABASE</eagle-button>
      <eagle-button class="button" to="/logs">LOGS</eagle-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import EagleButton from "@/components/gears/basics/EagleButton.vue";

@Component({
  components: {
    EagleButton,
  },
})
export default class HomeButtons extends Vue {}
</script>

<style lang="scss" scoped>
.home-buttons {
  .button {
    margin: 0 8px;
  }
}
</style>
