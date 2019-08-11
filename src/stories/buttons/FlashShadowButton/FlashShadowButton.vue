<template>
  <div class="button-container">
    <button
      class="btn p-2"
      :class="buttonColor"
      @click="handleClick">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

interface Data {
  name: string;
  value: number;
  color?: string;
}

@Component
export default class FlashShadowButton extends Vue {
  @Prop()
  data!: Data;

  @Emit()
  submit(value: number): number {
    return value;
  }

  get buttonColor(): string {
    if (!this.data.color) return 'btn-primary';
    return `btn-${this.data.color}`;
  }
  handleClick(): void {
    this.submit(this.data.value);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$types: (
  primary: #63B3ED,
  secondary: #68D391,
  info: #7F9CF5,
);

@each $name, $color in $types {
  .btn-#{$name} {
    &::before {
      border-color: $color;
    }

    &::after {
      background:linear-gradient(to right, darken($color, 30%), $color);
    }
  }
}

// helpers
.p-2 {
  padding: .5rem;
}

// custom style
.button-container {
  display: inline-block;
  padding: 1rem;
  overflow: hidden;
}

.btn {
  position: relative;
  outline: none;
  border: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    // border: 2px solid $moderate-cyan;
    border-width: 2px;
    border-style: solid;
    transform: skewX(-15deg);
  }

  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: -150%;
    width: 100%;
    height: 100%;
    opacity: .6;
    transform: skewX(-15deg);
    transition: left .1s ease-in;
  }

  &:hover {
    &::after {
      left: 3px;
    }
  }
}

</style>
