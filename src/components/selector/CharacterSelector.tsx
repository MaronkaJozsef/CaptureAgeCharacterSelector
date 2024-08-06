import { FC } from "react";
import './CharacterSelectorStyle.css';

export const CharacterSelector: FC = () => {
  return (
    <div className="character-selector">
      <div className="panel">
        <h2 className='title roboto-bold'>Character Selector</h2>
        <div className="characters">
          <div className='character'>
            <h3>Character 1</h3>
          </div>
          <div className='character'>
            <h3>Character 2</h3>
          </div>
          <div className='character'>
            <h3>Character 3</h3>
          </div>
          <div className='character'>
            <h3>Character 3</h3>
          </div>
          <div className='character'>
            <h3>Character 3</h3>
          </div>
          <div className='character'>
            <h3>Character 3</h3>
          </div>
          <div className='character'>
            <h3>Character 3</h3>
          </div>
          <div className='character'>
            <h3>Character 3</h3>
          </div>
          <div className='character'>
            <h3>Character 3</h3>
          </div>
        </div>
      </div>
    </div>
  );
};