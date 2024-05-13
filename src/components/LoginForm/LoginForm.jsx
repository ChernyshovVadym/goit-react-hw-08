import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";

import css from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { login } from "../../redux/contactsOps";
import iziToast from "izitoast";

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
  email: "",
  password: "",
};
const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login({ email: values.email, password: values.password }))
      .unwrap()
      .then(() => {
        iziToast.success({
          position: "topRight",
          message: "Сontact add Successfully!",
        });
      })
      .catch(() => {
        iziToast.error({
          position: "topRight",
          message: "Incorrect, your contact has not been added.",
        });
      });
    actions.resetForm();
  };
  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <Formik
      initialValues={initionValus}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label htmlFor={emailFieldId}>Email</label>
        <Field
          className={css.field}
          id={emailFieldId}
          name="name"
          placeholder="Jane"
          type="text"
        />
        <ErrorMessage name="name" as="span" />

        <label htmlFor={passwordFieldId}>Password</label>
        <Field
          className={css.field}
          id={passwordFieldId}
          name="number"
          placeholder="380678377445"
          type="text"
        />
        <ErrorMessage name="number" as="span" />

        <button className={css.btn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
