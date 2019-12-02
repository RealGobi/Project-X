import React from 'react';
import Link from 'next/link';

import Button from '../Components/Button/Button';

export default function Login() {
  return (
    <div className="Startlogga">
      <div className="login-container">
        <div className="input-container">
          <span>E-post:</span> <input type="email" />
        </div>
        <div className="input-container">
          <span>Lösenord:</span> <input type="password" />
        </div>
        <div className="login-button-container">
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
      </div>
    </div>
  );
}
