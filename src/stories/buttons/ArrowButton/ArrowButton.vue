<template>
  <div class="button relative inline-block">
    <div class="title-container bg-gray-800 py-1 px-4 inline-block">
      <h4 class="title text-white text-4xl tracking-widest uppercase">Click Please</h4>
    </div>
    <div class="subtitle-container bg-red-600 h-12 inline-block absolute"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component({})
export default class ArrowButton extends Vue {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Anton&display=swap');

.button {
  transform: rotate(-15deg);
}

.title-container {
  transform: skew(-20deg);

  &:before {
    content: '';
    position: absolute;
    top: -25%;
    left: -10%;
    width: 6rem;
    height: 6rem;
    background: #2d3748;
    transform: rotate(60deg) skew(0deg, -40deg);
  }
}

.title {
  transform: skew(20deg);
  font-family: 'Anton', sans-serif;
}

.subtitle-container {
  width: 100%;
  top: 40%;
  left: 10%;
  transform: skew(-30deg) rotate(5deg);
  z-index: -1;
}

</style>
