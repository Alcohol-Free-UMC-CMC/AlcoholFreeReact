import styled from "styled-components";

const RecipePageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 100px);
`;

const HomeBanner = styled.div`
  width: 100vw;
  height: 200px;
  background-color: #D9D9D9;
`;

const RecipeListContainer = styled.div`
  width: 97vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;


export { RecipePageContainer, HomeBanner, RecipeListContainer };