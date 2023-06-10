import styled from "styled-components";

const BottomTabContainer = styled.div`
  border: 1.5px solid #e2e2e2;
  width: 90%;
  height: 80px;
  padding: 1.7rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1rem;
  box-shadow: 0px 3px 7px #928788;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { BottomTabContainer, TabsContainer };
