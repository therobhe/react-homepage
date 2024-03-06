/**
 * Import Components
 */
import { Header } from './components/Header';
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
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}
