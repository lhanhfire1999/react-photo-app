import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './index.scss';

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};
RandomPhoto.defaultProps={
  name: '',
  imageUrl: '',
  onImageUrlChange: null,
  onRandomButtonBlur: null,
}

const getRamdomImg = () => {
  const random = Math.round(Math.random()* 1000);
  return `https://picsum.photos/id/${random}/300/300`;
}

function RandomPhoto(props) {
  const {name, imageUrl, onImageUrlChange, onRandomButtonBlur} = props;
  const handleOnClickRandom = async() => {
    if(onImageUrlChange){
      const random = getRamdomImg();
      onImageUrlChange(random);
    }

  }
  return (
    <div className='random-photo'>
      <div className="random-photo__button">
        <Button
          outline
          color="primary"
          name={name}
          onBlur={onRandomButtonBlur}
          onClick={handleOnClickRandom}
        >
          Random a photo
        </Button>
      </div>

      <div className="random-photo__img">
        {imageUrl && <img src={imageUrl} alt='Ooops... not found. Please click random again!!!'/>}
      </div>
    </div>
  );
}

export default RandomPhoto;