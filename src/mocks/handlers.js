/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import ENV from 'constants/env';
import { rest } from 'msw';

const baseUrl = ENV.API_BASE_URL;

export const handlers = [
  rest.get(`${baseUrl}/seniors`, (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: 1,
            name: 'Harvey',
          },
          {
            id: 2,
            name: 'Baron',
          },
          {
            id: 3,
            name: 'Gary',
          },
        ],
      }),
    ),
  ),
];
