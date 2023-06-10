import { rest } from 'msw';

export const keywordMock = () => {
  return [
    rest.get(`${process.env.REACT_APP_API_URL}/app/keyword/tags`, (req, res, ctx) => {
      return res(        
        ctx.status(200),
        ctx.json([{
          tag_id: "123dsf",
          name: "달달한"
        }, {
          tag_id: "975679asfd",
          name: "상큼한"
        }, {
          tag_id: "15573dsf",
          name: "향긋한"
        }])
      )
    }),
    rest.get(`${process.env.REACT_APP_API_URL}/app/keyword/ingredients`, (req, res, ctx) => {
      return res(        
        ctx.status(200),
        ctx.json([{
          ingredient_id: "2543dgfds",
          ingredientName: "사이다",
        }, {
          ingredient_id: "5234hhdfds",
          ingredientName: "녹차",
        }, {
          ingredient_id: "saf75437",
          ingredientName: "콜라",
        }])
      )
    })
  ]
};