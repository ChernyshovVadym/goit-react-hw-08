import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

import { useSelector } from "react-redux";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.list}>
      {visibleContacts.map(({ name, number, id }) => (
        <li className={css.item} key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
