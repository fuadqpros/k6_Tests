/*
 * Creator: Fiddler 5.0.1.0
 * https://fiddler2.com
 * exported @ 11/28/2022 9:25:16 PM
 */

import http from 'k6/http'
import { parseHTML } from 'k6/html';
import { sleep, group, check } from "k6";


export const options = {}

// export default function () {

//   const res = http.get('https://test.k6.io/login.php', { responseType: 'text' });
//   const elem = res.html().find('body > form > input[type=hidden]:nth-child(2)');
//   const val = elem.attr('value');
//   console.log('The value of the CSRF Token - field redir is: ' + val);

// }


export default function main() {


  // const res = http.get('https://test.k6.io/login.php', { responseType: 'text' });
  // const elem = res.html().find('input[type=hidden]:nth-child(2)');
  // const val = elem.attr('value');
  // console.log('The value of the CSRF Token is: ' + val);

  let response
  response = http.post(
    'https://test.k6.io/login.php',
    // {
    //   redir: '1',
    //   csrftoken: 'MTIxNDQ0NDgx',
    //   login: 'admin',
    //   password: '123',
    // },
    // <input type="hidden" name="csrftoken" value="NjczNTE2OTYz">
    {
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
    }
  )
        const elem1 = response.html().find('input[type=hidden]:nth-child(2)');
        const token = elem1.attr('value');
        console.log('The value of the CSRF Token : ' + token);

        check(response, { 
          list_OK: (r) => r.status === 200,
        });

  // response = http.post(
  //   'https://test.k6.io/login.php',
  //   {
  //     redir: '1',
  //     csrftoken: 'NjczNTE2OTYz',
  //   },
  //   {
  //     headers: {
  //       'content-type': 'application/x-www-form-urlencoded',
  //       origin: 'https://test.k6.io',
  //       referer: 'https://test.k6.io/my_messages.php',
  //       'upgrade-insecure-requests': '1',
  //       'user-agent':
  //         'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
  //       'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
  //       'sec-ch-ua-mobile': '?0',
  //       'sec-ch-ua-platform': '"Windows"',
  //       Host: 'test.k6.io',
  //     },
  //   }
  // )

  // Automatically added sleep
  sleep(1)
}
