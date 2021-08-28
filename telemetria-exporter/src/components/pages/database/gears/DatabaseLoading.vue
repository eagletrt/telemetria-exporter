<template>
  <div class="database-loading row justify-content-center">
    <div class="col text-center">
      <eagle-spinner class="d-inline-block" />
      <eagle-label class="label d-inline-block" :label="$store.state.message" loading />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import EagleSpinner from "@/components/gears/basics/EagleSpinner.vue";
import EagleLabel from "@/components/gears/basics/EagleLabel.vue";

@Component({
  components: {
    EagleSpinner,
    EagleLabel,
  },
})
export default class DatabaseLoading extends Vue {}
</script>

<style lang="scss" scoped>
.database-loading {
  margin: 50px 0;

  .label {
    margin-left: 50px;
  }
}
</style>
