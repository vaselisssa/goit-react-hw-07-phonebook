import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MagnifyingGlass } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchContacts } from '../../redux/operations';
import { selectIsLoading, selectError } from '../../redux/selectors';
import { Container, Title, SubTitle } from './App.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title children="Phonebook" />
      <ContactForm />
      <SubTitle children="Contacts" />
      <Filter />
      {isLoading && <MagnifyingGlass />}
      {error && toast.error(error)}
      <ContactList />
      <ToastContainer position="top-center" hideProgressBar theme="colored" />
    </Container>
  );
};

export default App;
