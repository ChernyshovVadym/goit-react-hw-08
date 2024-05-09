import css from "./Contact.module.css";

import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div className={css.container}>
      <p className={css.text}>
        <FaUser /> {contact.name}
      </p>
      <p className={css.text}>
        <FaPhone /> {contact.number}
      </p>
      <button className={css.btn} onClick={handleDelete} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
