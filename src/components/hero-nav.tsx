import { NavType } from "../../ts/types/data";

const HeroNav = ({ id, label }: NavType) => {
  return (
    <span>
      <button id={id}>{label}</button>
    </span>
  );
};

export default HeroNav;
