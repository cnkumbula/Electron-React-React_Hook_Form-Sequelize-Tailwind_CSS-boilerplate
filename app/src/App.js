
import React from "react";

import { Routes, Route, HashRouter } from "react-router-dom";

import { CadastroTrabalhadores } from './pages/Create/CadastroTrabalhadores';



function App() {
  return (
    <HashRouter>

      <Routes>
        
        <Route path="/" element={<CadastroTrabalhadores/>} />

      </Routes>

    </HashRouter>

  );    
}

export default App;
