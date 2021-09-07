import { PHOTO_CATAGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import React from 'react';
import Select from 'react-select';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
PhotoForm.propTypes = {
  
};

function PhotoForm(props) {
  return (
    <Form>
      <FormGroup>
        <Label for='titleId'>Title</Label>
        <Input id='titleId' name='title' placeholder='Eg: Wow nature ... ' />
      </FormGroup>

      <FormGroup>
      <Label for='categorId'>Category</Label>
        <Select
          id='titleId'
          name='title'

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
}

export default PhotoForm;