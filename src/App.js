import React from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CoffeeList from "./components/Coffee/CoffeeList";
import Login from "./components/Login/Login";
import localeEnMessages from "./locales/en";
import localeEsMessages from "./locales/es";

const language = navigator.language || navigator.userLangiage;
let langStr = "en";
let messages = localeEnMessages;
if (language.includes("es")) {
  langStr = "es-ES";
  messages = localeEsMessages;
}
function App() {
  return (
    <div className="App">
      <IntlProvider locale={langStr} messages={messages}>
        <h1 class="page-title">El aroma mágico</h1>
        <img className='banner' src="./banner.png" alt="Coffe beans"></img>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/coffees" element={<CoffeeList />} />
          </Routes>
        </BrowserRouter>
        <footer>
          Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico
        </footer>
      </IntlProvider>
    </div>
  );
}

export default App;
