import "../assets/css/main.scss";
import { Content } from "./content";
import GradientDiv from "./gradient-div";
import { Hero } from "./hero";

export function Body() {
  return (
    <>
        <GradientDiv className="Container">
          <Hero />
          <Content />
        </GradientDiv>
      
    </>
  );
}
