import React from 'react'
import PropTypes from 'prop-types'

export const IconRadioButtonOff =({ color }) => (
  <svg  width={24} height={24} fill="none" >
    <circle cx={12} cy={12} r={10} stroke={color ? color : '#D3D3D3'} />
  </svg>
)

IconRadioButtonOff.propTypes = {
  color: PropTypes.string,
}

