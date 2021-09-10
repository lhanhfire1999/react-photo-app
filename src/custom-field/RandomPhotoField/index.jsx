import RandomPhoto from 'components/RandomPhoto';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Label } from 'reactstrap';

RandomPhotoField.propTypes = {
  form: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,

  label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
  label: '',
};

function RandomPhotoField(props) {
  const {
    field, form,
    label
  } = props;

  const {name, value, onBlur} = field;
  const {errors, touched} = form;

  const showError = errors[name] && touched[name];

  const handleImgUrlChange = (newUrl) => {
    form.setFieldValue(name, newUrl)
  }

  return (
    <FormGroup>
    {label && <Label for={name}>Photo</Label>}

      <RandomPhoto
      name={name}
      imageUrl={value}
      onImageUrlChange={handleImgUrlChange}
      onRandomButtonBlur={onBlur}
      />
      <div className={showError ? 'is-invalid' : ''}></div>
      <ErrorMessage name={name} component={FormFeedback}/>
  </FormGroup>
  );
}

export default RandomPhotoField;