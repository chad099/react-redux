import React, {PropTypes} from 'react';

const Validation = ({errors}) => {
  const validationError = [];

  if(typeof errors == 'string') {
    errors = {
      email: [errors]
    };
  }
  errors = Object.keys(errors).map(key => errors[key]);
  if(!errors.length){
    return null;
  }

  for(let i = 0; i < errors.length; i++) {
    validationError.push(errors[i][0]);
  }

  return(
    <div className="container">
      <div className="has-error">
        <strong>Following errors has occurred:</strong>
        <ul>
        {validationError && validationError.map((i, key) =>
          <li key={key}>{i}</li>
        )}
        </ul>
      </div>
    </div>
  );
};

Validation.propTypes = {
  errors: PropTypes.object
};

export default Validation;
