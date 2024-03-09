import { useState } from 'react';

/**
 * Import Components
 */
import { Header } from './components/Header';
import { Imprint } from './components/Imprint';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

/**
 * Import Styles
 */
import "./assets/styles/index.css";

/**
 * App - the main component of the website
 * @returns content of the website
 */
export const App = () => {
  const [showImprint, setShowImprint] = useState(false);

  const handleClick = (newValue) => {
    setShowImprint(newValue);
  }

  return (
    <div>
      <Header activeLink={showImprint} onClickCallback={handleClick}></Header>
      {showImprint && <Imprint />}
      {!showImprint && <Main />}
      <Footer />
    </div>
  )
}
