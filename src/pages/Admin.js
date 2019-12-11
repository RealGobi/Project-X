import React from 'react';
import Button from '../Components/Button/Button';

export default function Admin() {
  let numberOfIngridients = 0;

  const handleNumberIngridients = (e) => {
    numberOfIngridients = e.target.value;
    console.log(numberOfIngridients);
  };

  return (
    <div className="admin">
      <h1>Admin</h1>
      <div className="admin-receptlist">
        <h2>Receptlista</h2>
      </div>
      <div className="admin-addrecept">
        <h2>Nytt Recept</h2>
        <h4>Antal Ingredienser:</h4>
        <form action="submit">
          <select className="portioner" onChange={handleNumberIngridients}>
            <option value="1">1 ingredienser</option>
            <option value="2">2 ingredienser</option>
            <option value="3">3 ingredienser</option>
            <option value="4">4 ingredienser</option>
            <option value="5">5 ingredienser</option>
            <option value="6">6 ingredienser</option>
            <option value="7">7 ingredienser</option>
            <option value="8">8 ingredienser</option>
            <option value="9">9 ingredienser</option>
            <option value="10">10 ingredienser</option>
          </select>
        </form>
        <form action="send">
          <label>Namn: <input type="text" /></label>
          <label>Beskrivning: <input type="text" /></label>
          <label>Kategori Protein: <input type="text" /></label>
          <label>Kategori Kolhydrat: <input type="text" /></label>
          <label>Bildlänk:<input type="text" /></label>
          <label>Tid: <input type="text" /></label>

          {
            numberOfIngridients ? (
              [...Array(numberOfIngridients)].map((e, i) => (
                <div key={i}>
                  <p>Ingrediens 1:</p>
                  <label>Antal:<input type="text" /></label>
                  <label>Enhet:<input type="text" /></label>
                  <label>Vara:<input type="text" /></label>
                </div>
              ))
            ) : (
              <p>välj antal ingredienser:</p>
            )
          }
          <hr />

          <label>Instruktioner 1:<input type="text" /></label>
          <label>Instruktioner 2:<input type="text" /></label>
          <label>Allergy:<input type="text" /></label>
          <label>Rating:<input type="text" /></label>
        </form><Button type="submit" buttonText="Lägg till"> </Button>

      </div>
    </div>
  );
}
