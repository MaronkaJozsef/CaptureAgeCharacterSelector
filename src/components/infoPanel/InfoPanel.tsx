import { FC } from "react";
import './InfoPanelStyle.css';
import { CharacterStat } from "./CharacterStat";

export const InfoPanel: FC = () => {
  return (
    <div className="info-panel">
      <h2 className="character-name roboto-bold">Character Name</h2>
      <div className="character-archetype">
        <CharacterStat value="Elf"/>
        <CharacterStat value="Wizard"/>
      </div>
      <div className="character-stats">
        <CharacterStat name="Strength" value="10"/>
        <CharacterStat name="Intelligence" value="10" modifier={2}/>
        <CharacterStat name="Wisdom" value="10"/>
        <CharacterStat name="Dexterity" value="10" modifier={-1}/>
        <CharacterStat name="Constitution" value="10"/>
        <CharacterStat name="Charisma" value="10"/>
        <CharacterStat name="Health" value="10"/>
        <CharacterStat name="Gold" value="10"/>
      </div>
    </div>
  );
};