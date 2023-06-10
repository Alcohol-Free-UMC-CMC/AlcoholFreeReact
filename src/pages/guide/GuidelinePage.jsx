import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { customAxios } from '../../apis/axios/customAxios'; // 수정된 부분

const Layout = styled.div`
      position: relative;
    /* -webkit-transform: translateX(10px); */
    width: 100%;
    /* transform: translateX(10px); */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
`;

const H1 = styled.div`
    font-size: 1rem;
    left: -13%;
    position: relative;
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 5%;
`;

const Icon = styled.div`
  background-image: ${props => `url(${props.imageUrl})`};
  height: 125px;
`;

const Text = styled.div`
  background-color: white;
  position: relative;
  margin: 5%;
    top: 5%;
`;

const Box = styled.div`
     width: 90%;
    /* height: 215px; */
    border: gray solid 1px;
    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
`;

const ScrollBox = styled.div``;

const Img = styled.div`
  width: 40%;
  border-radius: 15px;
  background-image: ${props => `url(${props.src})`};
  background-size: contain;
`;

const ScrollText = styled.div`
  width: 60%;
`;

const ScrollTitle = styled.div``;

const ScrollDiv = styled.div`
  display: flex;
`;

const Scroll = styled.div``;


const GuidelinePage = () => {
  const [iconClicked, setIconClicked] = useState({
    icon1: false,
    icon2: false,
  });
  const [isBoxShow, setIsBoxShow] = useState(false);
  const [isBoxGraShow, setIsBoxGraShow] = useState(false);
  const [scrollData, setScrollData] = useState([]); // 초기값을 빈 배열로 설정

  useEffect(() => {
    // 서버에서 초기 스크롤 데이터 가져오기
    fetchData('icon1');
  }, []);

  const fetchData = (icon) => {
    let requestUrl = 'http://13.124.104.174:8080/app/guide/tool';
    if (icon === 'icon2') {
      requestUrl = 'http://13.124.104.174:8080/app/guide/ingredient';
    }

    customAxios
      .get(requestUrl)
      .then(response => {
        const responseData = response.data.result; // result 속성에 배열 데이터가 있음
        if (Array.isArray(responseData)) {
          setScrollData(responseData);
        } else {
          console.error('Scroll data is not an array:', responseData);
        }
      })
      .catch(error => {
        console.error('Error fetching scroll data:', error);
      });
  };

  const handleClick = (icon) => {
    if (icon === 'icon1') {
      setIconClicked({
        icon1: true,
        icon2: false,
      });
      fetchData('icon1');
      //icon1으로 데이터 패치
    } else if (icon === 'icon2') {
      setIconClicked({
        icon1: false,
        icon2: true,
      });
      fetchData('icon2');
    }
  };

  return (
    <div>
      <H1>홈테일을 기초부터 알려드립니다!</H1>
      <Layout>
        <Box onClick={() => setIsBoxShow(!isBoxShow)}>
          <Icon imageUrl="https://cdn.discordapp.com/attachments/1116910548521590849/1117112680331890799/Img-tool-in.png"
            onClick={() => handleClick('icon1')}
          />
          <Text>
            <p>반드시 필요합니다.</p>
            <p>홈테일 기본 도구</p>
          </Text>
          {
            isBoxShow && (
              <Scroll>
        <ScrollBox>
          {scrollData.map(item => (
          <div key={item.id}>
          <ScrollTitle>{item.name}</ScrollTitle>
          <ScrollDiv>
            <Img src={item.imgUrl} />
            <ScrollText>
              <p>{item.description}</p>
            </ScrollText>
          </ScrollDiv>
            </div>
          ))}
        </ScrollBox>
      </Scroll>
            )
          }
        </Box>

        <Box onClick={() => setIsBoxGraShow(!isBoxGraShow)}>
          <Icon imageUrl="https://media.discordapp.net/attachments/1116910548521590849/1117110613647306774/Img-ingre.png?width=390&height=201"
            onClick={() => handleClick('icon2')}
          />
          <Text>
            <p>갖고 있으면 좋아요!</p>
            <p>홈테일 재료</p>
          </Text>
          {
            isBoxGraShow && (
              <Scroll>
        <ScrollBox>
          {scrollData.map(item => (
            <div key={item.id}>
              <ScrollTitle>{item.name}</ScrollTitle>
              <ScrollDiv>
                <Img src={item.imgUrl} />
                <ScrollText>
                  <p>{item.description}</p>
                </ScrollText>
              </ScrollDiv>
            </div>
          ))}
        </ScrollBox>
      </Scroll> )
          }
        </Box>
      </Layout>
     
    </div>
  );
};

export default GuidelinePage;