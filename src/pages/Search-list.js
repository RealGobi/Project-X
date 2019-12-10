import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import RecipeItem from '../Components/RecipeItem/RecipeItem';

export default function SearchList(props) {
  SearchList.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    recipe: PropTypes.array.isRequired,
  };
  const [searchValue, setSearchValue] = useState('');
  const listRecipe = props.recipe;

  function handleSearchInputChange(e) {
    setSearchValue(e.target.value);
  }

  // renders if serchvalue is true.
  const listRecipeThatRenders = listRecipe.filter(rec => (searchValue ? rec.title.toLowerCase().match(searchValue) : true));

  const [showCategory, setShowCategory] = useState(true);
  const toogleShow = (e) => { setShowCategory(!showCategory); };

  //
  // const [chosenCategory1, setChosenCategory1] = useState([]);
  // let category1 = [];
  // const collectCategory1 = () => {
  //   props.recipe.map(cat => cat.category1.map(tac => category1.push(tac)));
  // };
  // collectCategory1();
  // const categorylist1 = category1;
  // category1 = Array.from(new Set(categorylist1.map(JSON.stringify))).map(JSON.parse);

  // const [chosenCategory2, setChosenCategory2] = useState([]);
  // let category2 = [];
  // const collectCategory2 = () => {
  //   props.recipe.map(cat => cat.category2.map(tac => category2.push(tac)));
  // };
  // collectCategory2();
  // const categorylist2 = category2;
  // category2 = Array.from(new Set(categorylist2.map(JSON.stringify))).map(JSON.parse);

  const handleCategory2Change = (e) => {
    console.log(e);
  };
  const handleCategory1Change = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Header headLine="Sök Recept" />
      <Page>
        <div className="Searchinput">
          <div className="Searchinputtext">
            <form>
              <input
                type="text"
                placeholder="Sök"
                value={searchValue}
                onChange={handleSearchInputChange}
              />
            </form>
          </div>
        </div>
        {/* <div onClick={toogleShow}>Show/Hide Category</div>
        {showCategory ? (
          <div className="category">
            {
              category1.map((cat1, idx) => (
                <label key={idx} onChange={handleCategory1Change}>
                  <input
                    type="checkbox"
                    className="categoryCheck"
                    value={cat1.value}
                  /> {cat1.value}
                </label>
              ))
            }
            {
              category2.map((cat2, idx) => (
                <label key={idx} onChange={handleCategory2Change}>
                  <input
                    type="checkbox"
                    className="categoryCheck"
                    value={cat2.value}
                  /> {cat2.value}
                </label>
              ))
            }
          </div>
        ) : (
          <div />
        )
      } */}
        <Link to="recipt-page">
          {
            listRecipeThatRenders.map((rec, idx) => (
              <span onClick={() => props.setChosenRecipe(rec._id)}>
                <RecipeItem
                  key={idx}
                  recipeTitle={rec.title}
                  recipeIntro={rec.description}
                  recipeImg={rec.imageLink}
                />
              </span>
            ))
          }
        </Link>
        <div className="next-page">
          <Link to="/landing-page">
            <Button buttonText="Tillbaka" color="mint" />
          </Link>
        </div>
      </Page>
    </div>
  );
}
