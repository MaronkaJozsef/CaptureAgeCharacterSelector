import preview1 from "../assets//previews/ch1.jpg";
import preview2 from "../assets//previews/ch2.jpg";
import preview3 from "../assets//previews/ch3.jpg";
import preview4 from "../assets//previews/ch4.jpg";
import preview5 from "../assets//previews/ch5.jpg";
import preview6 from "../assets//previews/ch6.jpg";
import preview7 from "../assets//previews/ch7.jpg";
import preview8 from "../assets//previews/ch8.jpg";
import preview9 from "../assets//previews/ch9.jpg";

import portrait1 from "../assets//portraits/p1.jpg";
import portrait2 from "../assets//portraits/p2.jpg";
import portrait3 from "../assets//portraits/p3.jpg";
import portrait4 from "../assets//portraits/p4.jpg";
import portrait5 from "../assets//portraits/p5.jpg";
import portrait6 from "../assets//portraits/p6.jpg";
import portrait7 from "../assets//portraits/p7.jpg";
import portrait8 from "../assets//portraits/p8.jpg";
import portrait9 from "../assets//portraits/p9.jpg";

export type Race = "Elf" | "Human" | "Dwarf" | "Halfling" | "Gnome";
export type Class = "Bard" | "Cleric" | "Druid" | "Fighter" | "Ranger" | "Thief" | "Wizard";
export type StatName = "Strength" | "Intelligence" | "Wisdom" | "Dexterity" | "Constitution" | "Charisma" | "Health" | "Gold";

export interface Stat {
  name: string;
  value: number | string;
  modifier?: number;
  primary?: boolean;
}

export interface Character {
  preview: string;
  portrait: string;
  name: string
  race: Race;
  characterClass: Class;
  stats: Stat[];
}

export const characters: Character[] = [
  {
      preview: preview1,
      portrait: portrait1,
      name: "Tharin",
      race: "Dwarf",
      characterClass: "Thief",
      stats: [
          {name: "Strength", value: 10 },
          {name: "Intelligence", value: 11 },
          {name: "Wisdom", value: 13 },
          {name: "Dexterity", value: 9, primary: true},
          {name: "Constitution", value: 10, modifier: 1 },
          {name: "Charisma", value: 7, modifier: -1 },
          {name: "HitPoints", value: 3 },
          {name: "Gold", value: 80 },
      ]
  },
  {
      preview: preview7,
      portrait: portrait2,
      name: "Lysandra",
      race: "Human",
      characterClass: "Bard",
      stats: [
          {name: "Strength", value: 9 },
          {name: "Intelligence", value: 12 },
          {name: "Wisdom", value: 10 },
          {name: "Dexterity", value: 11},
          {name: "Constitution", value: 10 },
          {name: "Charisma", value: 13, primary: true },
          {name: "HitPoints", value: 3 },
          {name: "Gold", value: 90 },
      ]
  },
  {
      preview: preview5,
      portrait: portrait8,
      name: "Swiftwind",
      race: "Elf",
      characterClass: "Ranger",
      stats: [
          {name: "Strength", value: 16, primary: true },
          {name: "Intelligence", value: 10 },
          {name: "Wisdom", value: 17 },
          {name: "Dexterity", value: 13, modifier: 1},
          {name: "Constitution", value: 7, modifier: -1 },
          {name: "Charisma", value: 12 },
          {name: "HitPoints", value: 4 },
          {name: "Gold", value: 50 },
      ]
  },
  {
      preview: preview4,
      portrait: portrait9,
      name: "Arica",
      race: "Halfling",
      characterClass: "Druid",
      stats: [
          {name: "Strength", value: 9, modifier: -1 },
          {name: "Intelligence", value: 9 },
          {name: "Wisdom", value: 13, primary: true },
          {name: "Dexterity", value: 12, modifier: 1},
          {name: "Constitution", value: 9 },
          {name: "Charisma", value: 8 },
          {name: "HitPoints", value: 1 },
          {name: "Gold", value: 80 },
      ]
  },
  {
      preview: preview3,
      portrait: portrait4,
      name: "Fizzlewick",
      race: "Gnome",
      characterClass: "Wizard",
      stats: [
          {name: "Strength", value: 8 },
          {name: "Intelligence", value: 15, primary: true },
          {name: "Wisdom", value: 7 },
          {name: "Dexterity", value: 12},
          {name: "Constitution", value: 10 },
          {name: "Charisma", value: 13 },
          {name: "HitPoints", value: 1 },
          {name: "Gold", value: 100 },
      ]
  },
  {
      preview: preview2,
      portrait: portrait3,
      name: "Sylvar",
      race: "Elf",
      characterClass: "Fighter",
      stats: [
          {name: "Strength", value: 15, primary: true },
          {name: "Intelligence", value: 10 },
          {name: "Wisdom", value: 12 },
          {name: "Dexterity", value: 14, modifier: 1},
          {name: "Constitution", value: 9, modifier: -1 },
          {name: "Charisma", value: 9 },
          {name: "HitPoints", value: 5 },
          {name: "Gold", value: 130 },
      ]
  }
];