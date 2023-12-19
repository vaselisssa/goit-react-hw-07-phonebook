import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import { Form, Label, Input, ErrorText, AddButton } from './ContactForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onAddContact = contact => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase().trim()
    );
    if (isInContacts) {
      return toast.warn(`${contact.name} is already in  contacts`);
    }
    dispatch(addContact(contact));
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    number: Yup.string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Number is required'),
  });
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values);
        resetForm();
      }}
    >
      <Form autoComplete="off">
        <Label>
          Name:
          <Input type="text" name="name" />
          <FormError name="name" />
        </Label>
        <Label>
          Number:
          <Input type="tel" name="number" />
          <FormError name="number" />
        </Label>
        <AddButton type="submit">Add contact</AddButton>
      </Form>
    </Formik>
  );
};

export default ContactForm;
