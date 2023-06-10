import { BottomTabContainer, TabsContainer, BorderDiv } from "./BottomTab.style";
import { BottomMenu } from "../../../data/bottomMenu";
import MenuButton from "../Menus/MenuButton/MenuButton";

const BottomTab = () => {
    return(
        <BottomTabContainer>
            <TabsContainer>
                {
                    BottomMenu.map((menu, index) => (
                        <MenuButton id={menu.id} tabName={menu.name} path={menu.path} icon={menu.icon} key={index}/>
                    ))
                }
            </TabsContainer>
        </BottomTabContainer>
    );
};

export default BottomTab;