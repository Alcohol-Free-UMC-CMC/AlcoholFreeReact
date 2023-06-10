import React from 'react';
import { MenuButtonContainer } from "./MenuButton.style";
import { useNavigate } from "react-router-dom";

const MenuButton = ({name, path}) => {
  const navigate = useNavigate();
  return (
    <MenuButtonContainer onClick={() => {
      navigate(path);
    }}>
      {
        name
      }
    </MenuButtonContainer>
  );
};

export default MenuButton;