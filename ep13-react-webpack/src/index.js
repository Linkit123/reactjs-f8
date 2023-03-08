import React from "react";
import { createRoot } from 'react-dom/client';

function App() {
  return <div id="wrapper">heello, dau ma hay zu  ds dcsa sad  </div>;
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);