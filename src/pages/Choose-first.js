import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function ChooseFirst(props) {
  // collect all categorys to one array (and color)
  let category = [];
  const collectCategory = () => {
    props.recipe.map(cat => cat.category1.map(tac => category.push(tac)));
    console.log(category);
  };
  collectCategory();
  // remove duplicates
  const myData = category;
  category = Array.from(new Set(myData.map(JSON.stringify))).map(JSON.parse);
  console.log(category);

  return (
    <div>
      <Header headLine="Välj Första" />
      <Page>
        <span className="centerGrid">
          <div className="choose-button">
            { category.map((cat1, idx) => <Button key={idx} buttonText={cat1.value} buttonType="square" color={cat1.color} />) }
          </div>
        </span>
        <div className="next-page">
          <Link to="/landing-page">
            <Button buttonText="Back" color="mint" />
          </Link>
          <Link to="/choose-second">
            <Button buttonText="Välj Första" color="mint" />
          </Link>
        </div>
      </Page>
    </div>
  );
}
