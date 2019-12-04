/* eslint-disable no-underscore-dangle */
import React from 'react';
import Link from 'next/link';
import useAxios from 'axios-hooks';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function ChooseFirst() {
  const [{ data, loading }] = useAxios(
    'http://localhost:3000/products/'
  );
  if (loading) return <p>Loading...</p>;
console.log(data);

  const listItems = data.map(d => <Button key={d._id} buttonText={d.name} color="mint" buttonType="square" />);

  return (
    <div>
      <Header headLine="Välj Första" />
      <Page>
        <span className="centerGrid">
          <div className="choose-button">
            {listItems}
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
