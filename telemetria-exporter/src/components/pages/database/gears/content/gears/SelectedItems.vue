<template>
  <div class="selectedItems">
    <div v-for="db of databases" :key="db" class="db-container">
      <eagle-item type="DB" :text="db" selected />
      <div v-for="collection of selectedItems[db]" :key="collection">
        <eagle-item erased type="COLLECTION" :text="collection" :ellipse="35" @click="removeCollection(db, collection)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { ActionTypes } from "@/store";
import { DatabaseSchema } from "@/types";

import EagleItem from "@/components/gears/basics/EagleItem.vue";

@Component({
  components: {
    EagleItem,
  },
})
export default class SelectedItems extends Vue {
  /* PROPS */

  @Prop({ type: Object, required: true })
  selectedItems!: DatabaseSchema;

  /* GETTERS */

  get databases(): string[] {
    return Object.keys(this.selectedItems || {});
  }

  /* METHODS */

  removeCollection(db: string, collection: string): void {
    this.$store.dispatch(ActionTypes.REMOVE_COLLECTION, { db, collection });
  }
}
</script>