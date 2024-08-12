type SectionData = {
  id: string;
  state: boolean;
  label: string;
};

const HeroNav = ({ id, label }: SectionData) => {
  return (
    <>
      <span>
        <button id={id}>{label}</button>
      </span>
    </>
  );
};

export default HeroNav;
