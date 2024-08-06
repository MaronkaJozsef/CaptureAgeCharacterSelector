import React, { useContext } from 'react';
import './CharacterPreviewStyle.css';
import { CharacterContext } from '../../data/CharacterContext';

export const CharacterPreview: React.FC = () => {
  const { selectedCharacter } = useContext(CharacterContext)!;

  return (
    <div className="character-preview">
      <div className="character-container">
        <img src={selectedCharacter.preview} alt='Full length portrait of the selected character'/>
      </div>
    </div>
  );
}
