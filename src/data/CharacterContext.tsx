import { createContext, FC, PropsWithChildren, useState } from "react";
import { Character, characters as characterData } from "./CharacterData";

export interface CharacterContextData {
  characters: Character[];
  selectedCharacter: Character;
  selectCharacter: (indx: number) => void;
}

export const CharacterContext = createContext<CharacterContextData | null>(null);

export const CharacterProvider: FC<PropsWithChildren> = ({children}) => {
  const [characters, setCharacters] = useState(characterData);
  const [selectedCharacter, setSelectedCharacter] = useState(characterData[2]);

  const defaultValues: CharacterContextData = {
    characters,
    selectedCharacter,
    selectCharacter: (index) => setSelectedCharacter(characters[index]),
  };

  return (
    <CharacterContext.Provider value={defaultValues}>
      {children}
    </CharacterContext.Provider>
  );
}