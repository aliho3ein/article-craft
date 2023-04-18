import { FC } from "react";
import { skillType } from "../models/interfaces";
import { icons } from "../assets/icons/brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFirstOrder } from "@fortawesome/free-brands-svg-icons";

const Skill: FC<skillType> = ({ value }) => {
  return value ? (
    <div className="skillCard">
      {icons[`${value.toLowerCase().trim().split(".")[0]}`] || (
        <FontAwesomeIcon icon={faFirstOrder} className="icon" />
      )}
      <span>{value}</span>
    </div>
  ) : null;
};

export default Skill;
