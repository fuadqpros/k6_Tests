import { parseHTML } from 'k6/html';

    import { sleep, group, check } from "k6";
    import http from 'k6/http'
    
    export const options = {}
    

export default function main() {
  const res = http.get('https://performancetestingpractice.com/login.php');

  const CSRF_1 = res.html().find("#contact_form > fieldset > input[type=hidden]").first().attr("value");
  const Session_ID = res.html().find("input[type=hidden]:nth-child(2)").first().attr("value");    

  // console.log('The value of the CSRF Token is: ' + CSRF_1);
  // console.log('The value of the Session_ID is: ' + Session_ID);

  const response = http.post('https://performancetestingpractice.com/login.php',
    {
      _hidCheckSubmit: '1',
      _txtSession_Id: '${Session_ID}',
      _txtUserName: 'test_fuad',
      _txtPassword: '1234',
      csrf_token: '${CSRF_1}',
    },
  )

  const response1 = http.post(
    'https://performancetestingpractice.com/dashboard.php',
    {
      _hiddenTXT: '1',
      first_name: 'Fuad',
      last_name: 'Faiez',
      fld_email: 'fffffffffff@dccccr.iiu',
      fld_username: 'test_fuad',
      fld_password: '1234',
      dob: '02/03/2020',
      phone: '24356789005545',
      address: 'Jordan',
      city: 'amman',
      state: 'District of Columbia',
      zip: '64532',
    },
  )

  const response2 = http.get('https://performancetestingpractice.com/logout.php');
  

  // Automatically added sleep
  sleep(1)
}
