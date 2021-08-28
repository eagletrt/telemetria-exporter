<template>
  <div class="database">
    <database-title />
    <database-loading v-if="isLoading" />
    <database-error v-if="isError" />
    <database-buttons />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Status } from "@/types";

import DatabaseTitle from "./gears/DatabaseTitle.vue";
import DatabaseLoading from "./gears/DatabaseLoading.vue";
import DatabaseError from "./gears/DatabaseError.vue";
import DatabaseButtons from "./gears/DatabaseButtons.vue";

@Component({
  components: {
    DatabaseTitle,
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
    return true;
    // return this.$store.state.loading;
  }

  get isError(): boolean {
    return this.status === Status.FETCHING_ERROR || this.status === Status.EXPORTING_ERROR;
  }
}
</script>