import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { Contacts, EmptyContactListText } from './ContactList.styled';
import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return filteredContacts.length > 0 ? (
    <Contacts>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} contact={{ id, name, number }} />
      ))}
    </Contacts>
  ) : (
    <EmptyContactListText children="There are no contacts." />
  );
};

export default ContactList;
