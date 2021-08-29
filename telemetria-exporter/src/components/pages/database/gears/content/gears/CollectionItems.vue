<template>
  <div class="collection-items">
    <eagle-item
      v-for="{ label, selected } of collections"
      :key="label"
      type="COLLECTION"
      :text="ellipseText(label)"
      :selected="selected"
      @click="toggleCollection(label, selected)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { ActionTypes } from "@/store";
import { CollectionInfo } from "@/types";

import { ellipseText } from "@/utils/ellipseText";

import EagleItem from "@/components/gears/basics/EagleItem.vue";

@Component({
  components: {
    EagleItem,
  },
})
export default class CollectionItems extends Vue {
  /* PROPS */

  @Prop({ type: Array, required: true })
  collections!: CollectionInfo[];

  /* GETTERS */

  get database(): string | null {
    return this.$store.getters.currentDatabaseName;
  }

  /* METHODS */

  selectDatabase(index: number): void {
    this.$store.dispatch(ActionTypes.SELECT_DATABASE, index);
  }

  toggleCollection(label: string, selected: boolean): void {
    const collection = { db: this.database as string, collection: label };
    if (selected) {
      this.$store.dispatch(ActionTypes.REMOVE_COLLECTION, collection);
    } else {
      this.$store.dispatch(ActionTypes.ADD_COLLECTION, collection);
    }
  }

  ellipseText(text: string): string {
    return ellipseText(text, 34);
  }
}
</script>