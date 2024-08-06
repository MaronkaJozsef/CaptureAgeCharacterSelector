import React from 'react';
import { CharacterSelector } from './components/selector/CharacterSelector';
import { CharacterPreview } from './components/preview/CharacterPreview';
import { InfoPanel } from './components/infoPanel/InfoPanel';

const App: React.FC = () => {
  return (
    <>
      <CharacterSelector />
      <CharacterPreview />
      <InfoPanel />
    </>
  );
}

export default App;