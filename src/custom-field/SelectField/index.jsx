import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import Select from 'react-select';

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
    field,
    label, placeholder, disabled, options
  } = props;
  const {name, value ,onChange, onBlur} = field;

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
        />
    </FormGroup>
  );
}

export default SelectField;