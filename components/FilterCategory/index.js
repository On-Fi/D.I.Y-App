export default function FilterCategory({
  category,
  names,
  onChange,
  selectedValue,
}) {
  return (
    <>
      {names.map((name) => (
        <label key={name} htmlFor={name}>
          <input
            type="radio"
            id={name}
            name={category}
            value={name}
            required
            onChange={onChange}
            checked={selectedValue === name}
          ></input>
          {name}
        </label>
      ))}
    </>
  );
}
