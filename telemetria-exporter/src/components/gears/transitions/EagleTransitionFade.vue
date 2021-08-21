<template>
  <transition class="eagle-transition-fade" name="eagle-fade">
    <slot v-if="show" />
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class EagleTransitionFade extends Vue {
  /* DATA */

  private show = false;

  /* LIFE CYCLE HOOKS */

  mounted(): void {
    setTimeout(() => (this.show = true), 1000);
  }
}
</script>

<style scoped>
.eagle-fade-enter-active,
.eagle-fade-leave-active {
  transition: opacity 700;
}
.eagle-fade-enter,
.eagle-fade-leave-to {
  opacity: 0;
}
</style>