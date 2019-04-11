import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { RadioSelect } from './RadioSelect'

storiesOf('ui/organisms', module).add('RadioSelect', () => (
  <RadioSelect
    onPress={action()}
    disabled={boolean('disabled', true)}
    firstName={text('firstName', 'Муж')}
    secondName={text('secondName', 'Жен')}
    label={text('label', 'Пол')}
    tip={text('tip', 'Выберите пол')}
    error={text('error', 'Обязательное поле')}
  />
))
