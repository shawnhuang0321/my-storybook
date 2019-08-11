/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import ProgressBar from './ProgressBar.vue';

storiesOf('ProgressBar', module)
  .add('Default', () => ({
    components: { ProgressBar },
    template: `
      <div style="height: 2000px;">
        <ProgressBar />
      </div>
    `
  }))
