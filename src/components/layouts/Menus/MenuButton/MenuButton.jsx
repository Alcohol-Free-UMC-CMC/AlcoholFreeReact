import React from 'react';
import { MenuButtonContainer } from "./MenuButton.style";
import { useNavigate } from "react-router-dom";

const MenuButton = ({name, path, icon, tabName}) => {

  const navigate = useNavigate();
  return (
    <MenuButtonContainer onClick={() => {
      navigate(path);
    }}>
      {
        name ? name : <div>{icon}<div>{tabName}</div></div>
      }
    </MenuButtonContainer>
  );
};

export default MenuButton;