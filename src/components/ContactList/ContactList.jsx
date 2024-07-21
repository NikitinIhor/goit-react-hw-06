import { useSelector } from "react-redux";
import { selectContacts, selectFilters } from "../../redux/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const selectContact = useSelector(selectContacts);
  const selectFilter = useSelector(selectFilters);

  const filtredContact = selectContact.filter((contact) =>
    contact.name.toLowerCase().includes(selectFilter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filtredContact.length > 0 ? (
        filtredContact.map((item) => (
          <li className={css.item} key={item.id}>
            <Contact data={item} />
          </li>
        ))
      ) : (
        <p className={css.contacts}>--- You have no contacts ---</p>
      )}
    </ul>
  );
}
