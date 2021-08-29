<template>
  <div class="database">
    <database-title />
    <database-content v-if="isEditing" :databases="databases" :currentDatabaseIndex="currentDatabaseIndex" :collections="collections" :selectedItems="selectedItems" />
    <database-loading v-if="isLoading" />
    <database-error v-if="isError" />
    <database-buttons />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CollectionInfo, DatabaseSchema, Status } from "@/types";

import DatabaseTitle from "./gears/title/DatabaseTitle.vue";
import DatabaseContent from "./gears/content/DatabaseContent.vue";
import DatabaseLoading from "./gears/loading/DatabaseLoading.vue";
import DatabaseError from "./gears/error/DatabaseError.vue";
import DatabaseButtons from "./gears/buttons/DatabaseButtons.vue";
import { ActionTypes } from "@/store";

@Component({
  components: {
    DatabaseTitle,
    DatabaseContent,
    DatabaseLoading,
    DatabaseError,
    DatabaseButtons,
  },
})
export default class Database extends Vue {
  /* GETTERS */

  get status(): Status {
    return this.$store.state.status;
  }

  get isLoading(): boolean {
    return this.$store.state.loading;
  }

  get isError(): boolean {
    return this.status === Status.FETCHING_ERROR || this.status === Status.EXPORTING_ERROR;
  }

  get isEditing(): boolean {
    return this.status === Status.EDITING;
  }

  get databases(): string[] {
    return this.$store.getters.databases;
  }

  get currentDatabaseIndex(): number {
    return this.$store.state.currentDatabaseIndex;
  }

  get collections(): CollectionInfo[] {
    return this.$store.getters.currentCollections;
  }

  get selectedItems(): DatabaseSchema {
    return this.$store.state.selectedItems;
  }

  /* LIFE CYCLE */

  mounted(): void {
    this.$store.dispatch(ActionTypes.FETCH_DATABASE_SCHEMA);
  }
}
</script>