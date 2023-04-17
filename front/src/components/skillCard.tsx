import { FC } from "react";
import { skillType } from "../models/interfaces";
import { icons } from "../assets/icons/brands";

const Skill: FC<skillType> = ({ value }) => {
  return value ? (
    <div className="skillCard">
      {icons[`${value}`]}
      <span>{value}</span>
    </div>
  ) : null;
};

export default Skill;
