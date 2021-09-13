import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';
import './index.scss';

PhotoCard.propTypes = {
  photo: PropTypes.object,
};
PhotoCard.propTypes = {
  photo: {},
};

function PhotoCard(props) {
  const {photo} = props;
  return (
    <div className='photo'>
      <img
        src={photo.photo}
        alt={photo.title}
      />
      <div className="photo__overlay">
        <h5 className="photo__title">{photo.title}</h5>
        <div className="photo__actions">
          <div>
            <Button size='sm' outline color="light">
              Edit
            </Button>
          </div>
          <div>
            <Button size='sm' outline color="danger">
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;