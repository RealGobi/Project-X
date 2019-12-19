import React, { useState } from 'react';
import Button from '../Components/Button/Button';

import useFetch from '../Hooks/useFetch';
import DynomicInput from '../Components/Page/dynamicInput';

export default function Admin(props) {
  const [newRecipe, setNewRecipe] = useState({});
  const [loading, setLoading] = useState(false);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZmExOGUzYjdhNjBjNjJhMjAxMTAwMyIsImlhdCI6MTU3NjcxMTM3MSwiZXhwIjoxNTc2NzE0OTcxfQ.OEk_iLlCPj5E7pwtTwy-iIB_jEqBg6PktoUjohFW8EE';
  const recipeApi = useFetch(
    'http://localhost:5000/api/recipe/',
    token,
  );

  const [title, setTitle] = useState();
  const [description, setDesc] = useState();
  const [category1, setcategory1] = useState([]);
  const [category2, setcategory2] = useState([]);
  const [imageLink, setImageLink] = useState();
  const [time, setTime] = useState();
  const [foodType, setFoodType] = useState();

  // set ingredient
  const blankState = { count: '', unit: '', ingredient: '' };
  const [ingredients, setIngredients] = useState([
    { ...blankState },
  ]);

  const addIng = () => {
    setIngredients([...ingredients, { ...blankState }]);
  };

  const handleIngChange = (e) => {
    const updatedCats = [...ingredients];
    updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
    setIngredients(updatedCats);
  };

  // set instruktion
  const blankStateInst = { inst: '' };
  const [instructions, setInstructions] = useState([
    { ...blankStateInst },
  ]);

  const addInst = () => {
    setInstructions([...instructions, { ...blankStateInst }]);
  };

  const handleInstChange = (e) => {
    const updatedCats = [...instructions];
    updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
    setInstructions(updatedCats);
  };

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
  const Rubrik = 'Ingredienser:';
  const Rubrik2 = 'Instruktioner:';

  return (
    <div className="admin">
      <h1>Admin</h1>
      <div className="admin-addrecept">
        <h2>Nytt Recept</h2>
        <form action="send">
          <label>Namn: <input type="text" onChange={(e) => { setTitle(e.target.value); }} /></label>
          <label>Beskrivning: <input type="text" name="description" onChange={(e) => { setDesc(e.target.value); }} /></label>
          <label>Kategori Protein: <input type="text" name="category1" onChange={(e) => { setcategory1(e.target.value); }} /></label>
          <label>Kategori Kolhydrat: <input type="text" name="category2" onChange={(e) => { setcategory2(e.target.value); }} /></label>
          <label>Bildlänk:<input type="text" name="imageLink" onChange={(e) => { setImageLink(e.target.value); }} /></label>
          <label>Tid: <input type="number" name="time" onChange={(e) => { setTime(e.target.value); }} /></label>
          <hr />
          <h3>{Rubrik}</h3>
          {
                ingredients.map((val, idx) => (
                  <DynomicInput
                    Rubrik={Rubrik}
                    key={`main-${idx}`}
                    idx={idx}
                    input={ingredients}
                    handleCatChange={handleIngChange}
                  />
                ))
            }
          <input
            type="button"
            value="Lägg till ingrediens"
            onClick={addIng}
          />
          <hr />
          {
                instructions.map((val, idx) => (
                  <DynomicInput
                    Rubrik={Rubrik2}
                    key={`main-${idx}`}
                    idx={idx}
                    input={instructions}
                    handleCatChange={handleInstChange}
                  />
                ))
            }
          <input
            type="button"
            value="Lägg till instruktion"
            onClick={addInst}
          />
          <hr />
          <label>Rating:<input type="text" name="rating" /></label>
          <label>FoodType:
            <select className="portioner" onChange={(e) => { setFoodType(e.target.value); }}>
              <option value="All">Äter allt</option>
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
