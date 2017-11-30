import React from 'react';

const RenderCurrentProjectLi = ({title, status}) => {
  return (
    <li className="">
        <a href="#">
            <i className={`fa fa-circle ${status}`} aria-hidden="true"></i> {title}
        </a>
    </li>
  );
}

export default RenderCurrentProjectLi;
