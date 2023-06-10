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
  const [scrollData, setScrollData] = useState([]);

  useEffect(() => {
    // 서버에서 초기 스크롤 데이터 가져오기
    fetchData('icon1');
  }, []);

  const fetchData = (icon) => {
    // 아이콘 클릭에 따라서 다르게 요청 보내기
    let requestUrl = '/api/scroll-data';
    if (icon === 'icon2') {
      requestUrl = '/api/other-scroll-data';
    }

    customAxios.get(requestUrl) // customAxios를 사용하여 요청 보내기
      .then(response => {
        setScrollData(response.data);
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
              <div>첫 번째로, 작년 한 회사의 기업부설연구소의 인턴으로 일했을 당시, 첫 업무였기 때문에 많이 부족하였습니다.  하지만 저는 빠른 적응력을 보이며 제 파트를 2개월 안에 마무리 할 수 있었습니다. 
                 2개월 안에 마무리하기 위해서 우선 처음 접하는 회사에서 다루는 프로그래밍 언어가 걱정되었습니다. 저는 질문을 두려워하지 않으며 연구소장님과 대화를 나누고, 부서에서 팀원들과 매주 
                2시간씩 하는 JAVA 및 jQuery 스터디를 추진하여 맡은 업무에 빠르게 적응하였습니다. 이러한 저의 역량을 바탕으로 소프트웨어 개발을 책임감있게 마무리 할 수 있습니다. 
              두 번째로 미국 인턴
              또한, 올해 대학교 소프트웨어 해외연수 학생으로 선발되어 미국에서 프로젝트 경험을 쌓았습니다. 선발되기 전과 후에도 저는 복수전공생으로 전공생보다 전공 수업을 적게 들었기 때문에 보다 많은 것을 
              배우려는 간절한 마음가짐으로 학과 공부를 해왔습니다. 저는 학과 팀 프로젝트 발표 때에도 항상 팀마다 질문을 2개씩 준비하며 학우들에게 많은 것들을 배우려고 노력하였습니다. 결과적으로 이러한 마음가짐과 경험들이 밑거름되어 이번 해외연수때, 미국에서 세미나가 열릴 때마다 다양한 관점에서 고민들을 질문하며 발표자로부터 다양한 경험과 지식을 배울 수 있었습니다.</div>
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
              <div>첫 번째로, 작년 한 회사의 기업부설연구소의 인턴으로 일했을 당시, 첫 업무였기 때문에 많이 부족하였습니다.  하지만 저는 빠른 적응력을 보이며 제 파트를 2개월 안에 마무리 할 수 있었습니다. 
                 2개월 안에 마무리하기 위해서 우선 처음 접하는 회사에서 다루는 프로그래밍 언어가 걱정되었습니다. 저는 질문을 두려워하지 않으며 연구소장님과 대화를 나누고, 부서에서 팀원들과 매주 
                2시간씩 하는 JAVA 및 jQuery 스터디를 추진하여 맡은 업무에 빠르게 적응하였습니다. 이러한 저의 역량을 바탕으로 소프트웨어 개발을 책임감있게 마무리 할 수 있습니다. 
              두 번째로 미국 인턴
              또한, 올해 대학교 소프트웨어 해외연수 학생으로 선발되어 미국에서 프로젝트 경험을 쌓았습니다. 선발되기 전과 후에도 저는 복수전공생으로 전공생보다 전공 수업을 적게 들었기 때문에 보다 많은 것을 
              배우려는 간절한 마음가짐으로 학과 공부를 해왔습니다. 저는 학과 팀 프로젝트 발표 때에도 항상 팀마다 질문을 2개씩 준비하며 학우들에게 많은 것들을 배우려고 노력하였습니다. 결과적으로 이러한 마음가짐과 경험들이 밑거름되어 이번 해외연수때, 미국에서 세미나가 열릴 때마다 다양한 관점에서 고민들을 질문하며 발표자로부터 다양한 경험과 지식을 배울 수 있었습니다.</div>
            )
          }
        </Box>
      </Layout>
      <Scroll>
        <ScrollBox>
          {scrollData.map(item => (
            <div key={item.id}>
              <ScrollTitle>{item.name}</ScrollTitle>
              <ScrollDiv>
                <Img src={item.image} />
                <ScrollText>
                  <p>{item.text}</p>
                </ScrollText>
              </ScrollDiv>
            </div>
          ))}
        </ScrollBox>
      </Scroll>
    </div>
  );
};

export default GuidelinePage;