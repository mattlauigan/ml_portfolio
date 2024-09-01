import React, { ReactNode } from "react";
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
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop } = scrollRef.current;
      setScrollPosition(scrollTop);
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
