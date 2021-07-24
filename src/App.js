import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <ColorModeSwitcher />
      <Main />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
