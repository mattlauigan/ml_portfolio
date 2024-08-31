import { NavType } from "../../ts/types/data";

interface HeroNavProps {
  id: string;
  label: string;
  section: string;
  handleSelect: (section: string) => void;
}

const HeroNav: React.FC<HeroNavProps> = ({ id, label, section, handleSelect }) => {
  const handleClick = () => {
    handleSelect(section);
  };
  return (
    <span>
      <button id={id} onClick={handleClick}>
        {label}
      </button>
    </span>
  );
};

export default HeroNav;
