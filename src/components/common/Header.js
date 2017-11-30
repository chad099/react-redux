import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import logo from '../../styles/images/logo.png';
import image1 from '../../styles/images/1.png';
import image2 from '../../styles/images/2.png';
import image3 from '../../styles/images/3.png';
import image4 from '../../styles/images/4.png';
import image5 from '../../styles/images/5.png';
import image6 from '../../styles/images/6.png';
import globe from '../../styles/images/globe.png';
import workflows from '../../styles/images/workflows.png';
import help from '../../styles/images/help.png';
import {profile, logout} from '../../reducers/auth';

@connect((state) => ({
  auth: state.auth
}))

export default class Header extends Component {
  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(profile());
  }

  logout = () => {
    const {dispatch} = this.props;
    dispatch(logout());
  }

 render() {
   const {handleClick} = this.props;
   const {auth} = this.props.auth;
   return(
     <header>
         <nav className="navbar navbar-default">
             <div className="container-fluid">
                 <div className="navbar-header">
                     <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                         <span className="sr-only">Toggle navigation</span>
                         <span className="icon-bar"></span>
                         <span className="icon-bar"></span>
                         <span className="icon-bar"></span>
                     </button>
                     <a className="navbar-brand" href="#"><img src={logo} alt="logo" /> </a>
                 </div>

                 <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                     <ul className="nav navbar-nav navbar-right">
                         <li className="dropdown">
                             <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><img src={globe} />&nbsp; Application <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                             <ul className="dropdown-menu">
                                 <li className="structure-menu">
                                     <a href="#">
                                         <img className="submenu-icon" src={image1} /> Structure Preparation</a>
                                     <div className="col-md-12 structure-submenu ">
                                         <p>
                                           <a href="javascript:void(0);" onClick={() => handleClick({title: "Standardize Structure", status: "green"}) }>Standardize Structure<span className="sub-text">Process a PDB file for design.</span></a>
                                         </p>
                                         <p>
                                           <a href="javascript:void(0)" onClick={() => handleClick({title: "Ligand Attributes", status: "green"}) }>Ligand Attributes <span className="sub-text">Produce the attribute file necessary for Triad to use your ligand.</span></a>
                                         </p>
                                         <p>
                                           <a href="javascript:void(0)" onClick={() => handleClick({title: "Structure Refinement", status: "yellow"}) }>Structure Refinement <span className="sub-text">Optimize a structure while keeping the sequence constant.</span></a>
                                         </p>
                                         <p>
                                           <a href="javascript:void(0)" onClick={() => handleClick({title: "Align and Merge Structure", status: "red"}) }>Align and Merge Structure<span className="sub-text">Align and Merge two structures.</span></a>
                                         </p>
                                     </div>
                                 </li>
                                 <li>
                                     <a href="#">
                                         <img className="submenu-icon" src={image2} /> Modeling
                                     </a>
                                 </li>
                                 <li>
                                     <a href="#">
                                         <img className="submenu-icon" src={image3} /> Structure-based Design</a>
                                 </li>
                                 <li>
                                     <a href="#">
                                         <img className="submenu-icon" src={image4} /> Analysis
                                     </a>
                                 </li>
                                 <li>
                                     <a href="#">
                                         <img className="submenu-icon" src={image5}/> Data Driven Design</a>
                                 </li>
                                 <li>
                                     <a href="#">
                                         <img className="submenu-icon" src={image6} /> Chimeragenesis
                                     </a>
                                 </li>
                             </ul>
                         </li>

                         <li>
                             <a href="#"><img src={workflows} />&nbsp; Workflows</a>
                         </li>
                         <li>
                             <a href="#"><img src={help} />&nbsp; Help</a>
                         </li>
                         <li><a style={{padding:" 30px 4px 0"}}>|</a></li>
                         <li className="dropdown">
                             <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="wel-note">Welcome</span><span className="user">{auth.first_name}</span> <span className="caret"></span></a>
                             <ul className="dropdown-menu ">
                              <li><a href="javascript:void(0);" onClick={this.logout}>Log Out</a></li>
                             </ul>
                         </li>
                     </ul>
                 </div>
             </div>
         </nav>
     </header>
   );
 }
}
