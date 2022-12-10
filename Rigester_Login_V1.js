/*
 * Creator: Fiddler 5.0.1.0
 * https://fiddler2.com
 * exported @ 11/28/2022 2:06:54 PM
 */

import { sleep } from 'k6'
import http from 'k6/http'

export const options = {  
  discardResponseBodies: true,
  vus: 100,
  duration: '5m',
  summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(95)', 'p(99)', 'p(99.99)', 'count'],
  // summaryTimeUnit: 'ms',
  // teardownTimeout: '30s',
  // userAgent: 'MyK6UserAgentString/1.0',
}

export default function main() {
  let response

  response = http.post(
    'https://performancetestingpractice.com/register.php',
    {
      _hiddenTXT: '1',
      first_name: 'refr',
      last_name: 'frrfe',
      fld_email: 'efre@cd.ik',
      fld_cemail: 'efre@cd.ik',
      fld_username: 'test_fuad2',
      fld_password: '1234',
      dob: '12/03/2019',
      phone: '0799076684',
      address: 'wdewfr',
      city: 'amman',
      state: 'Louisiana',
      zip: '64532',
    },
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        origin: 'https://performancetestingpractice.com',
        referer: 'https://performancetestingpractice.com/register.php',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        Host: 'performancetestingpractice.com',
      },
    }
  )

  response = http.post(
    'https://performancetestingpractice.com/register.php?message=1',
    {
      _hiddenTXT: '1',
      first_name: 'wece',
      last_name: 'ececsd',
      fld_email: 'sds@dsd.cc',
      fld_cemail: 'sds@dsd.cc',
      fld_username: 'test_fuad5',
      fld_password: '1234',
      dob: '10/10/2022',
      phone: '2435678900',
      address: 'wdewfr',
      city: 'amman',
      state: 'Louisiana',
      zip: '64532',
    },
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        origin: 'https://performancetestingpractice.com',
        referer: 'https://performancetestingpractice.com/register.php?message=1',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        Host: 'performancetestingpractice.com',
      },
    }
  )

  response = http.post(
    'https://performancetestingpractice.com/login.php',
    {
      _hidCheckSubmit: '1',
      _txtSession_Id: 'tw-5131822612280866816wor',
      _txtUserName: 'test_fuad3',
      _txtPassword: '1234',
      csrf_token: 'RiaNhiz905aO3py+phcrE2/6schD0w4qsEGqZW/6PZ4=',
    },
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        origin: 'https://performancetestingpractice.com',
        referer: 'https://performancetestingpractice.com/login.php',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        Host: 'performancetestingpractice.com',
      },
    }
  )

  response = http.post(
    'https://performancetestingpractice.com/login.php?error=1',
    {
      _hidCheckSubmit: '1',
      _txtSession_Id: 'tw-4845264220799475712wor',
      _txtUserName: 'test_fuad',
      _txtPassword: '1234',
      csrf_token: 'RiaNhiz905aO3py+phcrE2/6schD0w4qsEGqZW/6PZ4=',
    },
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        origin: 'https://performancetestingpractice.com',
        referer: 'https://performancetestingpractice.com/login.php?error=1',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        Host: 'performancetestingpractice.com',
      },
    }
  )

  // Automatically added sleep
  sleep(1)
}
