import React from 'react';
import PropTypes from 'prop-types';
import './dynomicStyle.css';

const DynamicInput = ({
  idx, input, handleCatChange, Rubrik,
}) => {
  const unitId = `unit-${idx}`;
  const countId = `count-${idx}`;
  const ingId = `ingredient-${idx}`;
  const instId = `instruktion-${idx}`;
  const mode = Rubrik === 'Ingredienser:';
  return (
    <div>
      {
       mode
         ? (
           <div className="DynomicInput" key={`main-${idx}`}>
             <p>{ Rubrik } { idx + 1 }</p>
             <label htmlFor={countId}>Antal:
               <input
                 type="number"
                 name={countId}
                 data-idx={idx}
                 id={countId}
                 className="count"
                 value={input[idx].count}
                 onChange={handleCatChange}
               />
             </label>
             <label htmlFor={unitId}>Enhet:
               <input
                 type="text"
                 name={unitId}
                 data-idx={idx}
                 id={unitId}
                 className="unit"
                 value={input[idx].unit}
                 onChange={handleCatChange}
               />
             </label>
             <label htmlFor={ingId}>Ingrediens:
               <input
                 type="text"
                 name={ingId}
                 data-idx={idx}
                 id={ingId}
                 className="ingredient"
                 value={input[idx].ingredient}
                 onChange={handleCatChange}
               />
             </label>
           </div>
         )
         : (
           <div className="DynomicInput" key={`main-${idx}`}>
             <p>{ Rubrik } { idx + 1 }</p>
             <label htmlFor={instId}>Instruktion:
               <input
                 type="text"
                 name={instId}
                 data-idx={idx}
                 id={instId}
                 className="inst"
                 value={input[idx].inst}
                 onChange={handleCatChange}
               />
             </label>
           </div>
         )
        }
    </div>
  );
};

DynamicInput.propTypes = {
  idx: PropTypes.number.isRequired,
  Rubrik: PropTypes.string.isRequired,
  input: PropTypes.array.isRequired,
  handleCatChange: PropTypes.func.isRequired,
};

export default DynamicInput;
