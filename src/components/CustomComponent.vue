<template>
  <div>
    <input
      :style="{
        background: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
      }"
      type="text"
      :value="value"
      @input="handleChange" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class CustomComponent extends Vue {

  @Prop()
  value!: string;

  @Prop({ default: false, type: Boolean })
  dark!: Boolean;

  handleChange(val: any) {
    this.$emit('input', val.target.value);
  }
}
</script>
