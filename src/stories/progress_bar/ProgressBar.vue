<template>
  <div class="progress-container fixed rounded-lg bg-gray-500">
    <div class="progress bg-red-600 rounded-lg" :style="widthStyle"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class ProgressBar extends Vue {
  percent: number = 0;
  get widthStyle() {
    return {
      'width': `${this.percent * 100}%`
    }
  }

  mounted() {
    const viewHeight = window.innerHeight;
    const totalHeight = document.body.getBoundingClientRect().height;
    const h = totalHeight - viewHeight;
    
    window.addEventListener('scroll', el => {
      window.requestAnimationFrame(() => {
        const percent = Math.max(0, Math.min(1, window.pageYOffset / h));
        this.percent = percent;
      })
    })
  }
}
</script>

<style scoped lang="scss">
.progress-container {
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
}

.progress {
  height: 100%;
  transition: width .2s;
}

</style>
