import React, { ReactNode } from "react";

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
  return (
    <div
      className={className}
      style={{
        backgroundImage: `radial-gradient(circle at ${
          GradientPosition().x
        }px ${GradientPosition().y}px, #074473, transparent 80%)`,
      }}
    >
      {children}
    </div>
  );
};

export default GradientDiv;
