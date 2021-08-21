<template>
  <eagle-logo class="eagle-spinner" :width="width" :height="height" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import EagleLogo from "@/components/gears/basics/EagleLogo.vue";

@Component({
  components: {
    EagleLogo,
  },
})
export default class EageSpinner extends Vue {
  /* PROPS */

  @Prop({ type: Number, default: 135 })
  width!: number;

  @Prop({ type: Number, default: 135 })
  height!: number;
}
</script>

<style lang="scss" scoped>
.eagle-spinner {
  animation-name: spin;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  border-radius: 100%;

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>