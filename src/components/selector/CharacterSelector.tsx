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
            <h3>Character 4</h3>
          </div>
          <div className='character'>
            <h3>Character 5</h3>
          </div>
          <div className='character'>
            <h3>Character 6</h3>
          </div>
          <div className='character'>
            <h3>Character 7</h3>
          </div>
          <div className='character'>
            <h3>Character 8</h3>
          </div>
          <div className='character'>
            <h3>Character 9</h3>
          </div>
          <div className='character'>
            <h3>Character 10</h3>
          </div>
        </div>
      </div>
    </div>
  );
};