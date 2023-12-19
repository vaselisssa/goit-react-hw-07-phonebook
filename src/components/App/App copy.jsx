import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Container, Title, SubTitle, EmptyContactListText } from './App.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  //* завантаження контактів з локального сховища в разі їх наявності
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
    );
  });
  const [filter, setFilter] = useState('');

  //* збереження до локального сховища актуального стану контактів при кожній зміні
  useEffect(() => {
    return window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  //* додавання нового контакту з перевіркою на наявність контактів з таким ім'ям
  const addContact = contact => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isInContacts) {
      alert(`${contact.name} is already in  contacts`);
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), ...contact },
    ]);
  };

  //* фільтр пошуку за ім'ям
  //обробник зміни значення поля вводу фільтра
  const changeFilter = e => {
    setFilter(e.target.value.trim());
  };
  //функція для відображення знайдених за фільтром контактів
  const getFoundContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  //* видалення контакту
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  const foundContacts = getFoundContacts();

  return (
    <Container>
      <Title children="Phonebook" />
      <ContactForm onAddContact={addContact} />
      <SubTitle children="Contacts" />

      {contacts.length > 0 ? (
        //* Фільтр рендеримо тільки, якщо масив контактів не порожній
        <Filter value={filter} onChange={changeFilter} />
      ) : (
        <EmptyContactListText children="There are no contacts." />
      )}

      <ContactList contacts={foundContacts} onDeleteContact={deleteContact} />
    </Container>
  );
};

export default App;
