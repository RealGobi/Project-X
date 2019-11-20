import React from 'react';
import Link from 'next/link';

import Button from '../Components/Button/Button';

export default function Login() {
  return (
    <div className="Startlogga">
      <Link href="/Sign-up">
        <a>
          <Button buttonText="Skapa Konto" color="mint" />
        </a>
      </Link>
      <Link href="/Landing-page">
        <a>
          <Button buttonText="Logga In" color="yellow" />
        </a>
      </Link>
    </div>
  );
}
