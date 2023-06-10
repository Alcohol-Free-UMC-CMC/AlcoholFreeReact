import styled from "styled-components";

const BottomTabContainer = styled.div`
  border: 1px solid black;
  width: 90%;
  height: 80px;
  padding: 1.7rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BorderDiv = styled.div`
  border: 1px solid black;
`;

export { BottomTabContainer, TabsContainer, BorderDiv };
