import React, { Component } from 'react'
import Grid from '../common/layout/grid'

class CreditList extends Component {
  render () {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Créditos</legend>
        </fieldset>
      </Grid>
    )
  }
}

export default CreditList
