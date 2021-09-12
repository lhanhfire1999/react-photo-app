import Banner from 'components/Banner';
import PhotoForm from 'features/components/PhotoForm';
import { addPhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import './index.scss';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleOnSubmit = (values) => {
    return new Promise(resolve => {
      console.log('onSubmit: ', values);
      setTimeout(()=>{
        const action = addPhoto(values);
        dispatch(action);
        history.push('/photo');
        resolve(true);
      },2000);
    });
  };

  return (
    <div className='photo-edit'>
      <Banner title='Pick your amazing photo'/>
      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleOnSubmit}/>
      </div>
    </div>
  );
}

export default AddEditPage;