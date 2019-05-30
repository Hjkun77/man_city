import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';

const Layout = props => {
  return(
    <div>
      <Navigation/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout;
