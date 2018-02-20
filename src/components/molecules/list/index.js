import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, spacing, fonts } from '../../../tokens'

const StyledLabel = styled.div`
  font-size: 12px;
  font-weight: ${fonts.weight.medium};
  padding: ${spacing.xsmall} 0;
  text-transform: uppercase;
`

const StyledRow = styled.div`
  border-top: 1px solid ${colors.list.borderColor};
  padding: ${spacing.small} ${spacing.xsmall};
  &:hover {
    background: ${colors.list.backgroundHover};
  }
`

const StyledList = styled.div`
  margin: ${spacing.large} 0;
`

const List = props => {
  return (
    <StyledList>
      {props.label ? <StyledLabel>{props.label}</StyledLabel> : null}
      {React.Children.map(props.children, child => <StyledRow>{child}</StyledRow>)}
    </StyledList>
  )
}

List.propTypes = {
  /** header for list */
  label: PropTypes.string
}

List.defaultProps = {}

export default List
