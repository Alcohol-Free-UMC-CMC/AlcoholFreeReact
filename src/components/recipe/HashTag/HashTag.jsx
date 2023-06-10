import React from 'react';
import { HashTagContainer } from "./HashTag.style";

const HashTag = ({bgColor, text}) => {
  return (
    <HashTagContainer bgColor={bgColor}>
      #
      {
        text
      }
    </HashTagContainer>
  );
};

export default HashTag;