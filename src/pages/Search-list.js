import React, { useState, useReducer } from 'react';
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
    // eslint-disable-next-line react/forbid-prop-types
    category1: PropTypes.array.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    category2: PropTypes.array.isRequired,
  };
  // state and props
  const [searchValue, setSearchValue] = useState('');
  const { recipe } = props;
  const { category1 } = props;
  const { category2 } = props;
  const userFoodType = localStorage.getItem('foodType');

  function handleSearchInputChange(e) { setSearchValue(e.target.value); }

  // Creating array with the activeCategories
  // eslint-disable-next-line no-shadow
  const [activeCategoryFilter, dispatch] = useReducer((activeCategoryFilter, { type, value }) => {
    switch (type) {
      case 'add':
        return [...activeCategoryFilter, value];
      case 'remove':
        return activeCategoryFilter.filter(index => index !== value);
      default:
        return activeCategoryFilter;
    }
  }, []);

  // toogle check/uncheck category
  const categoryToggle = (e) => {
    if (e.target.checked) {
      dispatch({ type: 'add', value: e.target.value });
    } else if (!e.target.checked) {
      dispatch({ type: 'remove', value: e.target.value });
    }
  };
  // sort out recipe after category, foodType and search input.
  const listRecipeThatRenders = recipe.filter(rec => (searchValue ? rec.title.toLowerCase().match(searchValue) : true))
    .filter(rec => (activeCategoryFilter.length !== 0 ? rec.category1.some(value => activeCategoryFilter.includes(value))
   || rec.category2.some(value => activeCategoryFilter.includes(value)) : true))
    .filter(rec => (userFoodType ? rec.foodType <= userFoodType : true));
  // category toggle
  const [showCategory, setShowCategory] = useState(true);
  const toggleShow = () => { setShowCategory(!showCategory); };
  const handleCategory2Change = (e) => { categoryToggle(e); };
  const handleCategory1Change = (e) => { categoryToggle(e); };

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
        <div className="categorybar">
          <div className="row" onClick={toggleShow} role="button">Kategori{showCategory ? <div className="arrow" /> : <div className="arrow-open" />}</div>
          {showCategory ? (
            <div className="category">
              {
                category1.map((cat1, idx) => (
                  <label htmlFor="idx" key={idx} onChange={handleCategory1Change}>
                    <input
                      type="checkbox"
                      className="categoryCheck"
                      value={cat1}
                    /> {cat1}
                  </label>
                ))
              }
              {
                category2.map((cat2, idx) => (
                  <label htmlFor="idx" key={idx} onChange={handleCategory2Change}>
                    <input
                      type="checkbox"
                      className="categoryCheck"
                      value={cat2}
                    /> {cat2}
                  </label>
                ))
              }
            </div>
          ) : (
            <div />
          )
        }
        </div>
        <Link to="recipt-page">
          {
            listRecipeThatRenders.map(rec => (
              <span key={rec._id} onClick={() => props.setChosenRecipe(rec._id)}>
                <RecipeItem
                  recipeTitle={rec.title}
                  recipeIntro={`${rec.description.substring(0, 100)}...`}
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
