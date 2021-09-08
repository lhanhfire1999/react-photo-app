import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup, Label } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';

RandomPhotoField.propTypes = {
  form: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,

  label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
  label: '',
};

function RandomPhotoField(props) {
  const {field, form, label} = props;
  const {name, value, onBlur} = field;

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
  </FormGroup>
  );
}

export default RandomPhotoField;