/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import FlashShadowButton from './FlashShadowButton.vue'

storiesOf('FlashShadowButton', module)
  .add('Primary', () => ({
    components: { FlashShadowButton },
    data() {
      return {
        btnOption: {
          name: 'Primary',
          value: 100,
          color: 'primary',
        }
      }
    },
    methods: {
      onButtonClick: action('onClick'),
    },
    template: `
      <flash-shadow-button :data="btnOption" @submit="onButtonClick">click me</flash-shadow-button>
    `,
  }))

  .add('Secondary', () => ({
    components: { FlashShadowButton },
    data() {
      return {
        btnOption: {
          name: 'Secondary',
          value: 200,
          color: 'secondary',
        }
      }
    },
    template: `
      <flash-shadow-button :data="btnOption">click me</flash-shadow-button>
    `,
  }))

  .add('Information', () => ({
    components: { FlashShadowButton },
    props: {
      btnOption: {
        default: {
          name: 'Information',
          value: 300,
          color: 'info',
        }
      }
    },
    template: `
      <flash-shadow-button :data="btnOption">click me</flash-shadow-button>
    `,
  }))
