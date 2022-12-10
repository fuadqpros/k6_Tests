import { parseHTML } from 'k6/html';
import { sleep, group, check } from "k6";
import http from 'k6/http'

export const options = {
  vus: 10,
  duration: '1.5m',
}

export default function main() {
  let response

   group('page_1 - https://test.k6.io/login.php', function () {
    response = http.get('https://test.k6.io/login.php', {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      origin: 'https://test.k6.io',
      referer: 'https://test.k6.io/my_messages.php',
      'upgrade-insecure-requests': '1',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      Host: 'test.k6.io',
      }, 
    })
      
  // const elem = response.html().find('body > form > input[type=hidden]:nth-child(2)');
  const token = response.html().find("input[type=hidden]:nth-child(2)").first().attr('value');
  console.log('The value of the hidden field is: ' + token);
  
  check(response, { 
      list_OK: (r) => r.status === 200,
    });
  })
}