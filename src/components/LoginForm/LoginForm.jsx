import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

import { useDispatch } from "react-redux";
import iziToast from "izitoast";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .min(8, "too short")
    .max(50, "too long")
    .required("required"),
  password: Yup.string()
    .trim()
    .min(8, "too short")
    .max(50, "too long")
    .required("required"),
});
const initialValues = {
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
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label htmlFor={emailFieldId}>Email</label>
        <Field
          className={css.field}
          id={emailFieldId}
          name="email"
          type="email"
        />
        <ErrorMessage name="email" as="span" />

        <label htmlFor={passwordFieldId}>Password</label>
        <Field
          className={css.field}
          id={passwordFieldId}
          name="password"
          type="text"
        />
        <ErrorMessage name="password" as="span" />

        <button className={css.btn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
