import "./App.css";
// import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Router } from "./Router";
import Header from "./components/layouts/header/Header/Header";
import BottomTab from "./components/layouts/BottomTab/BottomTab";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <div style={{ height: "calc(100vh - 190px)", overflowY: "scroll" }}>
            <Router />
          </div>
          <BottomTab />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
