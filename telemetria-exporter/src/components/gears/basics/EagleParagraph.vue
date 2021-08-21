<template>
  <p class="eagle-paragraph">
    <slot>{{ paragraph }}</slot>
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EagleParagraph extends Vue {
  /* PROPS */

  @Prop({ type: String, default: "Paragraph" })
  paragraph!: string;
}
</script>

<style lang="scss" scoped>
.eagle-paragraph {
  text-align: justify;
  font-size: 18px;
  padding: 0 36px;
  color: #dbdada;
}
</style>