<template>
  <div class="database">
    <database-title />
    <database-buttons />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DatabaseTitle from "./gears/DatabaseTitle.vue";
import DatabaseButtons from "./gears/DatabaseButtons.vue";

@Component({
  components: {
    DatabaseTitle,
    DatabaseButtons
  },
})
export default class Database extends Vue {}
</script>