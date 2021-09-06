import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

Banner.propTypes = {
  title: PropTypes.string,
  backgroundUrl: PropTypes.string,
};
Banner.defaultProps = {
  title: '',
  backgroundUrl: '',
}

function Banner(props) {
  const {title, backgroundUrl} = props;
  const bannerStyle = backgroundUrl ? {backgroundImage: `url(${backgroundUrl})`} : {};
 
  return (
    <section className='banner' style={bannerStyle}>
      <div className='banner__title'>{title}</div>
    </section>
  );
}

export default Banner;