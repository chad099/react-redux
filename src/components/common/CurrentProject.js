import React, {Component} from 'react';
import RenderCurrentProjectLi from './RenderCurrentProjectLi';

export default class CurrentProject extends Component {
  render() {
    const {currentProject} = this.props;
    return(
      <nav id="sidebar">
          <div className="sidebar-header">
              <h3>YOUR PROJECTS</h3>
          </div>

          <ul className="list-unstyled components">
            {currentProject && currentProject.map((i, index) => <RenderCurrentProjectLi key={index} title={i.title} status={i.status}/> )}
          </ul>
      </nav>
    );
  }
}
