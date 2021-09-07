import { PHOTO_CATAGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import InputField from 'custom-field/InputField';
import SelectField from 'custom-field/SelectField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import Select from 'react-select';
import { Button, FormGroup, Label } from 'reactstrap';

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

              label='Category11'
              placeholder="What's your photo category?"
              options={PHOTO_CATAGORY_OPTIONS}
            />

            <FormGroup>
            <Label for='categoryId'>Category</Label>
              <Select
                id='categoryId'
                name='category'

                placeholder="What's your photo category?"
                options={PHOTO_CATAGORY_OPTIONS}
              />
            </FormGroup>

            <FormGroup>
              <Label for='categorId'>Photo</Label>

              <div><Button outline color='primary'>Random a photo</Button></div>
              <div>
                <img src={Images.COLORFUL_BG} alt="colorful" width='200px' height='200px' />
              </div>
            </FormGroup>

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