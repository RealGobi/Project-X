
function getArrayFromFoodtype(getState) {
  const { recipes } = getState.recipe;
  // get the users foodtype
  const userFoodType = localStorage.getItem('foodType');
  // make recipelist from foodtype
  const foodTypeRecipes = recipes.filter(rec => (userFoodType ? rec.foodType <= userFoodType : true));
  console.log(foodTypeRecipes);

  return foodTypeRecipes;
}

export default function collectCategory({ incoming }) {
  const foodTypeRecipes = (getArrayFromFoodtype());

  const category2choose = [];
  let category1 = [];
  let category2 = [];


  switch (incoming) {
    case 'category1':
      foodTypeRecipes.map(cat => cat.category1.map(tac => category1.push(tac)));
      // eslint-disable-next-line no-case-declarations
      const categorylist1 = category1;
      category1 = Array.from(new Set(categorylist1.map(JSON.stringify))).map(JSON.parse);

      break;
    case 'category2':
      foodTypeRecipes.map(cat => cat.category2.map(tac => category2.push(tac)));

      // eslint-disable-next-line no-case-declarations
      const categorylist2 = category2;
      category2 = Array.from(new Set(categorylist2.map(JSON.stringify))).map(JSON.parse);

      break;
      /*
    case 'category2choose':
      findRecipeBasedOnOne.map(cat => cat.category2.map(tac => category2choose.push(tac)));
      // eslint-disable-next-line no-case-declarations
      const hoppdata = category2choose
      category2choose = Array.from(new Set(hoppdata.map(JSON.stringify))).map(JSON.parse);

      break;
 */
    default:
      console.log('hej');

      break;
  }
}
