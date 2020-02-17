import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import DotPagination from '.'

const stories = storiesOf('Core/DotPagination', module)

stories.add(
  'Info',
  () => (
    <DotPagination
      dots={10}
      onChangeIndex={action('Dot clicked')}
      activeIndex={1}
    />
  ),
  {
    info: {
      inline: true,
      text: `
        Simple pagination dots with accessible text and increased hit-areas.
        Accepts an index to highlight a dot, and returns a function when a
        dot is clicked.
      `
    }
  }
)

stories.add('Default state', () => (
  <DotPagination
    dots={10}
    onChangeIndex={action('Dot clicked')}
    activeIndex={1}
  />
))
