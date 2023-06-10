import styled from "styled-components";

const RecipeDetailContainer = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecipeDetailCard = styled.div`
  padding: 4vw;
  margin-top: 4vw;
  width: 95vw;
  border-radius: 20px;
  background-color: #FAFAFA;
  h2 {
    font-weight: 900;
    margin-top: 10px;
    margin-bottom: 10px;
  };
`;

const RecipeInfoContainer = styled.div`
  h2 {
    font-weight: 900;
    font-size: 1.4rem;
    margin-top: 10px;
    margin-bottom: 10px;
  };
`;

const HeartContainer = styled.div`
  position: absolute;
  left: 90%;
  top: 20px;
`;


export { RecipeDetailContainer, RecipeDetailCard, RecipeInfoContainer, HeartContainer };