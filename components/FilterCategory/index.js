export default function FilterCategory({ category, names, onChangeFunction }) {
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
            onChange={onChangeFunction}
          ></input>
          {name}
        </label>
      ))}
    </>
  );
}
