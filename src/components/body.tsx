import "../assets/css/body.scss";
import { Content } from "./content";
import { Hero } from "./hero";

export function Body() {
  return (
    <>
      <body>
        <Hero />
        <Content />
      </body>
    </>
  );
}
