import React from 'react';
import { LogoContainer } from "./LogoButton.style";
import { useNavigate } from "react-router-dom";

const LogoButton = () => {
  const navigate = useNavigate();
  return (
    <LogoContainer onClick={() => navigate("/")}>
      
    </LogoContainer>
  );
};

export default LogoButton;