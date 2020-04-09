import React from "react";

// quel est le code JSX (html que je veux afficher) pour ce composant ?
// afficher les props name et hasToken

function Participant(props) {
  return(  
    <li>
      {props.name} {props.hasToken ? "a un jeton" : "n'a pas de jeton"}
    </li>
  )
}

export default Participant;
