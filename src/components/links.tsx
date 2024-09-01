import Behance from "../assets/links-svg/behance.svg";
import LinkedIn from "../assets/links-svg/linkedin.svg";
import GitHub from "../assets/links-svg/github.svg";

type AccountType = {
  name: string,
  image: string,
  url: string
}

const Accounts : AccountType[] = [
  {
    name: 'GitHub',
    image: `${GitHub}`,
    url:"https://github.com/mattlauigan"
  },
  {
    name: 'LinkedIn',
    image: `${LinkedIn}`,
    url:"https://www.linkedin.com/in/mattlauigan/"
  },
  {
    name: 'Be`hance',
    image: `${Behance}`,
    url:"https://www.behance.net/mattlauigan"
  }
]

const Links = ( ) => {
  return (
    <div className="links">
      {Accounts.map((account) => 
      <a target="_blank" rel="noreferrer" href={account.url}>
        <img src={account.image} alt={account.name} />
      </a>
      )}

    </div>
  );
};

export default Links;
