import React, {Component} from 'react';
import icon1 from '../../styles/images/icon1.png';
import icon2 from '../../styles/images/icon2.png';
import icon3 from '../../styles/images/icon3.png';
import icon4 from '../../styles/images/icon4.png';

export default class WorkFlow extends Component {
  render() {
    return(
      <section className="welcome">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-12 col-sm-12 text-center">
                      <h1>Welcome <span className="text-color">Back!</span></h1>
                      <p className="text-color-p">SELECT A WORKFLOW BELOW</p>
                  </div>
                  <div className="col-md-12 col-sm-12 text-center">

                      <div className="col-md-3 col-sm-6">
                          <div className="polygon">
                              <img className="dash-icon" src={icon1} />
                              <h3>ENZYME DESIGN</h3>
                              <p>Process a PDB file for
                                  <br/>design</p>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                          <div className="polygon" style={{marginTop: "28%"}}>
                              <img className="dash-icon" src={icon2} style={{marginBottom: "15px"}} />
                              <h3>SEQUENCE DESIGN</h3>
                              <p>Produce the attribute file
                                  <br/> necessary for Triad to use
                                  <br/>your llgand</p>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                          <div className="polygon" style={{marginTop: "28%"}}>
                              <img className="dash-icon" src={icon3} />
                              <h3>DATA-DRIVEN DESIGN</h3>
                              <p>Optimize a structure whlle
                                  <br/>keepling the sequence
                                  <br/>constant</p>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                          <div className="polygon">
                              <img className="dash-icon" src={icon4} />
                              <h3>STRUCTURE REFINEMENT</h3>
                              <p>Allgn and merge two
                                  <br/>structures</p>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </section>
    );
  }
}
