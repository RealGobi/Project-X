import React from 'react';

import Button from '../Components/Button/Button';

export default function Admin() {
  return (
    <div className="admin">
      <h1>Admin</h1>
      <div className="admin-receptlist">
        <h2>Receptlista</h2>
      </div>
      <div className="admin-addrecept">
        <h2>Nytt Recept</h2>
        <form action="send">
          <label>Namn: <input type="text" /></label>
          <label>Beskrivning: <input type="text" /></label>
          <label>Kategori Protein: <input type="text" /></label>
          <label>Kategori Kolhydrat: <input type="text" /></label>
          <label>Bildlänk:<input type="text" /></label>
          <label>Tid: <input type="text" /></label>

          <p>Ingrediens 1:</p>
          <label>Antal:<input type="text" /></label>
          <label>Enhet:<input type="text" /></label>
          <label>Vara:<input type="text" /></label>
          <hr />

          <label>Instruktioner 1:<input type="text" /></label>
          <label>Instruktioner 2:<input type="text" /></label>
          <label>Allergy:<input type="text" /></label>
          <label>Rating:<input type="text" /></label>
        </form><Button type="submit"> Lägg till </Button>

      </div>
    </div>
  );
}
