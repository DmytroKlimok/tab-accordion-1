import React from 'react';
import './App.css';
import './components/Tabs/Tabs'
import {Tabs} from "./components/Tabs/Tabs";
import {AppProps} from "./index";

function App(appProps: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
          Accordion Tab Component
      </header>
        <Tabs panels = { appProps.panels }/>
    </div>
  );
}

export default App;
