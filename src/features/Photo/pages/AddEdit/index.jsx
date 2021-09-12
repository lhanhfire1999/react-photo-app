import Banner from 'components/Banner';
import PhotoForm from 'features/components/PhotoForm';
import React from 'react';
import './index.scss';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const handleOnSubmit = (values) => {
    console.log('Submit: ', values);
  }

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