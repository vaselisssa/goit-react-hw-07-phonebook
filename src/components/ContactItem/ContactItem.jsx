import { useDispatch } from 'react-redux';
import { FaRegTrashCan } from 'react-icons/fa6';
import { deleteContact } from '../../redux/operations';
import { Contact, Text, DeleteButton } from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <Contact key={contact.id}>
      <Text>
        <p>{contact.name} :</p>
        <p>{contact.number}</p>
      </Text>
      <DeleteButton
        type="button"
        onClick={handleDelete}
        aria-label="Delete contact"
      >
        <FaRegTrashCan />
      </DeleteButton>
    </Contact>
  );
};

export default ContactItem;
