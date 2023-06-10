//import { rest } from 'msw';
import { keywordMock } from "./apis/keyword";
import { guideMock } from "./apis/guide";
import { recommendMock } from "./apis/recommend";

export const handlers = [
  ...keywordMock(),
  ...recommendMock(),
  ...guideMock()
]