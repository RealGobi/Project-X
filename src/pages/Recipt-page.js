import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../Components/Page/Page';
import Button from '../Components/Button/Button';
import Header from '../Components/Header/Header';

export default function ReciptPage() {
  return (
    <div>
      <Header headLine="Recept" />
      <Page>
        <Link to="/recipt-list">
          <Button buttonText="Tillbaka" color="mint" />
        </Link>
      </Page>
    </div>
  );
}
