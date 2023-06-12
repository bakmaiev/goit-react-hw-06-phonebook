import { PhonebookForm } from './PhonebookForm';
import { ContactsList } from './ContactsList';
import { Filter } from './ContactsFilter';
import { Title } from './Title';
import { Main } from './App.styled';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   if (contacts.length === 0) {
  //     localStorage.removeItem('contacts');
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Main>
      <PhonebookForm title="Phonebook" />
      <Title title="Contacts"></Title>
      <Filter></Filter>
      <ContactsList title="Contacts" />
    </Main>
  );
};
