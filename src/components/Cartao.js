import React, {useState} from "react";
import "./portos.css";


const Cartao = ({cards}) => {
  const [showLocationDetails, setShowLocationDetails] = useState(false);

  const handleClick = () =>{
    setShowLocationDetails(true);
    console.log("clicked");
  }
  
  return (
     cards.map((card, id) => (
      <div key={id} className="card my-item " onClick={handleClick} style={{ backgroundImage: `url(${card.Image})` }}>
      
        
        <h2>
            {card.tittle}
        </h2>
        <p>
            {card.descri }
            
            
        </p>
      
      

      </div>))
   
    
  );
};

export default Cartao;
