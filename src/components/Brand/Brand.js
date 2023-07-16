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
        <img src="/logo-rajicouture-8989.png" width="226" height="80" style="
    overflow-clip-margin: content-box;
    OVERFLOW: HIDDEN;
    MARGIN-BOTTOM: -50PX;
    MARGIN-TOP: -32PX;
" />    </div>
  );
};

export default Brand;
