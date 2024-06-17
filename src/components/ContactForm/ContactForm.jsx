import { Field, Form, Formik } from 'formik';
import style from './ContatForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import MaskedInput from 'react-text-mask';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^\(\d{3}\) \d{3}-\d{4}$/,
      'Invalid phone number (use format: (XXX) XXX-XXXX)',
    )
    .required('Required'),
});
const TextMaskCustom = ({ field, ...props }) => (
  <MaskedInput
    {...field}
    {...props}
    mask={[
      '(',
      /[0-9]/,
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ]}
    placeholder="(123) 456-7890"
    showMask
    className={style.field}
  />
);
const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(), ...values };
    dispatch(addContact(newContact));
    actions.resetForm();
  };
  return (
    <section className={style.sectionForm}>
      <Formik
        initialValues={{ name: '', number: '' }}
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
            type="tel"
            name="number"
            id={numberFieldId}
            component={TextMaskCustom}
          ></Field>
          <ErrorMessage
            className={style.error}
            name="number"
            component="span"
          />
          <button className={style.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </section>
  );
};
export default ContactForm;
