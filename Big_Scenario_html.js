
import { sleep } from 'k6'
import http from 'k6/http'
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';
import { group, check, fail } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js'

const TARGET_URL = __ENV.TEST_TARGET || 'https://benc.dev'
const RAMP_TIME = __ENV.RAMP_TIME || '1s'
const RUN_TIME = __ENV.RUN_TIME || '15m'
const USER_COUNT = __ENV.USER_COUNT || 25
const SLEEP = __ENV.SLEEP || 0.5


export function handleSummary(data) {
  return {
    'Big_Scenario_report_v1.html': htmlReport(data, { debug: false }),
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  }
}

export const options = {  
  // vus: 50,
  // duration: '15m',

  stages: [
    { duration: RAMP_TIME, target: USER_COUNT },
    { duration: RUN_TIME, target: USER_COUNT },
  ],
  thresholds: {
    http_req_duration: ['p(95)<1000'],
    iteration_duration: ['max<4000'],
    // http_req_duration_99th: ['p(99)<1000'],
    // http_req_duration_90th: ['p(90)<1000'],
    'http_reqs{expected_response:true}': ['rate>10'],
    // "has correct name": (r) => r.json().form.name === form_data.name,
    // "has correct telephone number": (r) => r.json().form.telephone === form_data.telephone,
    // "has correct email": (r) => r.json().form.email === form_data.email,
    // "has correct comment": (r) => r.json().form.comment === form_data.comment,
    // "has correct toppings": (r) => JSON.stringify(r.json().form.topping) === JSON.stringify(form_data.topping)
  },
  
}

export default function main() {

  group('page_1 - Performance Testing practice', function () { 
      const First = http.get('https://performancetestingpractice.com/');

      if (!check(First, {'is status code 200': (First) => First.status == 200,})) 
        {fail('status code was *not* 200 it equal = ' + First.status);}
        

  //     check(First, {
  //     'is status 200':(r)=> r.status === 200,
  // });
  })

  sleep(SLEEP)

  group('page_2 Home Page - index.php', function () { 
    const Home_Page = http.get('https://performancetestingpractice.com/index.php');
    check(Home_Page, {
      'is status 200':(r)=> r.status === 200,
      'is status 508':(r)=> r.status === 508,
      "protocol is HTTP/2": (r) => r.proto == "HTTP/2.0",

    });
  })

  sleep(SLEEP)

  group('page_3 Senario.php', function () { 
    const Senario = http.get('https://performancetestingpractice.com/senerio.php');
    check(Senario, {
      'is status 200':(r)=> r.status === 200,
    });
  })

  sleep(SLEEP)

  group('page_4 download.php', function () { 
    const Download = http.get('https://performancetestingpractice.com/download.php');
    check(Download, {
      'is status 200':(r)=> r.status === 200,
    });
  })

  sleep(SLEEP)

  group('page_5 register.php', function () { 
    const Rigester = http.get('https://performancetestingpractice.com/register.php');
    check(Rigester, {
      'is status 200':(r)=> r.status === 200,
    });
  })

  sleep(SLEEP)

  group('page_6 login.php', function () { 
    const Login_Page = http.get('https://performancetestingpractice.com/login.php');

    const CSRF_1 = Login_Page.html().find("#contact_form > fieldset > input[type=hidden]").first().attr("value");
    const Session_ID = Login_Page.html().find("input[type=hidden]:nth-child(2)").first().attr("value");    
  
    check(Login_Page, {
      'is status 200':(r)=> r.status === 200,
    });
  })

  sleep(SLEEP)

  const randomFirstName = randomString(8);
  const randomLastName = randomString(10, `aeioubcdfghijpqrstuv`);
  const randomUUID = uuidv4();

  // console.log('The value of the CSRF Token is: ' + CSRF_1);
  // console.log('The value of the Session_ID is: ' + Session_ID);
  // console.log('The value of the randomFirstName is: ' + randomFirstName);
  // console.log('The value of the randomLastName is: ' + randomLastName);
  // console.log('The value of the randomUUID is: ' + randomUUID);

  group('page_7 register.php', function () { 
    const response_reg = http.post('https://performancetestingpractice.com/register.php',
    {
      _hiddenTXT: '1',
      first_name: '${randomFirstName}',
      last_name: '${randomLastName}',
      fld_email: 'fuad@gmail.com',
      fld_cemail: 'fuad@gmail.com',
      fld_username: '',
      fld_password: uuidv4(),
      dob: '04/03/2000',
      phone: '1234567889',
      address: 'jordan',
      city: 'Amman',
      state: 'South Carolina',
      zip: '1234567',
    },
  )
  check(response_reg, {
    'is status 200':(r)=> r.status === 200,
  });
  })

  sleep(SLEEP)

  group('page_8 login.php', function () { 
    const response_login = http.post(
      'https://performancetestingpractice.com/login.php',
      {
        _hidCheckSubmit: '1',
        _txtSession_Id: '${Session_ID}',
        _txtUserName: 'fuad_gmail',
        _txtPassword: '1234',
        csrf_token: '${CSRF_1}',
      },
    )
    check(response_login, {
      'is status 200':(r)=> r.status === 200,
    });
  })

  sleep(SLEEP)

  // Automatically added sleep
  sleep(1)
}
