// check is env dev
export const isDev = process.env.NODE_ENV === 'development';

// check is env prod
export const isProd = process.env.NODE_ENV === 'production';

// fetch domain name from env
export const domainName = process.env.DOMAIN_NAME || '';

// separate path from url
export const getPath = (url) => {
  const path = url.split('?')[0];
  return path.split('/').slice(1).join('/');
};
