import React from "react";

// Define the shape of the props that Container expects
interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <section className="max-w-[1400px] mx-auto overflow-hidden">
      {children}
    </section>
  );
};

export default Container;
