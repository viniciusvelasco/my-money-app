import { Classes, Intent, Switch, Tag } from "@blueprintjs/core";
import * as classNames from "classnames";
import * as moment from "moment";
import * as React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { change } from 'redux-form'

import { DatePicker } from '@blueprintjs/datetime';
import { DateInput } from "@blueprintjs/datetime";

class LabelAndDate extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(date) {
        console.log(this.props.formName)
        this.props.change(this.props.formName, this.props.input.name, date)
        this.props.change(this.props.formName, 'isModified', true)
    }
  render () {
      const { props } = this
    return (
      <div>
        <DateInput {...props} format='DD/MM/YYYY' defaultValue={new Date()} onChange={(newDate) => this.handleChange(newDate)}
                    selectedValue={props.format} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ change }, dispatch)
export default connect(null, mapDispatchToProps)(LabelAndDate)
