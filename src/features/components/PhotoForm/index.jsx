import { PHOTO_CATAGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-field/InputField';
import RandomPhotoField from 'custom-field/RandomPhotoField';
import SelectField from 'custom-field/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as yup from 'yup';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};
PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm(props) {
  const initialValues = {
    title: '',
    categoryId: null,
    photo: '',
  };

  const validateSchema = yup.object().shape({
    title: yup.string().required('This field is not emty'),

    categoryId: yup.number().required('This field is not emty').nullable(),

    photo: yup.string().when('categoryId',{
      is: 1,
      then: yup.string().notRequired(),
      otherwise: yup.string().required('This field is not emty'),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={props.onSubmit}
      
    >
      {(formikProps) => {
        // Do something here..........
        const {values, errors, touched, isSubmitting } = formikProps;
        console.log({values, errors, touched});
        return(
          <Form id="form1">
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
              <Button 
                color='primary'
                type="submit"
              >
                {isSubmitting && <Spinner size="sm" children=''/>}
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;