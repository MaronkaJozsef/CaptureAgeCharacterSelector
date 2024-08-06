import { FC, useContext } from "react";
import './InfoPanelStyle.css';
import { CharacterStat } from "./CharacterStat";
import { CharacterContext } from "../../data/CharacterContext";

export const InfoPanel: FC = () => {
  const { selectedCharacter: character } = useContext(CharacterContext)!;

  return (
    <div className="info-panel">
      <h2 className="character-name roboto-bold">{character.name}</h2>
      <div className="character-archetype">
        <CharacterStat value={character.race} />
        <CharacterStat value={character.characterClass} />
      </div>
      <div className="character-stats">
        {character.stats.map(stat => (
          <CharacterStat
            key={stat.name}
            name={stat.name}
            value={stat.value.toString()}
            modifier={stat.modifier}
            primary={stat.primary}
          />))}
      </div>
      <button className='play-button roboto-bold'>PLAY</button>
    </div>
  );
};