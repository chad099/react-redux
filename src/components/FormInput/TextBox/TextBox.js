import React from 'react';

const TextBox = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} className="form-control"/>
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)


export default TextBox;


// export default class TextBox extends Component {
//
//   static get propTypes() {
//     return {
//       onChange: PropTypes.func,
//       disabled: PropTypes.string,
//       label: PropTypes.array,
//       meta: PropTypes.object
//     };
//   }
//
//   handleChange = (e) => {
//      const {onChange, disabled, validate} = this.props;
//      const value = e.target.value;
//      const name = e.target.name;
//      if (disabled) {
//        return;
//      }
//
//      if(!value) {
//        return;
//      }
//
//      if(onChange) onChange({name, value});
//   }
//
//   render() {
//     const {label, type, placeholder, meta: { touched, error, warning }} = this.props;
//     console.log("touched", touched);
//
//   }}
