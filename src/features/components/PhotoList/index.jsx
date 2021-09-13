import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
  photoList : PropTypes.array,
  onPhotoRemoveClick: PropTypes.func,
  onPhotoEditClick: PropTypes.func,
};

PhotoList.defaultProps = {
  photoList : [],
  onPhotoRemoveClick: null,
  onPhotoEditClick: null,
};

function PhotoList(props) {
  const {photoList, onPhotoRemoveClick, onPhotoEditClick} = props
  return (
    <Row>
      {photoList.map(photo => {
        return(
          <Col key={photo.title} xs='12' md='6' lg='3'>
            <PhotoCard 
              photo={photo}
              onRemoveClick={onPhotoRemoveClick}
              onEditClick={onPhotoEditClick}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default PhotoList;