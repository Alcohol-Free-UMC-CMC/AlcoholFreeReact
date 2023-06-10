import { rest } from 'msw';

export const recommendMock = () => {
  return [
    rest.get(`${process.env.REACT_APP_API_URL}/app/recommend`, (req, res, ctx) => {
      return res(        
        ctx.status(200),
        ctx.json([{
          id: "afdsf1241",
          cocktail_name: "소나무 커피 야자수",
          description: "소나무 커피 야자수소나무 커피 야자수소나무 커피 야자수소나무 커피 야자수"
        }, {
          id: "1476796sfd",
          cocktail_name: "즐거운 야자나무",
          description: "보틀입니다."
        }, {
          id: "1476579nfs",
          cocktail_name: "야자나무 야자나무 야자나무",
          description: "보틀입니다."
        }])
      )
    })
  ]
}