
import MenuLink from "@/component/menu";
import { useContext, useEffect } from "react";
import {CharacterContext} from '@/contexts/charactersContext'


export default function ContenuAPI() {
  const {current, showRandomCharacter } = useContext(CharacterContext);
  useEffect (() => {
    showRandomCharacter();

  },[]);

  if (!current) return <p>Chargement...</p>;

  return (
    <div>
      <h2>{current.name}</h2>
      <img src={current.image} alt={current.name} width={200} />

      <p><strong>Espèce :</strong> {current.species}</p>
      <p><strong>Statut :</strong> {current.status}</p>
      <p><strong>Type :</strong> {current.type}</p>
      <p><strong>Gender :</strong> {current.gender}</p>
      <p><strong>Origin  :</strong> {current.origin}</p>
  

      <button onClick={showRandomCharacter} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", 
    backgroundColor: "#007bff", 
    color: "white",
    border: "none", 
    borderRadius: "0.3rem" }}>
        Afficher un autre personnage
      </button>
    </div>
  );
}