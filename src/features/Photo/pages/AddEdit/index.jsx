import Banner from 'components/Banner';
import PhotoForm from 'features/components/PhotoForm';
import { addPhoto, editPhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import './index.scss';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const {photoId} = useParams()
  const editedPhoto = useSelector((state) => state.photos.find(item => item.id === +photoId));
  const isAddMode = !photoId;
  
  const initialValues = isAddMode ? {
    title: '',
    categoryId: null,
    photo: '',
  } : editedPhoto;

  const handleOnSubmit = (values) => {
    if(isAddMode){
      return new Promise(resolve => {
        console.log('onSubmit: ', values);
        setTimeout(()=>{
          const action = addPhoto(values);
          dispatch(action);
          history.push('/photo');
          resolve(true);
        },2000);
      });
    }
    else{
      const action = editPhoto(values);
      dispatch(action);
      history.push('/photo');
    }
  };

  return (
    <div className='photo-edit'>
      <Banner title='Pick your amazing photo'/>
      <div className="photo-edit__form">
        <PhotoForm 
          onSubmit={handleOnSubmit}
          initialValues={initialValues}
          addMode = {isAddMode}
        />
      </div>
    </div>
  );
}

export default AddEditPage;