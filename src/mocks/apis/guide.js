import { rest } from 'msw';

export const guideMock = () => {
  return [
    rest.get(`${process.env.REACT_APP_API_URL}/app/guide/tool`, (req, res, ctx) => {
      return res(        
        ctx.status(200),
        ctx.json([{
          id: "14765235",
          image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Multi-use_water_bottle.JPG",
          description: "보틀입니다."
        }, {
          id: "1476796sfd",
          image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Multi-use_water_bottle.JPG",
          description: "보틀입니다."
        }, {
          id: "1476579nfs",
          image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Multi-use_water_bottle.JPG",
          description: "보틀입니다."
        }])
      )
    }),
    rest.get(`${process.env.REACT_APP_API_URL}/app/guide/ingredient`, (req, res, ctx) => {
      return res(        
        ctx.status(200),
        ctx.json([{
          id: "14765235sfa",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Longjing_tea_steeping_in_gaiwan.jpg/330px-Longjing_tea_steeping_in_gaiwan.jpg",
          description: "재료입니다."
        }, {
          id: "14765235dac",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Longjing_tea_steeping_in_gaiwan.jpg/330px-Longjing_tea_steeping_in_gaiwan.jpg",
          description: "재료입니다."
        }, {
          id: "14765235sdf",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Longjing_tea_steeping_in_gaiwan.jpg/330px-Longjing_tea_steeping_in_gaiwan.jpg",
          description: "재료입니다."
        }])
      )
    })
  ]
}