<template>
  <div>
    {{msg}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class PersonComponent extends Vue {
  @Prop()
  name!: string;

  get msg(): string {
    return `Hello ${this.name}`;
  }
}
</script>
