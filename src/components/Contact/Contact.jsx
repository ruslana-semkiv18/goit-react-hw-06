import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact( {contact:{name, number, id}}) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contact}>
      <div className={css.wrap}>
        <p className={css.name}>{name}</p>
        <p className={css.number}>{number}</p>
      </div>
      <button className={css.button} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  )
}
