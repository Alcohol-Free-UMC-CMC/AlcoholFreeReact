import styled from "styled-components";

const GptPageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 100px);
`;

const RecipeListContainer = styled.div`
  width: 90vw;
  flex-wrap: wrap;
  flex-direction: column;
  display: flex;
`;

export { GptPageContainer, RecipeListContainer };