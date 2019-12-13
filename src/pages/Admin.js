import React, { useState } from 'react';
import Button from '../Components/Button/Button';

import useFetch from '../Hooks/useFetch';

export default function Admin(props) {
  const [newRecipe, setNewRecipe] = useState({});
  const [loading, setLoading] = useState(false);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlczB0QHRlc3Quc2UiLCJ1c2VySWQiOiI1ZGU3YWZhODU2MjA1YzBkMjFhZDg2YjQiLCJpYXQiOjE1NzYxNTM5MTgsImV4cCI6MTU3NjE1NzUxOH0.qAfKpwuxaf10z-yibeeUIojI6fK42nVgErH8sFaL-iw';
  const recipeApi = useFetch(
    'http://localhost:3000/recipes/',
    token,
  );

  const [title, setTitle] = useState();
  const [description, setDesc] = useState();
  const [category1, setcategory1] = useState([]);
  const [category2, setcategory2] = useState([]);
  const [imageLink, setImageLink] = useState();
  const [time, setTime] = useState();
  const [instructions, setInstructions] = useState();
  const [foodType, setFoodType] = useState();

  const [ingredients, setIngredients] = useState([null]);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (!newRecipe) return;
    setLoading(true);
    recipeApi
      .post({
        title,
        description,
        category1,
        category2,
        imageLink,
        time,
        ingredients,
        instructions,
        foodType,
      })
      .then((data) => {
        console.log(data);
        setNewRecipe('');
        setLoading(false);
      });
  };

  
  return (
    <div className="admin">
      <h1>Admin</h1>
      <div className="admin-addrecept">
        <h2>Nytt Recept</h2>
        <h4>Antal Ingredienser:</h4>
        <form action="submit">
          <select className="portioner" onChange={handleNumberIngridients}>
            <option value="1">1 ingredienser</option>
            <option value="2">2 ingredienser</option>
            <option value="3">3 ingredienser</option>
            <option value="4">4 ingredienser</option>
            <option value="5">5 ingredienser</option>
            <option value="6">6 ingredienser</option>
            <option value="7">7 ingredienser</option>
            <option value="8">8 ingredienser</option>
            <option value="9">9 ingredienser</option>
            <option value="10">10 ingredienser</option>
          </select>
        </form>
        <form action="send">
          <label>Namn: <input type="text" onChange={(e) => { setTitle(e.target.value); }} /></label>
          <label>Beskrivning: <input type="text" name="description" onChange={(e) => { setDesc(e.target.value); console.log(description); }} /></label>
          <label>Kategori Protein: <input type="text" name="category1" onChange={(e) => { setcategory1(e.target.value); }} /></label>
          <label>Kategori Kolhydrat: <input type="text" name="category2" onChange={(e) => { setcategory2(e.target.value); }} /></label>
          <label>Bildlänk:<input type="text" name="imageLink" onChange={(e) => { setImageLink(e.target.value); }} /></label>
          <label>Tid: <input type="text" name="time" onChange={(e) => { setTime(e.target.value); }} /></label>
          <hr />
          <label>Instruktioner 1:<input type="text" name="instructions" onChange={(e) => { setInstructions(e.target.value); }} /></label>
          <label>Instruktioner 2:<input type="text" name="instructions" /></label>
          <label>Allergy:<input type="text" name="allergy" /></label>
          <label>Rating:<input type="text" name="rating" /></label>
          <label>FoodType:
            <select className="portioner" onChange={(e) => { setFoodType(e.target.value); }}>
              <option value="All">All</option>
              <option value="Fisk">Fisk</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
            </select>
          </label>

        </form>
        <Button type="button" buttonText="Lägg till" clickHandler={handleSubmit} />
      </div>
      <div className="admin-receptlist">
        <h2>Receptlista</h2>
      </div>
    </div>
  );
}
