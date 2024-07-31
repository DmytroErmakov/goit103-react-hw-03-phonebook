import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div>
      <p>Find contacts by name</p>
      <form className={css.form}>
        <input
          className={css.field}
          type="text"
          name="text"
          value={value}
          onChange={e => onFilter(e.target.value)}
          placeholder="Search contacts"
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
}
