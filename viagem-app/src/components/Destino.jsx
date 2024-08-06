// Destino.jsx
import React from 'react';
import '../App.css';

const Destino = ({ nome, descricao, destino }) => {
  return (
    <div>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <p><strong>Distância: {distancia} km</strong></p>
    </div>
  );
};

export default Destino;