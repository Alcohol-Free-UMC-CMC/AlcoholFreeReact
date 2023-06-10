import React from 'react';
import { LogoContainer } from "./LogoButton.style";
import { useNavigate } from "react-router-dom";
import logoTypeImg from "../../../../data/images/Logotype.png"

const LogoButton = () => {
  const navigate = useNavigate();
  return (
    <LogoContainer onClick={() => navigate("/")}>
      <img src={logoTypeImg}></img>
    </LogoContainer>
  );
};

export default LogoButton;