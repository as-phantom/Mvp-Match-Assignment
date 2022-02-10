import React from 'react';

const Tailwind: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ ...props }) => {
  return <div {...props}></div>;
};

export default Tailwind;
