import { FC } from "react";

export interface CharacterStatProps {
  name?: string;
  value: string;
  modifier?: number;
}

const getModifierText = (modifier?: number) => {
  if (!modifier) return "";

  const prefix = modifier > 0 ? '+' : '-';
  return ` (${prefix}${modifier})`;
}

export const CharacterStat: FC<CharacterStatProps> = ({name, value, modifier}) => (
  <div className="character-stat">
    <div className="stat-icon"></div>
    {name && <div className="stat-name">{name + getModifierText(modifier)}: </div>}
    <div className="stat-value">{value}</div>
  </div>
)