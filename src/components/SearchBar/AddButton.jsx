import { AddButton } from 'components/common.styled';
import { useDispatch } from 'react-redux';
import { showModal } from 'redux/contacts/modalSlice';

export const AddContactButton = () => {
  const dispath = useDispatch();
  return (
    <AddButton type="button" onClick={() => dispath(showModal())}>
      Add contact
    </AddButton>
  );
};
