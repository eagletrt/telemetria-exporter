<template>
  <div class="database-content row justify-content-center">
    <div class="col">
      <database-items :databases="databases" :selected="currentDatabaseIndex" />
    </div>
    <div class="col">
      <!-- <collection-items :collections="collections" /> -->
    </div>
    <div class="col">
      <!-- <selected-items :selectedItems="selectedItems" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { CollectionInfo, DatabaseSchema } from "@/types";
import { Component, Prop, Vue } from "vue-property-decorator";

import DatabaseItems from "./gears/DatabaseItems.vue";

@Component({
  components: {
    DatabaseItems,
  },
})
export default class DatabaseContent extends Vue {
  /* PROPS */

  @Prop({ type: Array, required: true })
  databases!: string[];

  @Prop({ type: Number, required: true })
  currentDatabaseIndex!: number;

  @Prop({ type: Array, required: true })
  collections!: CollectionInfo[];

  @Prop({ type: Object, required: true })
  selectedItems!: DatabaseSchema;
}
</script>

<style lang="scss" scoped>
.database-title {
  margin-bottom: 24px;
}
</style>
