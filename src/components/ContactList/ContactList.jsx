import { FcBusinesswoman, FcPhone, FcBusinessman } from 'react-icons/fc';
import { BsTrash } from 'react-icons/bs';
import { TbDots } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { showEditForm } from 'redux/contacts/modalSlice';
import { deleteContact } from 'redux/contacts/operations';
import { Item, ItemButton, List, Name, Phone } from 'components/common.styled';

export const ContactList = ({ contacts, setContact }) => {
  const dispatch = useDispatch();

  const handleClickDelete = event => {
    dispatch(deleteContact(event.currentTarget.dataset.id));
  };

  const handleClickEdit = event => {
    const [contact] = contacts.filter(
      el => el.id === event.currentTarget.dataset.id
    );

    const { name, number, id } = contact;
    setContact({ name, number, id });
    dispatch(showEditForm());
  };
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id} gender={contact.gender}>
          <Name>
            {contact.gender === 'male' ? (
              <FcBusinessman />
            ) : (
              <FcBusinesswoman />
            )}
            {contact.name}
          </Name>
          <Phone>
            <FcPhone /> {contact.number}
          </Phone>
          <div>
            <ItemButton
              type="button"
              onClick={handleClickEdit}
              data-id={contact.id}
              data-type="edit"
            >
              <TbDots color="green" />
            </ItemButton>
            <ItemButton
              type="button"
              onClick={handleClickDelete}
              data-id={contact.id}
              data-type="delete"
            >
              <BsTrash color="red" size="1em" />
            </ItemButton>
          </div>
        </Item>
      ))}
    </List>
  );
};
