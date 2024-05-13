import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const ContactsPage = () => {
  const useDispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(featchContacts());
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
