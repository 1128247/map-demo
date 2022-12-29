let BASE_URL = '';
const TIMEOUT = 5000;
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api';
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/prod';
} else {
  BASE_URL = 'http://coderwhy.org/test';
}

export { BASE_URL, TIMEOUT };
