/* eslint-disable import/prefer-default-export */
import { useHistory } from 'react-router-dom';


export function Reload(item) {
  const history = useHistory();
  if (window.performance) {
    if (performance.navigation.type === 1 && item.length === 0) {
      history.push('/landing-page');
    }
  }
}
