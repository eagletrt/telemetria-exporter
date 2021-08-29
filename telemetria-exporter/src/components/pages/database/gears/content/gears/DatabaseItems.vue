<template>
  <div class="database-items">
    <item v-for="(db, index) of databases" :key="db" type="DB" :text="db" :selected="index === selected" @itemClicked="selectDatabase(index)" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ActionTypes } from "@/store";

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
}
</script>