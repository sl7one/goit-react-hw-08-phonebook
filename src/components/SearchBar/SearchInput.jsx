import { Input } from 'components/common.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';

export const SearchInput = () => {
  const dispatch = useDispatch();
  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <Input
      type="text"
      name="contact"
      placeholder="search by name..."
      autoFocus
      onChange={handleChange}
    />
  );
};
