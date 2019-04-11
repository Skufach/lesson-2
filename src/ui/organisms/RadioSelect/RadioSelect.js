import React from 'react'
import PropTypes from 'prop-types'
import { styled, theme } from '@ui/theme'
import { VBox, HBox } from '@ui/atoms'
import { RadioButton, FormLabel } from '@ui/molecules'
import { InputError, InputTip } from '@ui/atoms/Typography'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export class RadioSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.setFirst = this.setFirst.bind(this)
    this.setSecond = this.setSecond.bind(this)
  }

  setFirst() {
    this.setState({ value: "men" })
  }

  setSecond() {
    this.setState({ value: "women" })
  }

  render() {
    const value = this.state.value

    const disabled = this.props.disabled
    const firstName = this.props.firstName
    const secondName = this.props.secondName
    const label = this.props.label
    const error = this.props.error
    const tip = this.props.tip
    const onPress = this.props.onPress

    return (
      <Container>
        <FormLabel>{label}</FormLabel>
        <HBox height={theme.paddings.half} />
        <RadioContainer onClick={onPress && !disabled ? onPress : undefined} >
          <RadioButton
            value={value === "men" ? true : false}
            disabled={disabled === true ? true : false}
            onPress={this.setFirst}
            children={firstName}
            error={error}
          />
          <VBox />
          <RadioButton
            value={value === "women" ? true : false}
            disabled={disabled === true ? true : false}
            onPress={this.setSecond}
            children={secondName}
            error={error}
          />
        </RadioContainer>
        <HBox height={theme.paddings.half} />

        {error ? <InputError>{error}</InputError> : <InputTip>{tip}</InputTip>}
      </Container>
    )
  }
}

RadioSelect.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  error: PropTypes.string,
  tip: PropTypes.string,
  firstName: PropTypes.string,
  secondName: PropTypes.string,

  value: PropTypes.oneOf(['men', 'women', '']),
  onPress: PropTypes.func.isRequired,
}
