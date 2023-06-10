import styled from "styled-components";

const RecipeCardContainer = styled.div`
  width: 45vw;
  margin: 1.25vw;
  height: 45vw;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  img {
    border-radius: 20px;
    width: 40vw;
    height: 40vw;
  }
  p {
    font-weight: 800;
  }
`;

export { RecipeCardContainer };