import { useDispatch } from "react-redux";

import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

import toast from "react-hot-toast";
import { deleteContact } from "../../redux/contacts/operations";

import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.success("SuccessFully Delete");
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
