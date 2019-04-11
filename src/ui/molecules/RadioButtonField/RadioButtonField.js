import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from '@ui/theme'
import { IconRadioButtonOn, IconRadioButtonOff } from '@ui/atoms'

export const RadioButtonField = withTheme(
  ({ value, disabled, error, onPress, theme }) => (
    <div onClick={onPress && !disabled ? onPress : undefined}>
      {value ? (
        <IconRadioButtonOn
          color={disabled ? theme.pallete.whiteSmoke : undefined}
        />
      ) : (
        <IconRadioButtonOff
          color={error ? theme.pallete.errorColor : undefined}
        />
      )}
    </div>
  )
)

RadioButtonField.propTypes = {
  value: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
}
