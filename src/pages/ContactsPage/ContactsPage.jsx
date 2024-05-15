import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import DocumentTitle from "../../DocumentTitle";
import { selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <DocumentTitle>Contacts...</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <Loader />}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ContactsPage;
