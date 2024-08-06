import { FC, useContext } from 'react';
import './CharacterSelectorStyle.css';
import { CharacterContext } from '../../data/CharacterContext';

export const CharacterSelector: FC = () => {
  const { characters, selectCharacter } = useContext(CharacterContext)!;

  return (
    <div className="character-selector">
      <div className="panel">
        <h2 className='title roboto-bold'>Character Selector</h2>
        <div className="characters">
          {characters.map((character, index) => (
            <div 
              className='character'
              key={character.name}
              onClick={() => selectCharacter(index)}
            >
              <img 
                className='portrait'
                src={character.portrait} 
                alt='Character portrait'/>
              <h3>{character.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}