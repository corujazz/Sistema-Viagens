// Destino.jsx
import React from 'react';
import '../App.css';

const Destino = ({ nome, descricao }) => {
  return (
    <div>
      <h2>{nome}</h2>
      <p>{descricao}</p>
    </div>
  );
};

export default Destino;