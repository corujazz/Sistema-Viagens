// Destino.jsx
import React from 'react';
import '../App.css';

  const Destino = ({ destino, setDestino}) => {
   
  return (
    <button onClick={() => setDestino(destino)}>
    <div className="destino">
      <p>{destino.nome}</p>
      <p>{destino.descricao}</p>
      <p><strong>Distância: {destino.distancia} km</strong></p>
    </div>
    </button>
  );

  
};

export default Destino;