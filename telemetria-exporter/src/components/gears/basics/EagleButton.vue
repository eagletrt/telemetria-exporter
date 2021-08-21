<template>
  <div class="eagle-button">
    <router-link :to="to" v-if="to">
      <b-button variant="outline-primary" :disabled="disabled" @click="$emit('click')">
        <slot>
          {{ text }}
        </slot>
      </b-button>
    </router-link>
    
    <b-button v-else variant="outline-primary" :disabled="disabled" @click="$emit('click')">
      <slot>
        {{ text }}
      </slot>
    </b-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EagleButton extends Vue {
  /* PROPS */

  @Prop({ type: String, default: "Button" })
  text!: string;

  @Prop({ type: Boolean, default: false })
  disabled!: boolean;

  @Prop({ type: String, required: false })
  to?: string;
}
</script>

<style lang="scss" scoped>
.btn-outline-primary {
  border-color: #ffec00 !important;
  color: #ffec00 !important;
}
.btn-outline-primary:hover {
  background: #ffec00 !important;
  color: #000000 !important;
  font-weight: bold !important;
}
.disabled:hover {
  border-color: #ffec00 !important;
  color: #ffec00 !important;
  background: #000000 !important;
  font-weight: normal !important;
}
</style>