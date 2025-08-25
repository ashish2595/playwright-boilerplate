const env = process.env.ENV || 'uat';

const baseURLs = {
  qa: 'https://qa-saas.bugbug.io/sign-in',
  uat: 'https://demo-saas.bugbug.io/sign-in',
  prod: 'https://demo-saas.bugbug.io/sign-in',
};

export const baseURL = baseURLs[env];