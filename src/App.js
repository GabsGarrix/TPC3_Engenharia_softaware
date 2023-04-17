
import React , {useState} from 'react';
//import Porto from './components/Porto'
import ReactMapGl from 'react-map-gl';
import Mapa from './components/Mapa'
import './index.css'; 
import BoaVista from './images/BoaVista.jpeg'
import Brava from './images/Brava.jpeg'
import Fogo from './images/Fogo.jpeg'
import maio from './images/maio.jpeg'
import mindelo from './images/mindelo.jpeg'
import Portonovo from './images/Portonovo.jpeg'
import Praia from './images/Praia.jpeg'
import Sal from './images/Sal.jpeg'
import Saonicolau from './images/Saonicolau.jpeg'




function App() {
  const Token = process.env.REACT_APP_TOKEN;
  const [viewPort,setViewPort] = useState({
    latitude: 14.9208,
    longitude: -23.5083,
    zoom: 6
  })
  const cards = [
    {
      tittle: "Porto Novo",
      descri: "Santo Antão",
      Image:Portonovo
    },
    {
      tittle: "Porto Grande",
      descri: "São Vicente",
      Image: mindelo
    },
    {
      tittle: "Porto do Tarrafal",
      descri: "São Nicolau",
      Image: Saonicolau
    },
    {
      tittle: "Porto da Palmeira",
      descri: "Sal",
      Image: Sal
    },
    {
      tittle: "Porto Sal-Rei",
      descri: "Boa Vista",
      Image: BoaVista
    },
    {
      tittle: "Porto Ingles",
      descri: "Maio",
      Image: maio
    },
    {
      tittle: "Porto da Praia",
      descri: "Santiago",
      Image: Praia
    },
    {
      tittle: "Porto Vale Cavaleiros",
      descri: "Fogo",
      Image: Fogo
    },
    {
      tittle: "Porto Furna",
      descri: "Brava",
      Image: Brava
    }
  ];

 
  
  return (
    <>
      <Mapa viewPort={viewPort} Token ={Token}/>
      
    </>
  );
}

export default App;


