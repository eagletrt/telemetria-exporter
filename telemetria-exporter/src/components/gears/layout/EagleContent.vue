<template>
  <div class="eagle-content d-flex align-items-center justify-content-center">
    <eagle-transition-fade>
      <perfect-scrollbar  class="inner-content container" style="background: #000">
        <slot />
      </perfect-scrollbar>
    </eagle-transition-fade>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import EagleTransitionFade from "@/components/gears/transitions/EagleTransitionFade.vue";

@Component({
  components: {
    EagleTransitionFade,
  },
})
export default class EagleContent extends Vue {}
</script>

<style lang="scss" scoped>
.eagle-content {
  width: 100%;
  height: 100%;

  background: #060606;
  color: #f4f4f4;

  .inner-content {
    // background-color: #000;
    padding: 48px;
    max-height: 95%;
    overflow-y: auto;
  }
}
</style>