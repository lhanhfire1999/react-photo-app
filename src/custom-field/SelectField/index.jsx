import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { FormFeedback, FormGroup, Label } from 'reactstrap';

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultTypes = {
  label: '',
  placeholder: '',
  disabled: false,
  options: [],
}

function SelectField(props) {
  const {
    field, form,
    label, placeholder, disabled, options
  } = props;

  const {name, value ,onChange, onBlur} = field;
  const {errors, touched} = form;

  const showError = errors[name] && touched[name];

  const selectedOption = options.find(option => option.value === value);
  const handleOnChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : selectedOption;
    const changeEvent = {
      target:{
        name: name,
        value: selectedValue,
      }
    };
    onChange(changeEvent);
  }

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
        <Select
          id={name}
          name={name}
          value={selectedOption}
          onBlur={onBlur}
          onChange={handleOnChange}

          placeholder={placeholder}
          options={options}
          disabled={disabled}
          className={showError ? 'is-invalid' : ''}
        />
        <ErrorMessage name={name} component={FormFeedback}/>
    </FormGroup>
  );
}

export default SelectField;