import "../assets/css/header.scss";
import reactLogo from "../assets/preact.svg"

export function Header() {
  return (
    <>
      <header>
        <div>
          <img src={reactLogo} alt="" />
          <div>
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
          </div>
        </div>
      </header>
    </>
  );
}
