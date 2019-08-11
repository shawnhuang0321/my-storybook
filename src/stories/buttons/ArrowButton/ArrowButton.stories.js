/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import ArrowButton from './ArrowButton.vue';

storiesOf('ArrowButton', module)
  .add('Default', () => ({
    components: { ArrowButton },
    template: `
      <div class="m-20">
        <ArrowButton />
      </div>
    `
  }))
