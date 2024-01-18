export default function FilterInput({ name, value, category }) {
  return (
    <label htmlFor={name}>
      <input
        type="radio"
        id={name}
        name={category}
        value={value}
        required
        onInvalid={(event) =>
          event.target.setCustomValidity("Please select a price category")
        }
        onChange={(event) => event.target.setCustomValidity("")}
      ></input>
      {value}
    </label>
  );
}
