<template>
  <div class="home bg-primary">
    <custom-component
      dark
      v-model="searchText"></custom-component>
    <custom-component
      v-model="searchText"></custom-component>
      <custom-functional-component v-model="searchText" :foo="`foo`">
        <template v-slot="{bar}">
          <span>{{bar.foo}}</span>
        </template>
      </custom-functional-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CustomComponent from '../components/CustomComponent.vue';
import CustomFunctionalComponent from '@/components/CustomFunctionComponent.vue';

@Component({
  components: {
    CustomComponent,
    CustomFunctionalComponent,
  }
})
export default class Home extends Vue {
  searchText: string = 'hello from home';
}
</script>
