import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import allRouter from './Routers/Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={allRouter}></RouterProvider>
    </div>
  );
}

export default App;
