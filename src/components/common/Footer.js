import React, {PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';
const Footer = () =>{
  return (
    <nav>
    <IndexLink to="/" activeClassName="active">Home</IndexLink>
    {" | "}
    <Link to="/twitter" activeClassName="active">Twitter</Link>
    </nav>
  );
};

export default Footer;
