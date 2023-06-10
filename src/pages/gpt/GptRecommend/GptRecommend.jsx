import { Input, Text, InputContainer,Button, WordBlockStyle,Recipe,WordBlockContainer, ExplainText, Form, SearchContainer } from "./GptRecommend.style";
import { useState, useId } from "react";
import GptResponse from "./GptResponse";
import gptDefaultImage from '../../../data/images/gptdefault.png';
import {FiSearch} from "react-icons/fi"


let wordBlockId=1;

const GptRecommend = () => {
  const [inputValue, setInputValue] = useState('');
  const [wordBlock, setWordBlock] = useState([]);
  const [gptResponse, setGptResponse] = useState(null);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const MakeWord = (e) => {
    if (e.keyCode === 32) {
      handleSpace();
    }
  };
  
  const handleSpace = () => {
    setWordBlock([...wordBlock, {inputValue: inputValue, id: wordBlockId++}]);
    console.log("단어 배열:", wordBlock);
    setInputValue('');
  };

  const handleRemove = (id) => {
    setWordBlock(wordBlock.filter(block => block.id !== id));
  };
    
  return (
    <div>
      <InputContainer>
        {/* 검색창 소개, input */}
        <ExplainText>
          {/* 검색창 소개 */}
          <Text>재료가 충분히 없나요?</Text>
          <Text>갖고 있는 재료를 아래에 입력해보세요</Text>
        </ExplainText>
        <SearchContainer>
          {/* 검색창 input */}
          <WordBlockContainer>
            {wordBlock.map((block, index) => (
              <WordBlockStyle key={index} onClick={() => handleRemove(block.id)}>
                {block.inputValue}x
              </WordBlockStyle>
            ))}
          </WordBlockContainer>
          <Form>
            <Input onKeyUp={MakeWord} onChange={handleChange} value={inputValue} placeholder="GPT에게 물어보세요."/>
            <Button onClick={wordBlock.length!==0 ? <GptResponse setGptResponse={setGptResponse}/> : null}>
              {<FiSearch size={20}/>}
            </Button>
          </Form>
        </SearchContainer>
      </InputContainer>
      <Recipe> {/* GPT 추천 레시피 */}
              {gptResponse === null
              ?<img src={gptDefaultImage} width='100%' height='100%'/>
              :<div>GPT 추천 레시피입니다.</div>
              }
      </Recipe>
    </div>
  );
};

export default GptRecommend;