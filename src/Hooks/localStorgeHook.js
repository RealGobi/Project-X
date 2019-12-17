import { useState } from 'react';

export default function useLocalState(localItem) {
  const [loc, setState] = useState(sessionStorage.getItem(localItem));

  function setLoc(newItem) {
    sessionStorage.setItem(localItem, newItem);
    setState(newItem);
  }
  return [loc, setLoc];
}
