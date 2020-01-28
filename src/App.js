import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Rifa from './pages/Rifa';
import GlobalStyles from './styles/global';


function App() {
  return (
    <>
      <Rifa />
      <ToastContainer autoClose={3000} />
      <GlobalStyles />
    </>
  )
}

export default App;
