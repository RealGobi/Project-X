/* eslint-disable no-underscore-dangle */
import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function ChooseFirst(data, category1) {
  console.log(data);
  console.log(category1);
  // const listItems = data.map(d => <Button key={d._id} buttonText={d.category1} color={d.color} buttonType="square" />);

  return (
    <div>
      <Header headLine="Välj Första" />
      <Page>
        <span className="centerGrid">
          <div className="choose-button">
            <span>fghj</span>
          </div>
        </span>
        <div className="next-page">
          <Link href="/Landing-page">
            <a>
              <Button buttonText="Back" color="mint" />
            </a>
          </Link>
          <Link href="/Choose-second">
            <a>
              <Button buttonText="Välj Första" color="mint" />
            </a>
          </Link>
        </div>
      </Page>
    </div>
  );
}
