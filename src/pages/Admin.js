import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import store from '../store';
import {
  addRecipe, deleteRecipe, getRecipes, editRecipe,
} from '../actions/recipeAction';

import Button from '../Components/Button/Button';
import DynomicInput from '../Components/Input/dynamicInput';

function Admin(getState) {
  const { recipes } = getState.recipe;
  const { isAdmin } = getState;

  // hooks
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [description, setDesc] = useState('');
  const [descriptionError, setDescError] = useState('');
  const [category1, setCategory1] = useState('');
  const [category1Error, setCategory1Error] = useState('');
  const [category2, setCategory2] = useState('');
  const [category2Error, setCategory2Error] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [imageLinkError, setImageLinkError] = useState('');
  const [time, setTime] = useState('');
  const [timeError, setTimeError] = useState('');
  const [foodType, setFoodType] = useState('');

  // set ingredient
  const blankState = { count: '', unit: '', ingredient: '' };
  const [ingredients, setIngredients] = useState([
    { ...blankState },
  ]);

  const addIng = () => {
    setIngredients([...ingredients, { ...blankState }]);
  };

  const handleIngChange = (e) => {
    const updatedIng = [...ingredients];
    updatedIng[e.target.dataset.idx][e.target.className] = e.target.value;
    setIngredients(updatedIng);
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
    const updatedInst = [...instructions];
    updatedInst[e.target.dataset.idx][e.target.className] = e.target.value;
    setInstructions(updatedInst);
  };
  const Rubrik = 'Ingredienser:';
  const Rubrik2 = 'Instruktioner:';

  // validation
  function validate() {
    setTitleError('');
    setDescError('');
    setCategory1('');
    setCategory2('');
    setImageLinkError('');
    setTimeError('');

    if (!title) {
      setTitleError('Namn måste vara ifyllt.');
    }
    if (!description) {
      setDescError('Receptet måste ha en beskrivning.');
    }
    if (!category1) {
      setCategory1Error('Kategori måste vara ifyllt.');
    }
    if (!category2) {
      setCategory2Error('Kategori måste vara ifyllt.');
    }
    if (!imageLink) {
      setImageLinkError('Bildlänk måste vara ifyllt');
    }
    if (!time) {
      setTimeError('Tid måste vara ifyllt (min)');
    }
    if (!title || !description || !description || !category1 || !category2 || !imageLink || !time) {
      return false;
    }
    return true;
  }

  const handleAddRecipe = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
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
    }
  };

  // delete
  const deleteRec = (id) => {
    console.log(id);
    store.dispatch(deleteRecipe(id));
  };

  // Will start editMode and fill in a recipe in all input field
  const editClickHandler = (id) => {
    console.log(id);
    store.dispatch(getRecipes(id));
    setEditMode(true);
  };

  // will happen if you changed something
  const handleEditRecipe = (id) => {
    // console.log(id);
    const recipeToDb = {
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
    store.dispatch(editRecipe(recipeToDb));
  };
  // sort func
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
      {!editMode ? (
        <div className="admin-addrecept">
          <div>
            <h2>Nytt Recept</h2>
            <p>Lägg till nytt recept baserat på fyra potioner.</p>
            <form>
              <label htmlFor="Namn">Namn: <input type="text" name="name" value={title} onChange={(e) => { setTitle(e.target.value); }} /></label>
              { titleError
              && <span className="errorContainer"><div className="error">{titleError}</div></span>
            }
              <label htmlFor="Beskrivning">Beskrivning: <input type="text" value={description} name="description" onChange={(e) => { setDesc(e.target.value); }} /></label>
              { descriptionError
              && <span className="errorContainer"><div className="error">{descriptionError}</div></span>
            }
              <label htmlFor="Kategori1">Kategori Protein: <input type="text" value={category1} name="category1" onChange={(e) => { setCategory1(e.target.value); }} /></label>
              { category1Error
              && <span className="errorContainer"><div className="error">{category1Error}</div></span>
            }
              <label htmlFor="Kategori2">Kategori Kolhydrat: <input type="text" value={category2} name="category2" onChange={(e) => { setCategory2(e.target.value); }} /></label>
              { category2Error
              && <span className="errorContainer"><div className="error">{category2Error}</div></span>
            }
              <label htmlFor="bildlänk">Bildlänk:<input type="text" name="imageLink" value={imageLink} onChange={(e) => { setImageLink(e.target.value); }} /></label>
              { imageLinkError
              && <span className="errorContainer"><div className="error">{imageLinkError}</div></span>
            }
              <label htmlFor="Time">Tid: <input type="number" name="time" value={time} onChange={(e) => { setTime(e.target.value); }} /></label>
              { timeError
              && <span className="errorContainer"><div className="error">{timeError}</div></span>
            }
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
              <div className="btn-admin-right">
                <Button onClick={addIng} buttonText="Lägg till ingrediens" color="mint" buttonType="small" />
              </div>
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
              <div className="btn-admin-right">
                <Button onClick={addInst} buttonText="Lägg till instruktion" color="mint" buttonType="small" />
              </div>
              <hr />
              <label htmlFor="Foodtype" defaultValue={4} className="foodtype">Vad för sort recept:
                <select className="portioner" onChange={(e) => { setFoodType(e.target.value); }}>
                  <option value={4}>Allt</option>
                  <option value={3}>Fisk</option>
                  <option value={2}>Vegetarian</option>
                  <option value={1}>Vegan</option>
                </select>
              </label>
            </form>
            <div className="btn-admin-right">
              <Button type="button" buttonText="Lägg till" clickHandler={handleAddRecipe} />
            </div>
          </div>
        </div>
      ) : (

        // Displays when we wants to edit a recipe.
        <div className="admin-addrecept">
          <div>
            <h2>Editera Recept</h2>
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
              <label htmlFor="Foodtype" defaultValue={4} className="foodtype">Vad för sort recept:
                <select className="portioner" onChange={(e) => { setFoodType(e.target.value); }}>
                  <option value={4}>Allt</option>
                  <option value={3}>Fisk</option>
                  <option value={2}>Vegetarian</option>
                  <option value={1}>Vegan</option>
                </select>
              </label>
            </form>
            <div>
              <Button type="button" buttonText="Ändra" clickHandler={handleEditRecipe} />
            </div>
          </div>
        </div>
      )}
      {
              isAdmin
                ? (
                  <div className="admin-receptlist">
                    <h2>Receptlista</h2>
                    <div>
                      {recipes.sort(sortByName).map(rec => (
                        <div key={rec._id} className="listrow">
                          <span className="admin-title">{rec.title}</span>
                          <span className="editbtn" role="button" alt="edit" onClick={() => editClickHandler(rec._id)} />
                          <Popup trigger={<span className="deletebtn" />} modal>
                            {close => (
                              <div className="modal">
                                <span className="close" role="button" onClick={close}>
                  &times;
                                </span>
                                <div className="header" role="button" onClick={() => { deleteRec(rec._id); }}><p>Ta bort!</p></div>

                              </div>
                            )}
                          </Popup>
                        </div>
                      ))}

                    </div>
                  </div>
                )
                : null
              }
      <Link to="/landing-page" className="btn-admin-left">
        <Button buttonText="Tillbaka" color="mint" buttonType="small" />
      </Link>
    </div>

  );
}


const mapStateToProps = state => ({
  isAdmin: state.auth.isAdmin,
  recipe: state.recipe,
});
export default connect(mapStateToProps, {
  addRecipe, deleteRecipe, getRecipes, editRecipe,
})(Admin);
