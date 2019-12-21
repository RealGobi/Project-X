import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../store';
import { addRecipe } from '../actions/recipeAction';

import Button from '../Components/Button/Button';
import DynomicInput from '../Components/Page/dynamicInput';

const Admin = (getState) => {
  const { recipes } = getState.recipe;

  const [title, setTitle] = useState('');
  const [description, setDesc] = useState();
  const [category1, setCategory1] = useState([]);
  const [category2, setCategory2] = useState([]);
  const [imageLink, setImageLink] = useState();
  const [time, setTime] = useState();
  const [foodType, setFoodType] = useState();
  console.log(title);

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

  const Rubrik = 'Ingredienser:';
  const Rubrik2 = 'Instruktioner:';

  const handleAddRecipe = () => {
    let recipeToDb = {
      title,
      description,
      category1,
      category2,
      imageLink,
      time,
      foodType,
      ingredients,
      instructions,
    };
    store.dispatch(addRecipe(recipeToDb));
    recipeToDb = null;

    setTitle('');
    setDesc('');
    setCategory1('');
  };

  const deleteRecipe = (id) => {
    console.log('delete');
  };

  return (
    <div className="admin">
      <div className="header"><h1>Admin</h1></div>
      <div className="admin-addrecept">
        <h2>Nytt Recept</h2>
        <form action="send">
          <label htmlFor="Namn">Namn: <input type="text" name="name" value={title} onChange={(e) => { setTitle(e.target.value); }} /></label>
          <label htmlFor="Beskrivning">Beskrivning: <input type="text" name="description" onChange={(e) => { setDesc(e.target.value); }} /></label>
          <label htmlFor="Kategori1">Kategori Protein: <input type="text" name="category1" onChange={(e) => { setCategory1(e.target.value); }} /></label>
          <label htmlFor="Kategori2">Kategori Kolhydrat: <input type="text" name="category2" onChange={(e) => { setCategory2(e.target.value); }} /></label>
          <label htmlFor="bildlänk">Bildlänk:<input type="text" name="imageLink" onChange={(e) => { setImageLink(e.target.value); }} /></label>
          <label htmlFor="Time">Tid: <input type="number" name="time" onChange={(e) => { setTime(e.target.value); }} /></label>
          <hr />
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
            value="Lägg till en till ingrediens"
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
            value="Lägg till en till instruktion"
            onClick={addInst}
          />
          <hr />
          <label htmlFor="rating">Betyg 1-5:<input type="text" name="rating" /></label>
          <label htmlFor="Foodtype" className="foodtype">Vad för sort recept:
            <select className="portioner" onChange={(e) => { setFoodType(e.target.value); }}>
              <option value="All">Kött / kyckling</option>
              <option value="Fisk">Fisk</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
            </select>
          </label>
        </form>
        <div>
          <Button type="button" buttonText="Lägg till" clickHandler={handleAddRecipe} />
        </div>
      </div>
      <div className="admin-receptlist">
        <h2>Receptlista</h2>
        <div>
          {
              recipes.map(rec => (
                <div key={rec._id} className="listrow">
                  <span className="admin-title">{rec.title}</span>
                  <span className="editbtn" role="button" alt="edit" />
                  <span className="deletebtn" role="button" alt="delete" onClick={deleteRecipe} />
                </div>
              ))
            }
        </div>
      </div>
    </div>
  );
};

// prop types
Admin.propTypes = {
  addRecipes: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  recipe: state.recipe,
});
export default connect(mapStateToProps, { addRecipe })(Admin);
