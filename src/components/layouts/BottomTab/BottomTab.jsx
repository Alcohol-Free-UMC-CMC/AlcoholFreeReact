import { BottomTabContainer, TabsContainer, BorderDiv } from "./BottomTab.style";

const BottomTab = () => {
    return(
        <BottomTabContainer>
            <TabsContainer>
                <BorderDiv>
                    야메레시피
                </BorderDiv>
                <BorderDiv>
                    홈
                </BorderDiv>
                <BorderDiv>
                    마이페이지
                </BorderDiv>
            </TabsContainer>
        </BottomTabContainer>
    );
};

export default BottomTab;