<template>
  <div class="database-title row justify-content-center">
    <div class="col">
      <eagle-title>Export Database</eagle-title>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import EagleTitle from "@/components/gears/basics/EagleTitle.vue";

@Component({
  components: {
    EagleTitle,
  },
})
export default class DatabaseTitle extends Vue {}
</script>

<style lang="scss" scoped>
.database-title {
  margin-bottom: 24px;
}
</style>
