import React, { useEffect  } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Page from '../Components/Page/Page';
import Button from '../Components/Button/Button';
import Recipt from '../Components/Recipt/Recipt';

const ReciptPage = (findRecipe) => {
  const history = useHistory();

  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  if (findRecipe.findRecipe === undefined) {
    history.goBack();
  }
  // go back depending on where you  came from.
  function goBackHandler() {
    history.goBack();
  }

  return (
    <div>
      {
      findRecipe.findRecipe
        ? (
          <div className="recipe">
            <div className="header-recipt">
              <h1>{ findRecipe.findRecipe.title }</h1>
            </div>
            <Page>
              <Recipt
                recipeTitle={findRecipe.findRecipe.title}
                recipeIntro={findRecipe.findRecipe.description}
                recipeImg={findRecipe.findRecipe.imageLink}
                time={findRecipe.findRecipe.time}
                recipeIngredients={findRecipe.findRecipe.ingredients}
                recipeInstructions={findRecipe.findRecipe.instructions}
              />
              <div className="next-page">
                <Link to="/search-list" className="btn-admin-left">
                  <Button buttonText="Tillbaka" buttonType="small" color="mint" clickHandler={goBackHandler} />
                </Link>
                <Link to="/landing-page" className="btn-admin-left">
                  <Button buttonText="Startsidan" color="persica" buttonType="small" />
                </Link>
              </div>
            </Page>
          </div>
        )
        : (
          null
        )
      }
    </div>
  );
};
export default ReciptPage;
