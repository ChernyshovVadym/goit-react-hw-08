import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { useId } from "react";

import css from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "too short")
    .max(50, "too long")
    .required("required"),
  number: Yup.string()
    .trim()
    .min(3, "too short")
    .max(50, "too long")
    .required("required"),
});
const initionValus = {
  name: "",
  number: "",
};
const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    actions.resetForm();
  };
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={initionValus}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          className={css.field}
          id={nameFieldId}
          name="name"
          placeholder="Jane"
          type="text"
        />

        <label htmlFor={numberFieldId}>Number</label>
        <Field
          className={css.field}
          id={numberFieldId}
          name="number"
          placeholder="380678377445"
          type="text"
        />

        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
