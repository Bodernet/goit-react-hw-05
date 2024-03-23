import { FiSearch } from "react-icons/fi";
const SearchForm = ({ onSetSearchQuery }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const inputValue = form.elements.inputValue.value.trim();

    onSetSearchQuery(inputValue);

    form.reset();
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="inputValue"
          type="text"
          autoComplete="off"
          required
          placeholder="Input your movie"
        />
      </div>

      <button type="submit">
        <FiSearch size={18} />
      </button>
    </form>
  );
};

export default SearchForm;
