import { Body } from "./components/body";
import GradientDiv from "./components/gradient-div";

export function App() {
  return (
    <>
      <GradientDiv  className="Container">
        
        <div id="top-div"></div> {/*  to scroll to the top */}
        <Body />
      </GradientDiv>
    </>
  );
}
