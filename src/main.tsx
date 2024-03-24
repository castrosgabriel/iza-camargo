import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MinhaHistoria from './components/minha-historia/MinhaHistoria.tsx';
import Contato from './components/contato/Contato.tsx';
import Mentorias from './components/mentorias/Mentorias.tsx';
import Palestras from './components/palestras/Palestras.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />  
      <Route path="minha-historia" element={<MinhaHistoria />} />
      <Route path="mentorias" element={<Mentorias />} />
      <Route path="palestras" element={<Palestras />} />
      <Route path="contato" element={<Contato />} />
      <Route path="*" element={<div>404</div>} />
    </>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
