import React from 'react';
import { CharacterSelector } from './components/selector/CharacterSelector';
import { CharacterPreview } from './components/preview/CharacterPreview';
import { InfoPanel } from './components/infoPanel/InfoPanel';
import { CharacterProvider } from './data/CharacterContext';

const App: React.FC = () => {
  return (
    <CharacterProvider>
      <CharacterSelector />
      <CharacterPreview />
      <InfoPanel />
    </CharacterProvider>
  );
}

export default App;