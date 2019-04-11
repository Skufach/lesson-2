import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { RadioButtonField } from './RadioButtonField'

storiesOf('ui/molecules', module).add('RadioButtonField', () => (
  <RadioButtonField
    value={boolean('value', false)}
    error={text('error', '')}
    disabled={boolean('disabled', false)}
    onPress={action('onPress')}
  />
))
