import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;


