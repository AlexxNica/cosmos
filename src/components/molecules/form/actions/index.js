import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing } from '../../../../tokens'
import getLayout from '../layout'

import Button from '../../../atoms/button'
import ButtonGroup from '../../../molecules/button-group'
import { Right, Clear } from '../../../_helpers/float'

const StyledActions = styled.div`
  width: ${props => getLayout(props.layout).formWidth};
  padding-left: ${props =>
    props.layout === 'label-on-left' ? getLayout(props.layout).labelWidth : 0};
  margin-left: ${props => (props.layout === 'label-on-left' ? 0 : 'auto')};
  margin-top: ${spacing.medium};
`

const Actions = props => {
  const layout = props.layout

  return (
    <StyledActions layout={layout}>
      <ButtonGroup>
        {props.primaryAction && (
          <Button primary onClick={props.primaryAction.method}>
            {props.primaryAction.label}
          </Button>
        )}
      </ButtonGroup>

      {props.secondaryActions &&
        props.secondaryActions.map((action, index) => {
          return (
            <Button key={index} onClick={action.method}>
              {action.label}
            </Button>
          )
        })}

      {props.destructiveActions && (
        <Right>
          {props.destructiveActions.map((action, index) => (
            <Button key={index} onClick={action.method} destructive>
              {action.label}
            </Button>
          ))}
        </Right>
      )}
      <Clear />
    </StyledActions>
  )
}

Actions.displayName = 'Form Actions'

const actionShape = {
  label: PropTypes.string.isRequired,
  method: PropTypes.func.isRequired
}

Actions.propTypes = {
  primaryAction: PropTypes.shape(actionShape),
  secondaryActions: PropTypes.arrayOf(PropTypes.shape(actionShape))
}

Actions.defaultProps = {}

export default Actions
export { StyledActions }
