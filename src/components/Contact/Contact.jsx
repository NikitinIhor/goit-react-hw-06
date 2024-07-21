import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleToDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div>
        <div className={css.container}>
          <FaUserAlt />
          <p>{name}</p>
        </div>
        <div className={css.container}>
          <FaPhoneAlt />
          <a href={`tel: + ${number}`}>{number}</a>
        </div>
      </div>
      <button onClick={handleToDeleteContact(id)} className={css.btn}>
        Delete
      </button>
    </>
  );
}
