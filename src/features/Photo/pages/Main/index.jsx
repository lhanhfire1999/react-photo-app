import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/components/PhotoList';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

MainPage.propTypes = {
  
};

function MainPage(props) {
  const photos = useSelector(state => state.photos);
  console.log('List photos: ', photos);
  return (
    <div className='photo-main'>
      <Banner
        title='Your awesome photos'
        backgroundUrl={Images.PINK_BG}
      />
      <Container className='text-center'>
        <Link to='/photo/add'>Add new photo</Link>
        <PhotoList 
          photoList={photos}
        />
      </Container>
    </div>
  );
}

export default MainPage;