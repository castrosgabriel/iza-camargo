// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MinhaHistoria from './pages/minha-historia/MinhaHistoria.tsx';
import Contato from './pages/contato/Contato.tsx';
import Mentorias from './pages/mentorias/Mentorias.tsx';
import Palestras from './pages/palestras/Palestras.tsx';
import Campanhas from './pages/companhas/Companhas.tsx';
import Mestre from './pages/mestre/Mestre.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="campanhas" element={<Campanhas />} />
      <Route path="minha-historia" element={<MinhaHistoria />} />
      <Route path="mentorias" element={<Mentorias />} />
      <Route path="palestras" element={<Palestras />} />
      <Route path="contato" element={<Contato />} />
      <Route path="mestre" element={<Mestre />} />
      <Route path="*" element={<div>404</div>} />
    </>
  ),
  { basename: '/teste' } 
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
