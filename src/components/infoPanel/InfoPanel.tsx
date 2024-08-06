import { FC, useContext, useRef } from "react";
import './InfoPanelStyle.css';
import click from '../../assets/click.mp3';
import { CharacterStat } from "./CharacterStat";
import { CharacterContext } from "../../data/CharacterContext";

import dwarfIcon from "../../assets/icons/race/dwarf.png";
import elffIcon from "../../assets/icons/race/elf.png";
import gnomefIcon from "../../assets/icons/race/gnome.png";
import halflingfIcon from "../../assets/icons/race/halfling.png";
import humanIcon from "../../assets/icons/race/human.png";

import bardIcon from "../../assets/icons/class/bard.png";
import clericIcon from "../../assets/icons/class/cleric.png";
import druidIcon from "../../assets/icons/class/druid.png";
import fighterIcon from "../../assets/icons/class/fighter.png";
import rangerIcon from "../../assets/icons/class/ranger.png";
import thiefIcon from "../../assets/icons/class/thief.png";
import wizardIcon from "../../assets/icons/class/wizard.png";

import strIcon from "../../assets/icons/stats/strength.png";
import intIcon from "../../assets/icons/stats/intelligence.png";
import wisIcon from "../../assets/icons/stats/wisdom.png";
import dexIcon from "../../assets/icons/stats/dexterity.png";
import conIcon from "../../assets/icons/stats/constitution.png";
import chaIcon from "../../assets/icons/stats/charisma.png";
import hpIcon from "../../assets/icons/stats/hitpoints.png";
import gpIcon from "../../assets/icons/stats/gold.png";
import { Class, Race, StatName } from "../../data/CharacterData";

const getRaceIcon = (race: Race) => {
  switch (race) {
    case "Dwarf": return dwarfIcon;
    case "Elf": return elffIcon;
    case "Gnome": return gnomefIcon;
    case "Halfling": return halflingfIcon;
    case "Human": return humanIcon;
  }
};

const getClassIcon = (characterClass: Class) => {
  switch (characterClass) {
    case "Bard": return bardIcon;
    case "Cleric": return clericIcon;
    case "Druid": return druidIcon;
    case "Fighter": return fighterIcon;
    case "Ranger": return rangerIcon;
    case "Thief": return thiefIcon;
    case "Wizard": return wizardIcon;
  }
};

const getStatIcon = (stat: StatName) => {
  switch (stat) {
    case "Strength": return strIcon;
    case "Intelligence": return intIcon;
    case "Wisdom": return wisIcon;
    case "Dexterity": return dexIcon;
    case "Constitution": return conIcon;
    case "Charisma": return chaIcon;
    case "HitPoints": return hpIcon;
    case "Gold": return gpIcon;
  }
}

export const InfoPanel: FC = () => {
  const { selectedCharacter: character } = useContext(CharacterContext)!;
  const audioRef = useRef<HTMLAudioElement>(null);

  const clickHandler = () => {
    audioRef.current?.play();
  }

  return (
    <div className="info-panel">
      <h2 className="character-name roboto-bold">{character.name}</h2>
      <div className="character-archetype">
        <CharacterStat value={character.race} icon={getRaceIcon(character.race)} />
        <CharacterStat value={character.characterClass} icon={getClassIcon(character.characterClass)} />
      </div>
      <div className="character-stats">
        {character.stats.map(stat => (
          <CharacterStat
            key={stat.name}
            name={stat.name}
            value={stat.value.toString()}
            modifier={stat.modifier}
            primary={stat.primary}
            icon={getStatIcon(stat.name as StatName)}
          />))}
      </div>
      <audio ref={audioRef}>
        <source src={click} type="audio/mp3" />
      </audio>
      <button
        className='play-button roboto-bold'
        onClick={clickHandler}
      >
        PLAY
      </button>
    </div>
  );
};