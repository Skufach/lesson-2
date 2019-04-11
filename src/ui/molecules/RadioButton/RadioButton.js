import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { VBox, Flex1 } from '@ui/atoms'
import { Body2 } from '@ui/atoms/Typography'
import { RadioButtonField } from '@ui/molecules'

const Container = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Input = styled.input`
  width: 1px;
  height: 1px;
  overflow: hidden;
  -webkit-appearance: none;
  border: none;
  outline: none;
  box-shadow: none;
`

export const RadioButton = ({ children, value, onPress, error, disabled }) => (
  <Container onClick={onPress && !disabled ? onPress : undefined}>
    <Input
      type="radio"
      onPress={typeof children === 'string' ? undefined : onPress}  
      disabled={disabled}
    />
    <RadioButtonField
      value={value}
      error={error}
      disabled={disabled}
      onPress={typeof children === 'string' ? undefined : onPress}
    />
    <VBox />
    {typeof children === 'string' ? (
      <Flex1>
        <Body2>{children}</Body2>
      </Flex1>
    ) : (
      children
    )}
  </Container>
)

RadioButton.propTypes = {
  children: PropTypes.node,
  value: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
}
