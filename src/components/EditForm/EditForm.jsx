import {
  Backdrop,
  Button,
  FormEditStyled,
  Input,
  Label,
  Wrapper,
} from 'components/common.styled';
import { useState } from 'react';
import { BsFillEmojiSunglassesFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { closeEditForm } from 'redux/contacts/modalSlice';
import { editContact } from 'redux/contacts/operations';

export const EditForm = ({ contact }) => {
  const [formData, setFormData] = useState(() => ({
    name: contact.name,
    number: contact.number,
  }));
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(editContact({ ...contact, ...formData }));
  };

  return (
    <Backdrop>
      <FormEditStyled onSubmit={handleSubmit}>
        <BsFillEmojiSunglassesFill size={'80px'} color="teal" />
        <Wrapper>
          <Label>
            <Input
              type="text"
              name="name"
              required
              onChange={handleChange}
              value={formData.name}
            />
          </Label>
          <Label>
            <Input
              type="text"
              name="number"
              required
              onChange={handleChange}
              value={formData.number}
            />
          </Label>
        </Wrapper>
        <div>
          <Button type="submit">Apply</Button>
          <Button
            type="button"
            style={{ marginTop: '15px' }}
            onClick={() => {
              dispatch(closeEditForm());
            }}
          >
            Close
          </Button>
        </div>
      </FormEditStyled>
    </Backdrop>
  );
};
