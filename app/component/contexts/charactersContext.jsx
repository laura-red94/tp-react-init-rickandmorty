import { createContext, useContext, useEffect, useState } from "react";

export const CharacterContext = createContext({});


export default function  CharacterProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [current, setCurrent] = useState([]);

  // Charger les données une seule fois
  useEffect(() => {
    async function loadData() {
      const res = await fetch("https://api.sampleapis.com/rickandmorty/characters");
      const data = await res.json();
      setCharacters(data);
      setCurrent(data[0]); // mettre un personnage au départ
    }
    loadData();
  }, []);

  // Fonction pour changer de personnage
  function showRandomCharacter() {
    if (characters.length === 0) return;
    const random = characters[Math.floor(Math.random() * characters.length)];
    setCurrent(random);
  }

  return (
    <CharacterContext.Provider value ={{ current, showRandomCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
}