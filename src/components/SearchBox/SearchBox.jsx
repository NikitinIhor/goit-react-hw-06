import css from "./SearchBox.module.css";

export default function SearchBox({ onChange }) {
  return (
    <>
      <p className={css.text}>Find contacs by name</p>
      <input className={css.input} type="text" onChange={onChange} />
    </>
  );
}
