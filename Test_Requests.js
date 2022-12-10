import http from 'k6/http';
import { sleep } from 'k6';
import {check} from 'k6';


export const options = {
    vus: 1,
    duration: '1s',
    // summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(95)', 'p(99)', 'p(99.99)', 'count'],
    // summaryTimeUnit: 'ms',
    // teardownTimeout: '30s',
    // userAgent: 'MyK6UserAgentString/1.0',
  };


export default function () {

    const url_get_Posts = 'https://jsonplaceholder.typicode.com/posts';
    const url_get_Store = 'https://petstore.swagger.io/v2/store/inventory';

    const url_POST_posts = 'https://jsonplaceholder.typicode.com/posts';
    const POST_Store_Order = 'https://petstore.swagger.io/v2/store/order';




    const payload = JSON.stringify({
        "title": "I'm a performance engineer",
        "body": "Fuad Abu Safi",
        "userId": 1
      });

      const order_data = JSON.stringify(
        {
            "id": 0,
            "petId": 0,
            "quantity": 0,
            "shipDate": "2022-11-24T09:03:54.094Z",
            "status": "placed",
            "complete": true
        }
      );

      const order_headers = { headers: { 
        'accept': 'application/json',
        'Content-Type': 'application/json',
     } };

    // const url_delete = 'https://httpbin.test.k6.io/delete';


  http.get(url_get_Store);
  http.post(url_POST_posts, payload, null);
  const res = http.post(url_POST_posts, order_data, order_headers);
  check(res,{
    'is status 200':(r)=> r.status === 201,
    'is res body has username':(r)=> r.body.includes('placed'),

  })
}
