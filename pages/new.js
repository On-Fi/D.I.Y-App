import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import styled from "styled-components";

export default function RecipeForm({ text, handleSubmit }) {
  async function handleClick(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const recipeData = Object.fromEntries(formData);
    handleSubmit(recipeData);
  }
  return (
    <>
      <Header />

      <form onSubmit={handleClick}>
        <label for="title">Titel</label>
        <input type="text" id="image" name="image"></input>
        <label for="name">Titel des Rezepts</label>
        <input type="text" id="name" name="name"></input>
        <label for="ingredients">Zutaten</label>
        <input type="text" id="ingredients" name="ingredients"></input>
        <label for="instructions">Zubereitung</label>
        <input id="instructions" name="instructions"></input>
        <button text={text} type="submit"></button>
      </form>
      <NavigationBar />
    </>
  );
}
