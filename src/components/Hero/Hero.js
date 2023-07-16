import React from 'react';
import * as styles from './Hero.module.css';
import Button from '../Button';
import { Link } from 'gatsby';

const Hero = (props) => {
  const {
    title,
    subtitle,
    ctaText,
    ctaAction,
    image,
    maxWidth,
    ctaStyle,
    ctaLink,
    ctaTo,
    header,
  } = props;
  return (
    <div className={styles.root} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.content} style={{ maxWidth: '600px' }}>
                   <rectenglis>
                  <h2>STYLE MAROCAIN,PURE ELEGANCE</h2>
                  </rectenglis>
<center>
          
         {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
          </center>
        {ctaText && (
          <Button
            className={`${styles.ctaButton} ${ctaStyle}`}
            level={'primary'}
            onClick={ctaAction}
          >
            {ctaText}
          </Button>
        )}
        {ctaLink && (
          <Link className={styles.ctaLink} to={ctaTo}>
            {ctaLink}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
