import { Field, Form, Formik } from "formik";
import style from "./ContatForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { nanoid } from "nanoid";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^((\(\d{3}\) ?)|(\d{3}))?\d{3}\d{4}$/, {
      message: "Invalid phone number (XXXXXXXXXX)",
      excludeEmptyString: false,
    })
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({ id: nanoid(), name: values.name, number: values.number });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={style.form}>
        <label className={style.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          className={style.field}
          type="text"
          name="name"
          id={nameFieldId}
        />
        <ErrorMessage className={style.error} name="name" component="span" />
        <label className={style.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={style.field}
          type="text"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage className={style.error} name="number" component="span" />
        <button className={style.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
