import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes  from "./routes/routes"; // Importe o componente de rotas

function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes  /> {/* Renderize o componente de rotas aqui */}
      </div>
    </Router>
  );
}

export default App;
