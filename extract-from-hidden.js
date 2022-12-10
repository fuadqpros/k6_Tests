import http from 'k6/http';
import { sleep, group, check  } from 'k6';

export default function () {

  const res = http.get('https://test.k6.io/my_messages.php');

  const val = res.html().find("input[type=hidden]:nth-child(2)").first().attr("value");    

  console.log('The value of the hidden field CSRF Token is: ' + val);

  sleep(1);
  
}
