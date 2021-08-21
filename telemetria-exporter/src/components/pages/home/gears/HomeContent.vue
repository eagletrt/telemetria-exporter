<template>
  <div class="home-content row justify-content-center">
    <div class="col">
      <eagle-paragraph>
        <span>This is the webapp that allows you to export the data gathered by the <b>telemetry</b> of <b>EagleTRT</b>.</span>
        <br />
        <span>
          You can either export the elaborated data from the <b>database</b> (in <b>csv</b> or <b>json</b> format), or the <b>raw logs</b> of the <b>gps</b> and the
          <b>canbus</b> raw .
        </span>
      </eagle-paragraph>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import EagleParagraph from "@/components/gears/basics/EagleParagraph.vue";

@Component({
  components: {
    EagleParagraph,
  },
})
export default class HomeContent extends Vue {}
</script>

<style lang="scss" scoped>
.home-content {
  margin: 48px 0;
}
</style>
