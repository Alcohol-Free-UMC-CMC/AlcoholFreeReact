import './App.css';
// import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Router } from './Router';
import Header from './components/layouts/header/Header/Header';

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Header/>
        <Router/>
      </BrowserRouter>
    </>
  );
}

export default App;
