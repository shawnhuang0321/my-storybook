/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'

// import tailwind css
import 'tailwindcss/dist/base.min.css'
import 'tailwindcss/dist/components.min.css'
import 'tailwindcss/dist/utilities.min.css'

const req = require.context('../../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
