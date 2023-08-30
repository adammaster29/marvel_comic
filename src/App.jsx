import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import md5 from 'md5'; // Importa la librería md5 para crear el hash
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  const [comic, setComic] = useState([]); // Inicializa como objeto vacío

  const publicKey = '51c82bf5e99e28339c69dfc4322a445b'; // Reemplaza con tu clave pública
  const privateKey = 'bc8d1c06cde5ceea931c9d8db53fb6947851e5e6'; // Reemplaza con tu clave privada
  const timestamp = Date.now(); // Obtiene el timestamp actual
  const hash = md5(timestamp + privateKey + publicKey); // Crea el hash

  useEffect(() => {
    axios.get(`https://gateway.marvel.com/v1/public/comics`, {
      params: {
        apikey: publicKey,
        ts: timestamp,
        hash: hash
      }
    })
    .then(res => setComic(res.data.data.results))
    .catch(error => console.error(error));
  }, []);

  console.log(comic);

  return (
   
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home comic={comic} />}/>
      </Routes>
    </HashRouter>
   
  );
}

export default App;
