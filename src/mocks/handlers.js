/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import ENV from 'constants/env';
import { rest } from 'msw';

const baseUrl = ENV.API_BASE_URL;

export const handlers = [
  rest.post(`${baseUrl}/public/auth/login`, async (req, res, ctx) => {
    const { username, password } = await req.json();
    if (username === 'admin' && password === 'admin') return res(ctx.status(200), ctx.json({ access_token: 'this is a token' }));
    if (username === 'guest' && password === 'guest') return res(ctx.status(200), ctx.json({ access_token: 'this is a expired token' }));

    return res(
      ctx.status(401),
      ctx.json({
        code: 401,
        message: 'error',
        success: false,
      }),
    );
  }),

  rest.get(`${baseUrl}/seniors`, async (req, res, ctx) => {
    const token = req.headers.get('authorization');
    if (token === 'Bearer this is a token') {
      return res(
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
      );
    }

    return res(ctx.status(401));
  },
  ),
];
