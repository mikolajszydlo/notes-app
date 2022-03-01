import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';

const MainLayout  = ({children}) => {

  return (
    <>
      <Header />
      {children}
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object,
};

export default MainLayout;
