// Destinos.jsx
import React from 'react';
import { useState } from 'react';
import Destino from '../components/Destino';
import FormDestino from '../form/FormDestino';


const Destinos = () => {

  const [destinos, setDestinos] = useState([
    { nome: 'Paris', descricao: 'A cidade do amor.' },
    { nome: 'Nova York', descricao: 'A cidade que nunca dorme.' },
    { nome: 'Tóquio', descricao: 'A capital do Japão.' }
  ]);

  const adicionarDestino = (novoDestino) => {
    setDestinos([...destinos, novoDestino]);
  };

  return (
    <div className="Destinos">
      <div><h2>Destinos</h2><p>Veja nossos destinos incríveis.</p></div>;
      <FormDestino adicionarDestino={adicionarDestino} />
      {destinos.map((destino, index) => (
        <Destino key={index} nome={destino.nome} descricao={destino.descricao} />
      ))}
    </div>
  );
}

export default Destinos;