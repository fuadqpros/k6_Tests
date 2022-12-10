import http from 'k6/http';

export const options = {
  vus: 100,
  duration: '5m',
  summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(95)', 'p(99)', 'p(99.99)', 'count'],
  // summaryTimeUnit: 'ms',
  // teardownTimeout: '30s',
  // userAgent: 'MyK6UserAgentString/1.0',
};

export default function () {
  const url_post = 'http://test.k6.io/login';
  const url_get = 'http://test.k6.io';
  const url_delete = 'https://httpbin.test.k6.io/delete';




  const payload = JSON.stringify({
    email: 'testuser@loadimpact.comzzz',
    password: 'testpassword',
  });

  const params1 = { headers: { 'X-MyHeader': 'k6test' } };
  // http.del(url_delete, null, params);

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.get(url_get);
  // console.log(JSON.stringify(res.headers));
  
  http.post(url_post, payload, params);
  http.del(url_delete, null, params1);
  
}
