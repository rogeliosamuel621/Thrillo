import React from 'react';
import './styles/app.css';

import { ContainerRouter } from './routes';
import { Nav } from './components/molecules';



const App = () => {
  return (
   <ContainerRouter>
     <Nav />
   </ContainerRouter>
  );
};

export default App;
