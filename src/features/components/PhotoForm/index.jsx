import { PHOTO_CATAGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-field/InputField';
import RandomPhotoField from 'custom-field/RandomPhotoField';
import SelectField from 'custom-field/SelectField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';

PhotoForm.propTypes = {
  
};

function PhotoForm(props) {
  const initialValues = {
    title: '',
    categoryId: null,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log('Submit: ', values)}
    >
      {(formikProps) => {
        // Do something here..........
        const {values, errors, touched} = formikProps;
        console.log({values, errors, touched});
        return(
          <Form>
            <FastField 
              // Props of fast field
              name='title'
              component={InputField} 

              // Props pass into component
              label='Title'
              placeholder='Eg: Wow nature ...'
            />

            <FastField
              name='categoryId'
              component={SelectField}

              label='Category'
              placeholder="What's your photo category?"
              options={PHOTO_CATAGORY_OPTIONS}
            />

            <FastField
              name='photo'
              component={RandomPhotoField}

              label="Photo"
            />
            <FormGroup>
              <Button color='primary'>Add to album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;