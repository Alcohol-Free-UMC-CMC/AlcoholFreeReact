// import { setupServer } from 'msw/node';
import { handlers } from './handlers';
import { setupWorker } from 'msw';

export const server = setupWorker(...handlers);