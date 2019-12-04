import React, { useEffect, useState } from 'react';
import Page from './Components/Page/Page';


const App = () => {
  const [data, setData] = useState([]);
  const [category1, setCategories] = useState([]);

  async function fetchData() {
    const res = await fetch('http://localhost:3000/recipes/');
    const data = await res
      .json()
      .then((res) => {
        setData(res);
        sortOutCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  const catTemp = [];
  function sortOutCategories(data) {
    if (data) {
      data.map((d, idx) => { // for each-fooloop
        for (let i = 0; i < data[idx].category1.length; i++) {
          catTemp.push(data[idx].category1[i]);
        }
      });
      catTemp.sort();
      setCategories([...new Set(catTemp)]);
    } else { return null; }
  }

  return (
    <div className="App">
      <Page data={data} category1={category1} />
    </div>
  );
};

export default App;
