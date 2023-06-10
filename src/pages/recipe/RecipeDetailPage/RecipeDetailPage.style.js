import styled from "styled-components";

const RecipeDetailContainer = styled.div`
  width: 400px;
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
  img {
    width: 100%;
    height: 200px;
  };
`;

const RecipeDescription = styled.div`
  width: 100%;
`;

const HashTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`;

const AdditionalInfoContainer = styled.div`
  margin-top: 20px;
  h3 {
    font-size: 1.3rem;
    font-weight: 800;
  }
`;

export { RecipeDetailContainer, AdditionalInfoContainer, RecipeDetailCard, HashTagContainer, RecipeDescription }