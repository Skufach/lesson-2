import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { VBox, Flex1 } from '@ui/atoms'
import { Body2 } from '@ui/atoms/Typography'
import { CheckboxField } from '@ui/molecules'

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

export class CheckboxWithText extends React.Component {
  handleChange = e => {
    const { onClick, value } = this.props

    if (onClick) {
      onClick(value)
    }
  }

  render() {
    const { children, error, name, disabled, value } = this.props
    return (
      <Container>
        <Input
          type="checkbox"
          name={name}
          checked={value || false}
          onChange={this.handleChange}
          value={value || false}
          disabled={disabled}
        />
        <CheckboxField value={value} error={error} disabled={disabled} />
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
  }
}

CheckboxWithText.propTypes = {
  children: PropTypes.node,
  value: PropTypes.bool,
  onClick: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool,
}
