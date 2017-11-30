import React, {Component, PropTypes} from 'react';
import RenderOption from '../../common/RenderOption';

export default class DropDown extends Component {

  static get propTypes() {
    return {
      options: PropTypes.array,
      onChange: PropTypes.func,
      disabled: PropTypes.string,
      validate: PropTypes.array
    };
  }

  state =  {hasError: false, error: null};

  handleChange = (e) => {
     const {onChange, disabled, validate} = this.props;
     const value = e.target.value;
     const name = e.target.name;
     if (disabled) {
       return;
     }

     if(!validate || !validate.length) {
       if(onChange) onChange({name, value});
       return;
     }

     const promises = validate.map( valRule => {
       return new Promise(function(resolve, reject) {
         const error = valRule(value);
          if(error) {
            reject(error);
          }
          resolve();
       });
     });

     Promise.all(promises)
        .then( success => {
          this.setState({hasError: false, error: null});
          if(onChange) onChange({name, value});
        })
        .catch(error => {
          this.setState({hasError: true, error: error});
          if(onChange) onChange({name, value});
        });

  }

  render() {
    let props = Object.assign({}, this.props);
    const {hasError, error} = this.state;

    if (props.onChange) {
      delete props.onChange;
    }

    return (
        <div className={hasError ? 'has-error' : ''}>
        {props.label && <label><b>{props.label}</b></label> }
          <select
            className={hasError ? 'has-error form-control' : 'form-control'}
            onChange={this.handleChange}
            {...props}
            >
            {props.options && props.options.map((i, key) => <RenderOption key={key} {...i} /> )}
          </select>
            {hasError &&
              ((error &&
                <span>
                  {error}
                </span>))}
        </div>
    );
  }
}
