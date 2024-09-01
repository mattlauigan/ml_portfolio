import React, { ReactNode, useEffect, useState } from "react";
import { useRef } from "react";
import useScroll from "../store/scroll";

interface GradientDivProps {
  children: ReactNode;
  className: string;
}

const GradientDiv: React.FC<GradientDivProps> = ({ children, className }) => {
  const GradientPosition = () => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
      const updateMousePosition = (ev: MouseEvent) => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };
      window.addEventListener("mousemove", updateMousePosition);
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, []);

    return mousePosition;
  };

  const setScrollPosition = useScroll((state) => state.setScrollTop);
  const setCurrentSection = useScroll((state) => state.setCurrentSection);
  const scrollRef = useRef(null);
  const topContainer = document.getElementById("top-div") as HTMLElement;
  const xpContainer = document.getElementById(
    "experience-container"
  ) as HTMLElement;
  const projectContainer = document.getElementById(
    "project-container"
  ) as HTMLElement;

  function isInViewPort(element: HTMLElement) {
    const rect = element.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop } = scrollRef.current
      setScrollPosition(scrollTop)
    }

    if (isInViewPort(topContainer) === true) {
      console.log(topContainer.id)
      setCurrentSection(topContainer.id)
    }

    if (isInViewPort(xpContainer) === true) {
      console.log(xpContainer.id)
      setCurrentSection(xpContainer.id)
    }
    if (isInViewPort(projectContainer) === true) {
      console.log(xpContainer.id)
      setCurrentSection(projectContainer.id)
    }
  };

  return (
    <div
      ref={scrollRef}
      className={className}
      onScroll={handleScroll}
      style={{
        backgroundImage: `radial-gradient(circle at ${GradientPosition().x}px ${
          GradientPosition().y
        }px, #074473, transparent 80%)`,
        position: `fixed`,
      }}
    >
      {children}
    </div>
  );
};

export default GradientDiv;
