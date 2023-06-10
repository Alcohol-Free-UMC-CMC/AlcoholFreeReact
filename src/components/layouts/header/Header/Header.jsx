import React from 'react';
import { HeaderContainer } from './Header.style';
import LogoButton from "../LogoButton/LogoButton";
import { menuData } from '../../../../data/menu';
import MenuButton from '../../Menus/MenuButton/MenuButton';

const Header = () => {
  return (
    
    <HeaderContainer>
    <LogoButton></LogoButton>
      {
        menuData.map((menu) => <MenuButton id={menu.id} name={menu.name} path={menu.path}/>)
      }
    </HeaderContainer>
  );
};

export default Header;