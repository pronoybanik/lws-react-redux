import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import allRouter from './Routers/Router';
import useAuthHook from './Hooks/useAuthHook';
import Loading from './components/ui/Loading';

function App() {
  const authChecked = useAuthHook()
  return !authChecked ? <Loading></Loading> : (

    <RouterProvider router={allRouter}></RouterProvider>

  );
}

export default App;
