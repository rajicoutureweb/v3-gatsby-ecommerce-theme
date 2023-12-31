import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>SYDNEY</h4> */}
        <img src="/logo-rajicouture-8989.png" className="logobrandsites" style={{ height: '90px', width: 'auto', margin: '-40px' }} />    </div>
  );
};

export default Brand;
