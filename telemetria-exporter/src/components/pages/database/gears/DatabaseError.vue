<template>
  <div class="database-error row justify-content-center">
    <div class="col text-center">
      <eagle-logo class="d-inline-block" />
      <eagle-label class="label d-inline-block" :label="$store.state.message" color="red" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import EagleLogo from "@/components/gears/basics/EagleLogo.vue";
import EagleLabel from "@/components/gears/basics/EagleLabel.vue";

@Component({
  components: {
    EagleLogo,
    EagleLabel,
  },
})
export default class DatabaseError extends Vue {}
</script>

<style lang="scss" scoped>
.database-error {
  margin: 50px 0;

  .label {
    margin-left: 50px;
  }
}
</style>
