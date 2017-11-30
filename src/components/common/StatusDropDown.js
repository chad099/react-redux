import React, {Component, PropTypes} from 'react';

export default class StatusDropDown extends Component {

  static get propTypes() {
    return {
      options: PropTypes.array,
      onChange: PropTypes.func,
      accountTypeId: PropTypes.number,
      value: PropTypes.number
    };
  }

  handleChange = (e) => {
    const {onChange} = this.props;
    if(onChange) onChange({accountTypeId: e.target.id, value: e.target.value});
  }

  render() {
    const {options, accountTypeId, value} = this.props;
    return(
      <select className="form-control" onChange={this.handleChange} id={accountTypeId} value={value}>
        {options && options.map((i, key) => <option key={key} value={i.value}>{i.title}</option>)}
      </select>
    );
  }
}
