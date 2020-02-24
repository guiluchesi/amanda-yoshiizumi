import React, { Fragment } from 'react';

import Header from './Sections/Header/Header'
import Sobre from './Sections/Sobre/Sobre'
import Portifolio from './Sections/Portifolio/Portifolio'
import Depoimentos from './Sections/Depoimentos/Depoimentos'
import Footer from './Sections/Footer/Footer'

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Sobre />
        <Portifolio />
        <Depoimentos />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
