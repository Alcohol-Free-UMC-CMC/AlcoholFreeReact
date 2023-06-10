// const RecipePage = () => {
//     const [scrollData, setScrollData] = useState([]);
  
//     useEffect(() => {
//       fetchData('icon1');
//     }, []);
  
//     const fetchData = (icon) => {
//       let requestUrl = 'http://13.124.104.174:8080/app/guide/ingredient';
//       if (icon === 'icon2') {
//         requestUrl = 'http://13.124.104.174:8080/app/guide/ingredient';
//       }
  
//       customAxios.get(requestUrl)
//         .then(response => {
//           setScrollData(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching scroll data:', error);
//         });
//     };
  
//     const [isBoxShow, setIsBoxShow] = useState(false);
  
//     const handleClick = (icon) => {
//       if (icon === 'icon1') {
//         setIsBoxShow(true);
//         fetchData('icon1');
//       } else if (icon === 'icon2') {
//         setIsBoxShow(true);
//         fetchData('icon2');
//       }
//     };
  
//     return (
//       <div>
//         <H1>홈테일을 기초부터 알려드립니다!</H1>
//         <Layout>
//           <Box onClick={() => setIsBoxShow(!isBoxShow)}>
//             <Icon imageUrl="https://cdn.discordapp.com/attachments/1116910548521590849/1117112680331890799/Img-tool-in.png"
//               onClick={() => handleClick('icon1')}
//             />
//             <Text>
//               <p>반드시 필요합니다.</p>
//               <p>홈테일 기본 도구</p>
//             </Text>
//           </Box>
//           {isBoxShow && (
//             <Scroll>
//               <ScrollBox>
//                 {scrollData.map(item => (
//                   <div key={item.id}>
//                     <ScrollTitle>{item.name}</ScrollTitle>
//                     <ScrollDiv>
//                       <Img src={item.image} />
//                       <ScrollText>
//                         <p>{item.text}</p>
//                       </ScrollText>
//                     </ScrollDiv>
//                   </div>
//                 ))}
//               </ScrollBox>
//             </Scroll>
//           )}
//         </Layout>
//       </div>
//     );
//   };
  
//   export default RecipePage;
  