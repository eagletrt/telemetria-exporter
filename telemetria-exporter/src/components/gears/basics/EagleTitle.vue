<template>
  <h1 class="eagle-title">
    <slot>{{ title }}</slot>
  </h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EagleTitle extends Vue {
  /* PROPS */

  @Prop({ type: String, default: "Title" })
  title!: string;
}
</script>

<style lang="scss" scoped>
.eagle-title {
  text-align: center;
  font-weight: bold;
}
</style>