/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import ENV from 'constants/env';
import { rest } from 'msw';

const baseUrl = ENV.API_BASE_URL;

export const handlers = [
  rest.post(`${baseUrl}/public/auth/login`, async (req, res, ctx) => {
    const { username, password } = await req.json();
    if (username === 'zane' && password === 'anhmatay') return res(ctx.status(200), ctx.json({ access_token: 'this is a token' }));

    return res(
      ctx.status(401),
      ctx.json({
        code: 401,
        message: 'error',
        success: false,
      }),
    );
  }),

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
