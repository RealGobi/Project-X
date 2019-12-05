import React, { useState, useEffect } from 'react';

//import Page from './Components/Page/Page';
import Filters from './Components/Filters/Filters';

const App = (props) => {
    const [data, setData] = useState([]);
    const [category1, setCategories] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [hasError, setErrors] = useState(false);
  
    async function fetchData() {
      fetch('http://localhost:3000/recipes')
        .then(res =>
          res.json(),
        setData(res),
        sortOutCategories(res),
        setLoading(false),
        setErrors(null),
        )

  async function fetchData() {
    const res = await fetch('http://localhost:3000/recipes');
    const data = await res
      .json()
      .then((res) => {
        setData(res);
        setLoading(false);
        sortOutCategories(res);
        setErrors(null);
      })
      .catch((err) => {
        setErrors(err);
        console.log(err);
        setLoading(false);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  const catTemp = [];
  function sortOutCategories(res) {
    if (res) {
      res.map((bot, idx) => {
        for (let i = 0; i < res[idx].category1.length; i++) {
          catTemp.push(res[idx].category1[i]);
        }
      });
      catTemp.sort();
      setCategories([...new Set(catTemp)]);
    } else return null;
  }

  return (
    <div className="App">
      {/* <Page data={data} category1={category1} isLoading={isLoading} /> */}
      <Filters
        botData={data}
        isLoading={isLoading}
        categories={categories}
      />
      {hasError ? console.log({ hasError }) : true}
    </div>

  );
};

export default App;