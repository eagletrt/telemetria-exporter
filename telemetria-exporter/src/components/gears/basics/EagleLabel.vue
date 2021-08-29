<template>
  <h1 class="eagle-label" :style="labelStyle">
    <slot>{{ label }}{{ dots }}{{ spaces }}</slot>
  </h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EagleLabel extends Vue {
  /* PROPS */

  @Prop({ type: String, default: "Label" })
  label!: string;

  @Prop({ type: String, default: "white" })
  color!: string;

  @Prop({ type: Boolean, default: false })
  loading!: boolean;

  /* DATA */

  private dotsCount = 3;
  private interval = 1000;

  /* GETTERS */

  get dots(): string {
    return [...Array(this.dotsCount).keys()].map(() => ".").join("");
  }

  get spaces(): string {
    return [...Array(3 - this.dotsCount).keys()].map(() => " ").join("");
  }

  get labelStyle(): { color: string } {
    return {
      color: this.color,
    };
  }

  /* METHODS */

  updateDots(): void {
    this.dotsCount = (this.dotsCount + 1) % 4;
  }

  /* LIFE CYCLE */

  mounted(): void {
    if (this.loading) {
      setInterval(() => this.updateDots(), this.interval);
    }
  }
}
</script>

<style lang="scss" scoped>
.eagle-label {
  white-space: pre;
}
</style>
