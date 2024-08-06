// Destinos.jsx
import React, { useEffect } from 'react';
import { useState } from 'react';
import Destino from '../components/Destino';
import FormDestino from '../form/FormDestino';


const Destinos = () => {

  const [destino, setDestino] = useState(null);
  const [dataIda, setDataIda] = useState('');
  const [dataVolta, setDataVolta] = useState('');
  const [tipoEstalagem, setTipoEstalagem] = useState('padrão');
  const [participantes, setParticipantes] = useState(1);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    if (destino && dataIda && dataVolta) {
    const custo = calcularCustos(destino.distancia, dataIda, dataVolta, tipoEstalagem, participantes);
    setSubtotal(custo);
    }
    }, [destino, dataIda, dataVolta, tipoEstalagem, participantes]);   

  const calcularCustos = (distancia, dataIda, dataVolta, tipoEstalagem, participantes) => {
    const hoje = new Date();
    const ida = new Date(dataIda);
    const volta = new Date(dataVolta);
    const diasEstadia = (volta - ida) / (1000 * 60 * 60 * 24);
    const semanasEstadia = Math.ceil(diasEstadia / 7);
  
  let custoVoo = distancia > 2000 ? 2 * 1500 : 1500;
  if (distancia > 2000) {
    custoVoo += (distancia - 2000);
  }
  
  const custoEstalagem = tipoEstalagem === 'luxo' ? 700 : 400;
  const custoTotalEstalagem = semanasEstadia * custoEstalagem * (1 + (participantes - 1) * 0.25);
  
  return custoVoo + custoTotalEstalagem;
};

  const [destinos, setDestinos] = useState([
    { nome: 'Paris', descricao: 'A cidade do amor.', distancia: 9377 },
    { nome: 'Nova York', descricao: 'A cidade que nunca dorme.', distancia: 7681 },
    { nome: 'Tóquio', descricao: 'A capital do Japão.', distancia: 18400 },
    { nome: 'Rio de Janeiro', descricao: 'Cidade maravilhosa.', distancia: 436 },
    { nome: 'Londres', descricao: 'A capital da Inglaterra.', distancia: 9350 },
    { nome: 'Roma', descricao: 'A cidade eterna.', distancia: 9211 },
    { nome: 'Sydney', descricao: 'A capital da Nova Gales do Sul.', distancia: 13851 },
    { nome: 'Cairo', descricao: 'A maior cidade do mundo árabe.', distancia: 10263 },
    { nome: 'Moscou', descricao: 'A capital da Rússia.', distancia: 11795 },
    { nome: 'Pequim', descricao: 'A capital da China.', distancia: 17856 }
  ]);

  const adicionarDestino = (novoDestino) => {
    setDestinos([...destinos, novoDestino]);
  };

  return (
    <div className="Destinos">
      <h2> { destino ?  <p>Viagem para: {destino.nome} </p> : <p>Escolha um Destino</p> } </h2>
      <label>Data de Ida:
       <input type="date" value={dataIda} onChange={(e) => setDataIda(e.target.value)} />
      </label>
      <label>Data de Volta:
       <input type="date" value={dataVolta} onChange={(e) => setDataVolta(e.target.value)} />
      </label>
      <label>Tipo de Estalagem:
       <select value={tipoEstalagem} onChange={(e) => setTipoEstalagem(e.target.value)}>
         <option value="padrão">Padrão</option>
         <option value="luxo">Luxo</option>
       </select>
      </label>
      <label>Número de Participantes:
       <input type="number" value={participantes} onChange={(e) => setParticipantes(e.target.value)} min="1" />
      </label>
      <p>Subtotal: R${subtotal}</p>
      <div><h2>Destinos</h2><p>Veja nossos destinos incríveis.</p></div>;
      <FormDestino adicionarDestino={adicionarDestino} />
      {destinos.map((destino, index) => (
        <Destino key={index} destino={destino} setDestino={setDestino}/>
      ))}
    </div>
  );
}

export default Destinos;