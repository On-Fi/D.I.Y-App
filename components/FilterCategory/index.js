export default function FilterCategory({ category, names }) {
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
          ></input>
          {name}
        </label>
      ))}
    </>
  );
}
