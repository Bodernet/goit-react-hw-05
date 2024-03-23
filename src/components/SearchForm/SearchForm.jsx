import css from "./SearchForm.module.css";

const SearchForm = ({ onSetSearchQuery }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const inputValue = form.elements.inputValue.value.trim();

    onSetSearchQuery(inputValue);

    form.reset();
  };
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <div>
        <input
          name="inputValue"
          type="text"
          required
          placeholder="Input your movie name"
        />
      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
