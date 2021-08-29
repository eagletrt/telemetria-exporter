<template>
  <div class="database-items">
    <eagle-item v-for="(db, index) of databases" :key="db" type="DB" :text="ellipseText(db)" :selected="index === selected" @click="selectDatabase(index)" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ActionTypes } from "@/store";

import { ellipseText } from "@/utils/ellipseText";

import EagleItem from "@/components/gears/basics/EagleItem.vue";

@Component({
  components: {
    EagleItem,
  },
})
export default class DatabaseItems extends Vue {
  /* PROPS */

  @Prop({ type: Array, required: true })
  databases!: string[];

  @Prop({ type: Number, default: -1 })
  selected!: number;

  /* METHODS */

  selectDatabase(index: number): void {
    this.$store.dispatch(ActionTypes.SELECT_DATABASE, index);
  }

  ellipseText(text: string): string {
    return ellipseText(text, 34);
  }
}
</script>