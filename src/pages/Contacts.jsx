import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactList } from 'components/ContactList/ContactList';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { AddContactButton } from 'components/SearchBar/AddButton';
import { EditForm } from 'components/EditForm/EditForm';
import { SearchInput } from 'components/SearchBar/SearchInput';
// import { useNavigate } from 'react-router-dom';
import { userGet } from 'redux/auth/operations';
import { ContactsWrapper, Header } from 'components/common.styled';
import { useNavigate } from 'react-router-dom';

export const Contacts = () => {
  const [contact, setContact] = useState({});
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.auhtSate.isLoggedIn);
  const contacts = useSelector(state => state.contactsState.contacts.items);
  const filter = useSelector(state => state.contactsState.filter);
  const modalIsOpen = useSelector(state => state.modalState.modal);
  const editFormIsOpen = useSelector(state => state.modalState.editForm);
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(userGet());
  //   // console.log('useEffect', loggedIn);
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filtredContacts = () => {
    return !filter
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
  };
  return (
    <ContactsWrapper>
      <Header>
        <AddContactButton />
        <SearchInput />
      </Header>

      {filtredContacts().length > 0 ? (
        <ContactList contacts={filtredContacts()} setContact={setContact} />
      ) : (
        'NotFound...'
      )}

      {modalIsOpen && <AddContactForm id="add" />}
      {editFormIsOpen && <EditForm contact={contact} />}
    </ContactsWrapper>
  );
};
