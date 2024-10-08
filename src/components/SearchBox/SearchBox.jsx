import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filters = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };


  return (
    <div className={css.wrapInput}>
      <label htmlFor="search" className={css.label}>Find contacts by name</label>
      <input id="search" type="text" value={filters || ""} onChange={handleChange} className={css.input} />
    </div>
  )
}
