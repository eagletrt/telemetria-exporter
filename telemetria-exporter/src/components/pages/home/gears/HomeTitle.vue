<template>
  <div class="home-title row justify-content-center">
    <div class="col">
      <eagle-title>EagleTRT - Telemetria Exporter</eagle-title>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import EagleTitle from "@/components/gears/basics/EagleTitle.vue";

@Component({
  components: {
    EagleTitle,
  },
})
export default class HomeTitle extends Vue {}
</script>

<style lang="scss" scoped>
.home-title {
  margin-bottom: 24px;
}
</style>
