import { Search } from "@mui/icons-material";
import { useState } from "react";
import {
  useDispatch,
  // useSelector
} from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setSearchValue } from "redux/data/data-actions";
// import { getSearchValue } from "redux/data/data-selectors";
import s from "./SearchInput.module.css";

const SearchInput = () => {
  const [value, setValue] = useState("");
  // const value = useSelector(getSearchValue);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(value);

  const onInputChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    // dispatch(setSearchValue(e.target.value));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchValue(value));
    searchParams.set("search", value);
    setSearchParams(searchParams);
    setValue("");
    // dispatch(setSearchValue(''));
  };

  // const onResetSearch = (e) => {
  //   console.log(e.target.nodeName);
  //   if (e.target.nodeName !== "INPUT") {
  //     dispatch(setSearchValue(""));
  //   }
  // };

  return (
    <div
      className={s.searchContainer}
      // onClick={onResetSearch}
    >
      <form className={s.form} onSubmit={onFormSubmit} >
        <input className={s.input} placeholder="search" onChange={onInputChange} value={value} />
        <button type="submit" className={s.button}>
          <Search className={s.search} />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
