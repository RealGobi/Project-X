import { useState, useEffect } from 'react';

function getArrayFromFoodtype({ recipes }) {
  // get the users foodtype
  const userFoodType = localStorage.getItem('foodType');
  // make recipelist from foodtype
  const foodTypeRecipes = recipes.filter(rec => (userFoodType ? rec.foodType <= userFoodType : true));
  return foodTypeRecipes;
}

export default function collectCategory() {
  const [array, setArray] = useState(getArrayFromFoodtype());
  ({
    buttonText, color, buttonType, clickHandler,
  }) => {
    let bg;
    let btnType;
    const { width } = useWindowDimensions();
  
  
  switch (color) {
    case 'mint':
      bg = { background: '#B7DDE0' };
      break;
    case 'persica':
      bg = { background: '#FFC79B' };
      break;
    default:
      bg = { background: '#FEE19F' };
      break;
  }

  if (cat1) {
    // collect all categorys to one array
    let category1 = [];

    const collectCategory1 = () => {
      foodTypeRecipes.map(cat => cat.category1.map(tac => category1.push(tac)));
    };
    collectCategory1();
    const categorylist1 = category1;
    // remove duplicates
    category1 = Array.from(new Set(categorylist1.map(JSON.stringify))).map(JSON.parse);
    return category1;
  }

  // collect all categorys to one array
  let category2 = [];

  const collectCategory2 = () => {
    foodTypeRecipes.map(cat => cat.category2.map(tac => category2.push(tac)));
  };

  collectCategory2();
  const categorylist2 = category2;
  // remove duplicates
  category2 = Array.from(new Set(categorylist2.map(JSON.stringify))).map(JSON.parse);

  return category2;
}
export default collectCategory;