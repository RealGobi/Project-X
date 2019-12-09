import React from 'react';
import Link from 'next/link';

import Button from '../Components/Button/Button';

export default function Admin() {
  return (
    <div className="Admin">
      <div>
        <h2>Receptlista</h2>
      </div>
      <div>
        <h2>Nytt Recept</h2>
        {/* <form action="send"> */}
          <label>Namn<input type="text" /></label>
          <label>Beskrivning<input type="text" /></label>
          <label>Kategori Protein<input type="text" /></label>
          <label>Kategori Kolhydrat<input type="text" /></label>
          <label>Bildlänk<input type="text" /></label>
          <label>Tid<input type="text" /></label>
          <label>Ingredienser<input type="text" /></label>
          <label>Ingredienser<input type="text" /></label>
          <label>Ingredienser<input type="text" /></label>
          <label>Ingredienser<input type="text" /></label>
          <label>Ingredienser<input type="text" /></label>
          <label>Ingredienser<input type="text" /></label>
          <label>Ingredienser<input type="text" /></label>
          <label>Ingredienser<input type="text" /></label>
          <label>Ingredienser<input type="text" /></label>
          <label>Ingredienser<input type="text" /></label>
          <label>Ingredienser<input type="text" /></label>
          <label>Ingredienser<input type="text" /></label>
          <label>Instruktioner<input type="text" /></label>
          <label>Instruktioner<input type="text" /></label>
          <label>Instruktioner<input type="text" /></label>
          <label>Instruktioner<input type="text" /></label>
          <label>Instruktioner<input type="text" /></label>
          <label>Instruktioner<input type="text" /></label>
          <label>Instruktioner<input type="text" /></label>
          <label>Instruktioner<input type="text" /></label>
          <label>Instruktioner<input type="text" /></label>
          <label>Instruktioner<input type="text" /></label>
          <label>Allergy<input type="text" /></label>
          <label>Rating<input type="text" /></label>
        {/* </form><button type="submit"> Lägg till </button> */}

      </div>
    </div>
  );
}
