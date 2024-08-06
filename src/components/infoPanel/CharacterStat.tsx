import { FC } from "react";

export interface CharacterStatProps {
  icon: string;
  name?: string;
  value: string;
  modifier?: number;
  primary?: boolean;
}

const getModifierText = (modifier?: number) => {
  if (!modifier) return "";

  const prefix = modifier > 0 ? '+' : '-';
  return ` (${prefix}${modifier})`;
}

export const CharacterStat: FC<CharacterStatProps> = ({name, value, modifier, primary, icon}) => (
  <div className={`character-stat ${primary ? "primary" : ""}`}>
    <img className="stat-icon" src={icon} alt={name} />
    {name && <div className="stat-name">{name + getModifierText(modifier)}: </div>}
    <div className="stat-value">{value}</div>
  </div>
);