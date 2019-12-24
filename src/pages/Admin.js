import React, { useState } from 'react';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';
import store from '../store';
import { addRecipe, deleteRecipe } from '../actions/recipeAction';

import Button from '../Components/Button/Button';
import DynomicInput from '../Components/Input/dynamicInput';

const Admin = (getState) => {
  const { recipes } = getState.recipe;

  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [category1, setCategory1] = useState('');
  const [category2, setCategory2] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [time, setTime] = useState('');
  const [foodType, setFoodType] = useState('');
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

  const handleAddRecipe = (e) => {
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
    setCategory2('');
    setImageLink('');
    setTime('');
    setFoodType('');
    setIngredients([
      { ...blankState }]);
    setInstructions([
      { ...blankStateInst }]);
  };

  const deleteRec = (id) => {
    console.log(id);
    store.dispatch(deleteRecipe(id));
  };

  const sortByName = (a, b) => {
    const compA = a.title.toLowerCase();
    const compB = b.title.toLowerCase();

    let comparison = 0;
    if (compA > compB) {
      comparison = 1;
    } else if (compA < compB) {
      comparison = -1;
    }
    return comparison;
  };

  return (
    <div className="admin">
      <div className="header"><h1>Admin</h1></div>
      <div className="admin-addrecept">
        <h2>Nytt Recept</h2>
        <p>Lägg till nytt recept baserat på fyra potioner.</p>
        <form>
          <label htmlFor="Namn">Namn: <input type="text" name="name" value={title} onChange={(e) => { setTitle(e.target.value); }} /></label>
          <label htmlFor="Beskrivning">Beskrivning: <input type="text" value={description} name="description" onChange={(e) => { setDesc(e.target.value); }} /></label>
          <label htmlFor="Kategori1">Kategori Protein: <input type="text" value={category1} name="category1" onChange={(e) => { setCategory1(e.target.value); }} /></label>
          <label htmlFor="Kategori2">Kategori Kolhydrat: <input type="text" value={category2} name="category2" onChange={(e) => { setCategory2(e.target.value); }} /></label>
          <label htmlFor="bildlänk">Bildlänk:<input type="text" name="imageLink" value={imageLink} onChange={(e) => { setImageLink(e.target.value); }} /></label>
          <label htmlFor="Time">Tid: <input type="number" name="time" value={time} onChange={(e) => { setTime(e.target.value); }} /></label>
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
          {/* <label htmlFor="rating">Betyg 1-5:<input type="text" name="rating" /></label> */}
          <label htmlFor="Foodtype" defaultValue={1} className="foodtype">Vad för sort recept:
            <select className="portioner" onChange={(e) => { setFoodType(e.target.value); }}>
              <option value={1}>Allt</option>
              <option value={2}>Fisk</option>
              <option value={3}>Vegetarian</option>
              <option value={4}>Vegan</option>
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
              recipes.sort(sortByName).map(rec => (
                <div key={rec._id} className="listrow">
                  <span className="admin-title">{rec.title}</span>
                  <span className="editbtn" role="button" alt="edit" />
                  <Popup trigger={<span className="deletebtn"></span>} modal>
                    {close => (
                      <div className="modal">
                        <span className="close" onClick={close}>
                &times;
                        </span>
                        <div className="header" onClick={() => { deleteRec(rec._id); }}><p>Ta bort!</p></div>
                       
                      </div>
                    )}
                  </Popup>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = state => ({
  recipe: state.recipe,
});
export default connect(mapStateToProps, { addRecipe, deleteRecipe })(Admin);
