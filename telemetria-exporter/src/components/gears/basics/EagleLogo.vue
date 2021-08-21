<template>
  <div class="eagle-logo">
    <picture :style="imgStyle">
      <source srcset="logo.webp" type="image/webp" />
      <source srcset="logo.png" type="image/png" />
      <img src="logo.png" alt="eagle-logo" :style="imgStyle" />
    </picture>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EageLogo extends Vue {
  /* PROPS */

  @Prop({ type: Number, default: 135 })
  width!: number;

  @Prop({ type: Number, default: 135 })
  height!: number;

  /* GETTERS */

  get imgStyle() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
    };
  }
}
</script>

<style lang="scss" scoped>
.eagle-logo {
  img {
    // width: 200px;
    // height: 200px;
    border-radius: 100%;
  }
}
</style>