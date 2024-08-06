import { FC, useContext, useRef } from 'react';
import './CharacterSelectorStyle.css';
import { CharacterContext } from '../../data/CharacterContext';
import click from '../../assets/click.mp3';

export const CharacterSelector: FC = () => {
  const { characters, selectCharacter, selectedCharacter } = useContext(CharacterContext)!;
  const audioRef = useRef<HTMLAudioElement>(null);

  const clickHandler = (index: number) => {
    audioRef.current?.play();
    selectCharacter(index);
  };

  return (
    <div className="character-selector">
      <h2 className='title roboto-bold'>Heroes</h2>
      <div className="characters">
        <audio ref={audioRef}>
          <source src={click} type="audio/mp3" />
        </audio>
        {characters.map((character, index) => (
          <div
            className={"character" + (character == selectedCharacter ? " selected" : "")}
            key={character.name}
            onClick={() => clickHandler(index)}
          >
            <img
              className='portrait'
              src={character.portrait}
              alt='Character portrait' />
            <h3 className='name'>{character.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}