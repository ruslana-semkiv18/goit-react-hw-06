import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useId } from "react";
import { useDispatch } from 'react-redux';
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

  const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short, min 3 letters!")
    .max(50, "Too long, max 50 letters!")
    .required("This field is required!"),
  number: Yup.string()
    .min(3, "Too short, min 3 letters!")
    .max(50, "Too long, max 50 letters!")
    .required("This field is required!"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const id = useId();
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.wrapInput}>
          <label htmlFor={`${id}-name`} className={css.label}>Name</label>
          <Field type="text" className={css.input} name="name" id={`${id}-name`}/>
          <ErrorMessage
            name="name"
            component="span"
            className={css.error}
          />
        </div>

        <div className={css.wrapInput}>
          <label htmlFor={`${id}-number`} className={css.label}>Number</label>
          <Field type="tel" className={css.input} name="number" id={`${id}-number`}/>
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>


        <button type="submit" className={css.button}>Submit</button>
      </Form>
    </Formik>
  );
}