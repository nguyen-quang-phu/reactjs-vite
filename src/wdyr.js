/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import whyDidYouRender from '@welldone-software/why-did-you-render';

if (import.meta.env.DEV) {
  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffNameColor: 'darkturquoise',
  });
}
