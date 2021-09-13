import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';
import './index.scss';

PhotoCard.propTypes = {
  photo: PropTypes.object,
  onRemoveClick: PropTypes.func,
  onEditClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  photo: {},
  onRemoveClick: null,
  onEditClick: null,
};


function PhotoCard(props) {
  const {photo, onRemoveClick, onEditClick} = props;

  const handleEditClick = () => {
    if(onEditClick){
      onEditClick(photo);
    }
  }
  const handleRemoveClick = () => {
    if(onRemoveClick){
      onRemoveClick(photo.id)
    }
  }


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
            <Button 
              size='sm'
              outline color="light"
              onClick = {handleEditClick}
            >
              Edit
            </Button>
          </div>
          <div>
            <Button
              size='sm'
              outline color="danger"
              onClick={handleRemoveClick}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;