import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "../../redux/contactsSlice";
import { filterContacts } from "../../redux/filtersSlice";
import css from "./App.module.css";
import { selectContacts, selectFilters } from "../../redux/selectors";

export default function App() {
  const selectContact = useSelector(selectContacts);
  const selectFilter = useSelector(selectFilters);

  const dispatch = useDispatch();

  const handleToAddNewContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleToDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterContacts = (e) => {
    dispatch(filterContacts(e.target.value));
  };

  const filtredContact = selectContact.filter((contact) =>
    contact.name.toLowerCase().includes(selectFilter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={handleToAddNewContact} />
      <SearchBox onChange={handleFilterContacts} />
      {selectContact.length > 0 ? (
        <ContactList
          contacts={filtredContact}
          onDelete={handleToDeleteContact}
        />
      ) : (
        <p className={css.contacts}>--- You have no contacts ---</p>
      )}
    </div>
  );
}
