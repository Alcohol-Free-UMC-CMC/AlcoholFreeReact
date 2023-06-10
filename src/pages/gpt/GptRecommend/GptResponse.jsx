// gpt의 레시피 답변 제공
import axios from "axios";
import { useEffect } from "react";

const GptResponse = (wordBlock, setGptResponse, setWordBlock) => {
    console.log("버튼 누름");
    console.log("재료: ", wordBlock);

    let arr = [];
    for(let i=0; i<wordBlock.length; i++){
        arr.push(wordBlock[i].inputValue);
    }
    console.log(arr);

        const postTodo = () => {
            const data = {
                "ingredients": arr
            };
            const headers = { 'header-name': 'value' };
            const config = { headers, };

            axios.post(
                'http://13.124.104.174:8080/app/recommend',
                data,
                config
            )
            .then((res) => {
                console.log(res.status);
                console.log(res.data.result);

                setGptResponse(res.data.result);
                setWordBlock([]);
            })
            .catch((e) => console.log(e));
    
        };

        postTodo();
};

export default GptResponse;