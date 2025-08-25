const env = process.env.ENV || 'uat';
process.env.ENV = env; // ensure ENV is set for other files

const baseURLs = {
  qa: 'https://qa-saas.bugbug.io/sign-in',
  uat: 'https://demo-saas.bugbug.io/sign-in',
  prod: 'https://demo-saas.bugbug.io/sign-in',
};

export const baseURL = baseURLs[env];