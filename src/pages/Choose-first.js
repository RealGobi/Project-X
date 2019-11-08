import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Page from '../Components/Page/Page';

export default function ChooseFirst() {

  return (
    <div>
      <Page>
        [Choose First]
        <Link href="/Choose-second">
          <a>Choose-second</a>
        </Link>
      </Page>
    </div>
  );
}
