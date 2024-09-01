
interface HeroNavProps {
  id: string;
  label: string;
  state: boolean;
  section: string;
  handleSelect: (section: string) => void;
}

const HeroNav: React.FC<HeroNavProps> = ({
  id,
  label,
  section,
  handleSelect,
}) => {
  const handleClick = () => {
    handleSelect(section);
  };
  return (
    <span>
      <input type="radio" name='nav-select' id={id} className="nav-select" value={label} onClick={handleClick}/>
      <label htmlFor={id}>{label}</label>
    </span>
  );
};

export default HeroNav;
