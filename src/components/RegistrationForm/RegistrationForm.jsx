import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

import { useDispatch } from "react-redux";

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
  name: "",
  email: "",
  password: "",
};
const RegistorForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
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

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

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
          type="name"
        />
        <ErrorMessage name="name" as="span" />

        <label htmlFor={emailFieldId}>Email</label>
        <Field
          className={css.field}
          id={emailFieldId}
          name="email"
          placeholder="Jane"
          type="email"
        />
        <ErrorMessage name="email" as="span" />

        <label htmlFor={passwordFieldId}>Password</label>
        <Field
          className={css.field}
          id={passwordFieldId}
          name="Password"
          placeholder="380678377445"
          type="password"
        />
        <ErrorMessage name="password" as="span" />

        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistorForm;
