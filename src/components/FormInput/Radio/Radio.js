import React, {Component, PropTypes} from 'react';

export default class Radio extends Component {

  static get propTypes() {
    return {
      onChange: PropTypes.func,
      disabled: PropTypes.string
    };
  }
  handleChange = (e) => {
     const {onChange, disabled} = this.props;
     const value = e.target.value;
     const name = e.target.name;
     if (disabled) {
       return;
     }

     if(onChange) onChange({name, value});
  }

  render() {
    let props = Object.assign({}, this.props);
    const label = props.label || undefined;
    const className = props.className || "form-check-input";
    if (label) {
      delete props.label;
    }
    if(props.onChange) {
      delete props.onChange;
    }
    if(props.className) {
      delete props.className;
    }

    return (
       label? (
        <label className="form-check-label">
          <input
            className={className}
            type="radio"
            onChange={this.handleChange}
            {...props}
          />
          {label}
        </label>
      ) : (
        <input
          className={className}
          type="radio"
          onChange={this.handleChange}
          {...props}
        />
      )
    );
  }
}
