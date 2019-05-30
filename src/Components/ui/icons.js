import React from 'react';
import {Link} from 'react-router-dom';

import mCityLogo from './../../Resources/images/logos/manchester_city_logo.png';

export const Logo = props => {
  const template = <img className="img_cover" style={{width: props.width, height: props.height}} src={mCityLogo} alt="logo"/>

  if (props.link) {
    return(
      <Link to={props.linkTo} className="link_logo">
        {template}
      </Link>
    );
  } else {
    return template
  }
}
