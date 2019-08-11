<template functional>
  <div>
    <slot :bar="data.attrs" />
  </div>
</template>

<script lang="ts">
import { CreateElement, RenderContext } from 'vue';

export default {
  name: 'CustomFunctionalComponent',
  functional: true,
}

</script>
