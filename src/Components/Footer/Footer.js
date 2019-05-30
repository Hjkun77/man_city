import React from 'react';
import {Logo} from '../ui/icons'

const Footer = () => {
  return(
    <footer className="bck_blue">
      <div className="footer_logo">
        <Logo
          width="90px"
          height="90px"
          link={true}
          linkTo="/"
        />
      </div>
      <div className="footer_disclaimer">
        Manchester City 2018. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer;
