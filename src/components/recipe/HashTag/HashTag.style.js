import styled from "styled-components";

//프롭스값으로 다르게 처리하기
const HashTagContainer = styled.div`
  margin-right: 1vw;
  border-radius: 20px;
  background-color: ${(props) => props.bgColor};
  font-size: 0.8rem;
  font-weight: 800;
  padding: 0.3rem;
`;

export { HashTagContainer };
