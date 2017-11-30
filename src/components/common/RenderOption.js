import React, {PropTypes} from 'react';

const RenderOption = ({value, title}) => (
    <option value={value}>{title}</option>
);

RenderOption.propTypes = {
  value: PropTypes.number,
  title: PropTypes.string
};

export default RenderOption;
